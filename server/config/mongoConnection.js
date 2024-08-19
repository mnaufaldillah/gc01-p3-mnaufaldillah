const { MongoClient } = require('mongodb');

const uri = process.env.URI_MONGODB;

// const uri = "mongodb+srv://mnaufaldillah:gMbqJelvlnAaLYXW@cluster-mnaufaldillah.zznw2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-mnaufaldillah";

const client = new MongoClient(uri);

async function connect() {
    try {
        client.db(`gc01-p3-mnaufaldillah`)
    } catch (error) {
        console.log(error);
        
        await client.close()
    }
}

async function getDB() {
    return client.db(`gc01-p3-mnaufaldillah`);
}

module.exports = { connect, getDB }