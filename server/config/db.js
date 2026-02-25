import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    console.log('Attempting to connect to MongoDB...')
    console.log('MongoDB URI:', process.env.MONGODB_URI ? 'Set' : 'Not set')
    
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('MongoDB connected successfully')
    
    // Test the connection
    const db = mongoose.connection.db
    const collections = await db.listCollections().toArray()
    console.log('Available collections:', collections.map(c => c.name))
    
  } catch (error) {
    console.error('MongoDB connection failed:', error.message)
    process.exit(1)
  }
}

export default connectDB
