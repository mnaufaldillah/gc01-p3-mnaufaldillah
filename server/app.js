if(process.env.NODE_ENV !== `production`) {
    require(`dotenv`).config();
}
// console.log(process.env, `<---------- process env`);

const { ApolloServer } = require(`@apollo/server`);
const { startStandaloneServer } = require(`@apollo/server/standalone`);
const { connect, getDB } = require(`./config/mongoConnection.js`);

const userResolvers = require(`./resolvers/user.js`);
const userTypeDefs = require(`./schema/user.js`);
const authentication = require("./middlewares/authentication.js");

const postResolvers = require(`./resolvers/post.js`);
const postTypeDefs = require(`./schema/post.js`);

const followResolvers = require(`./resolvers/follow.js`);
const followTypeDefs = require(`./schema/follow.js`);

const server = new ApolloServer({
    typeDefs: [userTypeDefs, postTypeDefs, followTypeDefs],
    resolvers: [userResolvers, postResolvers, followResolvers],
    introspection: true
});

(async () => {
    try {
        await connect();

        const db = await getDB();

        const { url } = await startStandaloneServer(server, {
            listen: { port: process.env.PORT || 4000},
            context: ({req, res}) => {
                return {
                    db,
                    authentication: () => authentication(req, db)
                }
            }
        });

        console.log(`gc01-p03-mnaufaldillah running on ${url}`);
        
    } catch (error) {
        console.log(error);
        
    }
})()