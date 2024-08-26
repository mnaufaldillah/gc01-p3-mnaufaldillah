module.exports = {
  apps : [{
    name   : "app1",
    script : "./app.js",
    env    : {
           NODE_ENV: "production",
           PORT: 80,
           JWT_SECRET: "secret",
           URI_MONGODB: "mongodb+srv://mnaufaldillah:gMbqJelvlnAaLYXW@cluster-mnaufaldillah.zznw2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-mnaufaldillah",
           URI_REDIS: "redis://default:SAf9OisswETu5Qb31JafnylUZvMofS80@redis-13993.c295.ap-southeast-1-1.ec2.redns.redis-cloud.com:1399"
    }
  }]
}
