const { GraphQLError } = require(`graphql`);
const { ObjectId } = require(`mongodb`);

const resolvers = {
    Mutation: {
        followUser: async (_, args, contextValue) => {
            const { db, authentication } = contextValue;
            const { follow } = args;

            const verifiedUser = await authentication();

            if(!verifiedUser) {
                throw new Error(`Unauthenticated User`);
            }

            if(follow.followingId === verifiedUser._id.toString()) {
                throw new Error(`Can't follow yours own account`)
            }

            const newFollow = {
                followingId: new ObjectId(follow.followingId),
                followerId: verifiedUser._id,
                createdAt: new Date(),
                updatedAt: new Date()
            }

            const data = await db.collection(`Follows`).insertOne(newFollow);     

            return {...newFollow, _id: data.insertedId}
        }
    }
}

module.exports = resolvers;