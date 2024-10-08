const mongoose = require('mongoose')

const tourSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'The tour name is required'],
      unique: true,
    },
    raiting: {
      type: Number,
      default: 4.5,
    },
    duration: {
      type: String,
      require: [true, 'A tour must have a duration']
    },
    maxGroupSize:{
      type: Number,
      required: [true, 'A tour must have a group size']
    },
    difficulty:{
      type: String,
      required: [true, 'A tour must have a difficulty']
    },
    raitingsAverage: {
      type: Number,
      default: 4.5
    },
    raitingsQuantity: {
      type: Number,
      default: 0
    },
    price: {
      type: Number,
      required: [true, 'The tour must have a price'],
    },
    priceDiscount: {
      type: Number,
    },
    summary: {
      type: String,
      trim: true,
      required: [true, 'A tour must have a description']
    },
    description: {
      type: String,
      trim: true
    },
    imageCover: {
      type: String,
      required: [true, 'A tour must have a image']
    },
    images: [String],
    createdAt: {
      type: Date,
      default:  Date.now()
    },
    startDates: [Date]
  });

  const Tour = mongoose.model('Tour', tourSchema);

  module.exports = Tour