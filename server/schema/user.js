const typeDefs = `#graphql
    type User {
        _id: ID
        name: String
        username: String
        email: String
    }

    type Query {
        searchUser(inputSearch: String): [User]
        getUser(id: ID): User
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

    type Mutation {
        registerUser(register: NewRegister): User
        loginUser(login: NewLogin): User
    }
`;

module.exports = typeDefs;