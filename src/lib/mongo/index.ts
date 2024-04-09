import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017/fficedemo";

export const client = new MongoClient(uri);
