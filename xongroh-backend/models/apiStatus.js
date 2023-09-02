import mongoose from 'mongoose'

// Define the APIStatusSchema
const APIStatusSchema = new mongoose.Schema(
  {},
  { strict: false }, // Allow dynamic fields
)

// Create the APIStatus model
const APIStatus = mongoose.model('APIStatus', APIStatusSchema)

export default APIStatus
