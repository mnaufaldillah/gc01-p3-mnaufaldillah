const Redis = require(`ioredis`);

const uri = process.env.URI_REDIS

const redis = new Redis(uri);

module.exports = redis;