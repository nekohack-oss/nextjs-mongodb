const nextConfig = {
    target: 'server',
    env: {
        MONGODB_URI: process.env.MONGODB_URI,
        MONGODB_DB: process.env.MONGODB_DB,
    },
}

module.exports = nextConfig
