import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  content: String,
  rating: {type: Number, min: 1, max: 10, default: 10}
}, {
  timestamps: true
})



const vehicleSchema = new Schema({
  year: Number,
  make: String,
  model: String,
  color: String,
  fast: Boolean,

  owner: {type: Schema.Types.ObjectId, ref: "Profile"},

  nowShowing: {type: Boolean, default: true},
  reviews: [reviewSchema],
}, {
  timestamps: true
})

const Vehicle = mongoose.model('Vehicle', vehicleSchema)



export {
  Vehicle,
  reviewSchema,
}


// Review,