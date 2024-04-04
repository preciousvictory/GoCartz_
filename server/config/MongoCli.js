import mongoose from "mongoose";

const Schema = mongoose.Schema;
const URL = process.env.ATLAS_URI || "";


const connectDatabase = async () => {
    try {
        //Check if the database is working fine
        const conn = await mongoose.connect(URL);
        console.log('Database connection is running');
    } catch (err) {
        console.log(err);
    }
}

export default connectDatabase;