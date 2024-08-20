// const { GraphQLError } = require(`graphql`);
const { ObjectId } = require("mongodb");
const { hashPassword, comparePassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");

const resolvers = {
    Query: {
        searchUser: async (_, args, contextValue) => {
            const { db, authentication } = contextValue;
            const { inputSearch } = args;

            // console.log(inputSearch, `<----------`);
            const verifiedUser = await authentication();

            if(!verifiedUser) {
                throw new Error(`Unauthenticated User`);
            }

            const users = await db.collection(`Users`).find({
                username: {
                    '$regex': inputSearch, '$options': 'i'
                }
            }, {
                projection: {
                    password: 0
                }
            }).toArray();

            return users;
        },
        getUser: async (_, args, contextValue) => {
            const { db, authentication } = contextValue;
            const { userId } = args;

            const verifiedUser = await authentication();

            if(!verifiedUser) {
                throw new Error(`Unauthenticated User`);
            }

            const agg = [
                {
                    '$match': {
                        '_id': new ObjectId(userId)
                    }
                }, {
                    '$lookup': {
                        'from': 'Follows', 
                        'localField': '_id', 
                        'foreignField': 'followerId', 
                        'as': 'followings'
                    }
                }, {
                    '$lookup': {
                        'from': 'Users', 
                        'localField': 'followings.followingId', 
                        'foreignField': '_id', 
                        'as': 'followings'
                    }
                }, {
                    '$lookup': {
                        'from': 'Follows', 
                        'localField': '_id', 
                        'foreignField': 'followingId', 
                        'as': 'followers'
                    }
                }, {
                    '$lookup': {
                        'from': 'Users', 
                        'localField': 'followers.followerId', 
                        'foreignField': '_id', 
                        'as': 'followers'
                    }
                }, {
                    '$project': {
                    'followings.password': 0, 
                    'followers.password': 0
                    }
                }
            ];              

            const coll = db.collection(`Users`);
            const cursor  = coll.aggregate(agg);
            const user = await cursor.toArray();

            return user[0];
        },
    },
    Mutation: {
        registerUser: async (_, args, contextValue) => {
            const { db } = contextValue;
            const { register } = args;

            if(!register.username) {
                throw new Error(`Username is required`);
            }

            if(!register.email) {
                throw new Error(`Email is required`);
            }

            if(!register.password) {
                throw new Error(`Password is required`);
            }

            const foundUsername = await db.collection(`Users`).findOne({
                username: register.username
            });

            if(foundUsername) {
                throw new Error(`Username must be unique`);
            }

            const foundEmail = await db.collection(`Users`).findOne({
                email: register.email
            });

            if(foundEmail) {
                throw new Error(`Email must be unique`);
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const formatEmail = emailRegex.test(register.email);

            if(!formatEmail) {
                throw new Error(`Invalid email format`);
            }

            const lengthPassword = register.password.length;

            if(lengthPassword < 5) {
                throw new Error(`Minimum password length is 5`);
            }

            const newUser ={
                name: register.name,
                username: register.username,
                email: register.email,
                password: hashPassword(register.password)
            };

            const data = await db.collection(`Users`).insertOne(newUser);

            return { ...newUser, _id: data.insertedId };
        },
        loginUser: async (_, args, contextValue) => {
            const { db } = contextValue;
            const { login } = args;

            if(!login.email) {
                throw new Error(`Email is required`);
            }

            if(!login.password) {
                throw new Error(`Password is required`);
            }

            const foundUser = await db.collection(`Users`).findOne({
                email: login.email
            });

            if(!foundUser) {
                throw new Error(`Email or password is invalid`);
            }

            const comparedPassword = comparePassword(login.password, foundUser.password);

            if(!comparedPassword) {
                throw new Error(`Email or password is invalid`);
            }

            const access_token = signToken({_id: foundUser._id})

            return {access_token}
        }
    }
}

module.exports = resolvers;