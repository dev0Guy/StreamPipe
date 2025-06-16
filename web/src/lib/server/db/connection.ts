import { mongoose } from "@typegoose/typegoose";
import { MONGODB_URI } from '$env/static/private';
import type { ConnectOptions } from "mongoose";


interface DBConnector<T> {
    /**
     * Connects to the database using the provided connection details.
     * @param detailes - The connection details including URI and options.
     * @returns A promise that resolves to the connected database instance.
     */
    connect(): Promise<T>;
    disconnect(): Promise<void>;

}


export class MongoDBConnection implements DBConnector<typeof mongoose> {
    private uri!: string;
    private options?: ConnectOptions;

    constructor(uri: string, options?: ConnectOptions) {
        this.uri = uri;
        this.options = options
    }

    connect(): Promise<typeof mongoose> {
        return mongoose.connect(this.uri, this.options);
    }

    disconnect(): Promise<void> {
        return mongoose.disconnect();
    }

}