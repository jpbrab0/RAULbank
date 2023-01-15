import mongoose from 'mongoose';

const { MONGO_URI } = process.env;

export default async function connectMongo() {
  if (MONGO_URI) {
    try {
      await mongoose.connect(MONGO_URI, () =>
        console.log('connect to mongodb.')
      );
    } catch (e) {
      console.log(e);
    }
  }
}
