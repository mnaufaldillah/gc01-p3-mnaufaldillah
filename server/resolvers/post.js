const { GraphQLError } = require(`graphql`);
const { ObjectId } = require(`mongodb`);
const redis = require(`../config/redisConfig.js`);

const resolvers = {
    Query: {
        getPosts: async (_, args, contextValue) => {
            const { db, authentication } = contextValue;

            const verifiedUser = await authentication();

            if(!verifiedUser) {
                throw new Error(`Unauthenticated User`);
            }

            const postsCache = await redis.get(`posts:all`);

            if(postsCache) {
                return JSON.parse(postsCache)
            }

            const agg = [
                {
                    '$lookup': {
                        'from': 'Users', 
                        'localField': 'authorId', 
                        'foreignField': '_id', 
                        'as': 'author'
                    }
                }, {
                    '$unwind': {
                        'path': '$author', 
                        'preserveNullAndEmptyArrays': true
                    }
                }, {
                    '$project': {
                        'author.password': 0
                    }
                }
            ];

            const coll = db.collection(`Posts`);
            const cursor  = coll.aggregate(agg);
            const posts = await cursor.toArray();

            await redis.set("posts:all", JSON.stringify(posts));

            return posts;
        },
        getPostById: async (_, args, contextValue) => {
            const { db, authentication } = contextValue;
            const { postId } = args;

            const verifiedUser = await authentication();

            if(!verifiedUser) {
                throw new Error(`Unauthenticated User`);
            }

            const agg = [
                {
                    '$match': {
                        '_id': new ObjectId(postId)
                    }
                }, {
                    '$lookup': {
                        'from': 'Users', 
                        'localField': 'authorId', 
                        'foreignField': '_id', 
                        'as': 'author'
                    }
                }, {
                    '$unwind': {
                        'path': '$author', 
                        'preserveNullAndEmptyArrays': true
                    }
                }, {
                    '$project': {
                        'author.password': 0
                    }
                }
            ];
            
            const coll = db.collection(`Posts`);
            const cursor  = coll.aggregate(agg);
            const post = await cursor.toArray();

            return post[0];
        }
    },
    Mutation: {
        addPost: async (_, args, contextValue) => {
            const { db, authentication } = contextValue;
            const { post } = args;

            const verifiedUser = await authentication();

            if(!verifiedUser) {
                throw new Error(`Unauthenticated User`);
            }

            const newPost = {
                content: post.content,
                tags: post.tags,
                imgUrl: post.imgUrl,
                authorId: verifiedUser._id,
                comments: [],
                likes: [],
                createdAt: new Date(),
                updatedAt: new Date()
            }

            const data = await db.collection(`Posts`).insertOne(newPost);

            await redis.del(`posts:all`);

            return {...newPost, _id: data.insertedId}
        },
        commentPost: async (_, args, contextValue) => {
            const { db, authentication } = contextValue;
            const { comment } = args;
    
            const verifiedUser = await authentication();
    
            if(!verifiedUser) {
                throw new Error(`Unauthenticated User`);
            }
    
            const newComment = {
                content: comment.content,
                username: verifiedUser.username,
                createdAt: new Date(),
                updatedAt: new Date()
            }

            await db.collection(`Posts`).updateOne(
                {
                    _id: new ObjectId(comment.postId)
                },
                {
                    $push: { comments: newComment }
                }
            );

            return newComment;
        },
        likePost: async (_, args, contextValue) => {
            const { db, authentication } = contextValue;
            const { like } = args;
    
            const verifiedUser = await authentication();

            // console.log(verifiedUser);
            
    
            if(!verifiedUser) {
                throw new Error(`Unauthenticated User`);
            }
    
            const newLike = {
                username: verifiedUser.username,
                createdAt: new Date(),
                updatedAt: new Date()
            }

            await db.collection(`Posts`).updateOne(
                {
                    _id: new ObjectId(like.postId)
                },
                {
                    $push : { likes: newLike }
                }
            );

            return newLike;
        }
    }
}

module.exports = resolvers;