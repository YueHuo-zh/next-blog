import mongoose from 'mongoose';

const myDB = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
}

const dbConnect = async () => {
  mongoose.connect(`mongodb://${myDB.username}:${myDB.password}@${myDB.host}`);
}

export default dbConnect;