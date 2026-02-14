import mongoose from "mongoose"


const MONGO_URI:string= "mongodb+srv://express:express123@cluster0.fozjzpf.mongodb.net/food_order_backend"

const connectDb = async()=>{
    try{
        await mongoose.connect(MONGO_URI).then(()=>console.log("Connected to Database Successfully"))
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}

export {connectDb}