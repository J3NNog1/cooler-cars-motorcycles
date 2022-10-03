import mongoose from 'mongoose'

const Schema = mongoose.Schema

const vehicleSchema = new Schema({
  year: Number,
  make: String,
  model: String,
  color: String,
  fast: Boolean,

  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
}, {
  timestamps: true
})

const Vehicle = mongoose.model('Vehicle', vehicleSchema)

export {
  Vehicle
}