// Creating connection with mongodb database here.
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const url = 'mongodb://127.0.0.1:27017/socialMedia';

export const connectUsingMongoose = async () => {
    try {
        await mongoose.connect(url, {
            family: 4
        });
        console.log("Mongodb connected using mongoose.");
    } catch (error) {
        console.log("Error while connecting to db");
        console.log(error);
    }
}