const typeDefs = `#graphql
    type Post {
         _id: ID
        content: String
        tags: [String]
        imgUrl: String
        authorId: ID
        comments: [Comment]
        likes: [Like]
        createdAt: String
        updatedAt: String
        author: User
    }

    type Comment {
        content: String
        username: String
        createdAt: String
        updatedAt: String
    }

    type Like {
        username: String
        createdAt: String
        updatedAt: String
    }


    type Query {
        getPosts: [Post]
        getPostById(postId: ID): Post
    }

    input NewPost {
        content: String!
        tags: [String]
        imgUrl: String
    }

    input NewComment {
        content: String
        postId: ID
    }

    input NewLike {
        postId: ID
    }


    type Mutation {
        addPost(post: NewPost): Post
        commentPost(comment: NewComment): Comment
        likePost(like: NewLike): Like
    }
`

module.exports = typeDefs;