import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
export const connection= () =>
{
    mongoose.connect(process.env.MONGO_URI + "/MERN_AUTHENTICATION"
    ).then(()=>
    {
        console.log("Connected to Database");
    })
    .catch((error)=>
    {
        console.log(`Some error occured while connecting to Database:  ${error}`);
    })
}  