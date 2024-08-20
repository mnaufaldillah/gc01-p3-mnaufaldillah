const { verifyToken } = require("../helpers/jwt");
const { ObjectId } = require(`mongodb`);

async function authentication(req, db) {
    if(req.headers.authorization) {
        const access_token = req.headers.authorization;

        if(!access_token) {
            throw new Error(`Invalid token`);
        }

        const [type, token] = access_token.split(` `);

        if(type !== `Bearer`) {
            throw new Error(`Invalid token`);
        }

        const verifiedToken = verifyToken(token);

        if(!verifiedToken) {
            throw new Error(`Invalid token`);
        }

        const foundUser = await db.collection(`Users`).findOne({
            _id : new ObjectId(verifiedToken._id)
        }, {
            projection: {
                password: 0,
                name: 0,
                email: 0
            }
        });

        if(!foundUser) {
            throw new Error(`Invalid token`);
        }

        return foundUser;
    }
}

module.exports = authentication;