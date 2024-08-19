const typeDefs = `#graphql
    type Follow {
        _id: ID
        followingId: ID
        followerId: ID
        createdAt: String
        updatedAt: String
    }

    input NewFollow {
        followingId: ID
    }

    type Mutation {
        followUser{follow: NewFollow}: Follow
    }
`

module.exports = typeDefs;