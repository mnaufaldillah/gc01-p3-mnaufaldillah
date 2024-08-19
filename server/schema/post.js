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
    }

    input NewPost {
        content: String
        tags: [String]
        imgUrl: String
    }

    input NewComment {
        content: String
    }


    type Mutation {
        addPost(post: NewPost): Post
        commentPost(comment: NewComment): Post
        likePost: Post
    }
`

module.exports = typeDefs;