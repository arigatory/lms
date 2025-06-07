import mongoose from 'mongoose';

export async function dbConnect() {
    console.log('Connecting to MongoDB...');
    console.log(process.env.MONGODB_CONNECTION_STRING);
  try {
    const conn = await mongoose.connect(
      String(process.env.MONGODB_CONNECTION_STRING)
    );
    console.log(`MongoDB connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error('MongoDB connection failed:', error);
  }
}
