import { MongoClient, Db } from 'mongodb'

const { MONGODB_URI: uri, MONGODB_DB: dbName } = process.env

let cachedClient: MongoClient
let cachedDb: Db

if (!uri) {
    throw new Error(
        'Please define the MONGODB_URI environment variable inside .env'
    )
}

if (!dbName) {
    throw new Error(
        'Please define the MONGODB_DB environment variable inside .env'
    )
}

export async function connectToDatabase() {
    if (cachedClient && cachedDb) {
        return { client: cachedClient, db: cachedDb }
    }

    const client = await MongoClient.connect(uri!, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    const db = await client.db(dbName)

    cachedClient = client
    cachedDb = db

    return { client, db }
}
