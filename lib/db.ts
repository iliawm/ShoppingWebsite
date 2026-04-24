import mongoose from "mongoose";
import { MongoClient, Db } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined in .env");
}

let cached = (global as any).mongoose;

export async function dbconnect() {
    if (cached?.conn) {
        return cached.conn;
    }

    if (!cached) {
        cached = (global as any).mongoose = { conn: null, promise: null };
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
            maxPoolSize: 10,
            minPoolSize: 1,
            maxIdleTimeMS: 30000,
            serverSelectionTimeoutMS: 5000,
            family: 4
        };
        cached.promise = mongoose.connect(MONGODB_URI!, opts);
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }

    return cached.conn;
}

let mongoClient: MongoClient | null = null;
let mongoDb: Db | null = null;

export async function getMongoDb(): Promise<Db> {
    if (mongoDb) {
        return mongoDb;
    }

    if (!mongoClient) {
        const { MongoClient } = await import("mongodb");
        mongoClient = new MongoClient(MONGODB_URI!, {
            maxPoolSize: 10,
            minPoolSize: 1,
            maxIdleTimeMS: 30000,
            serverSelectionTimeoutMS: 5000,
            connectTimeoutMS: 10000,
            family: 4
        });
        await mongoClient.connect();
    }

    mongoDb = mongoClient.db();
    return mongoDb;
}

if (process.env.NODE_ENV === 'development') {
    process.on('SIGTERM', async () => {
        if (mongoClient) {
            await mongoClient.close();
        }
        if (cached?.conn) {
            await cached.conn.disconnect();
        }
    });
}
