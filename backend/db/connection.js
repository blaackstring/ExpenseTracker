import mongoose from "mongoose";


const  connection=()=>{
mongoose.connect(`${process.env.MONGO_URL}/${process.env.DB_NAME}`).then(() => {
    console.log('MongoDB connected successfully!');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
})
}

export default connection;