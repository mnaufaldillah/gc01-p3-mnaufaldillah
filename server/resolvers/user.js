// const { GraphQLError } = require(`graphql`);
const { ObjectId } = require("mongodb");

const resolvers = {
    Query: {
        searchUser: async (_, args, contextValue) => {
            const { db } = contextValue;
            const { inputSearch } = args;

            // console.log(inputSearch, `<----------`);
            

            const Users = await db.collection(`Users`).find({
                username: {
                    '$regex': inputSearch, '$options': 'i'
                }
            }).toArray();

            return Users;
        },
        getUser: async (_, args, contextValue) => {
            const { db } = contextValue;
            const { id } = args;
            

            const User = await db.collection(`Users`).findOne({
                _id : new ObjectId(id)
            })

            return User;
        },
    }
}

module.exports = resolvers;