import { Injectable } from "@nestjs/common";
import { MongooseOptionsFactory, MongooseModuleOptions } from "@nestjs/mongoose";

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
    createMongooseOptions(): MongooseModuleOptions {
        return {
            uri: process.env.SERVER_URL,
            dbName: process.env.DB_NAME
        }
    }
}