const typeDefs = `#graphql
    type User {
        _id: ID
        name: String
        username: String
        email: String
        password: String
    }

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

    type Follow {
        _id: ID
        followingId: ID
        followerId: ID
        createdAt: String
        updatedAt: String
    }

    type Query {
        getPosts: [Post]
        searchUser: [User]
        getUser: User
    }

    input NewRegister {
        name: String
        username: String!
        email: String!
        password: String!
    }

    input NewLogin {
        email: String!
        password: String!
    }

    input NewPost {
        content: String
        tags: [String]
        imgUrl: String
    }

    input NewComment {
        content: String
    }

    input NewFollow {
        followingId: ID
    }

    type Mutation {
        registerUser(register: NewRegister): User
        loginUser(login: NewLogin): User
        addPost(post: NewPost): Post
        commentPost(comment: NewComment): Post
        likePost: Post
        followUser{follow: NewFollow}: Follow
    }
`