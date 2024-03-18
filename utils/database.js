import mongoose from "mongoose";

let isConnected = false; //track the connection

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    // check if its connected already
    if(isConnected) {
        console.log('MongoDB is already connected');
        return;
    }

    // if datacase not connected yet
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
          dbName: "share_prompt",
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })
    
        isConnected = true;
    
        console.log('MongoDB is now connected')
      } catch (error) {
        console.log(error);
      }
}