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
    price: {
      type: Number,
      required: [true, 'The tour must have a price'],
    },
  });

  const Tour = mongoose.model('Tour', tourSchema);

  module.exports = Tour