// const { GraphQLError } = require(`graphql`);

const resolvers = {
    Query: {
        searchUser: async (_, args, contextValue) => {
            const { db } = contextValue;
            const { inputSearch } = args;

            console.log(inputSearch, `<----------`);
            

            const Users = await db.collection(`Users`).find({
                username: {
                    '$regex': inputSearch, '$options': 'i'
                }
            }).toArray();

            return Users;
        },
    }
}

module.exports = resolvers;