import mongoose  from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try{
        const connextionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/$
            {DB_NAME}`)
        console.log(`\nMongoDB connection Established DB HOST: ${connextionInstance.connection.host}`);
    } catch (error){
        console.log("MongoDB connection error", error);
        process.exit(1);
    }
}

export default connectDB