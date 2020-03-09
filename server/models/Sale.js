const mongoose = require("mongoose")

const SaleSchema = mongoose.Schema({
  quantity: {
    type: Number,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  merchId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'merch',
    required: true
  },
  bandId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'band',
    required: true
  },
  venueId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'venue',
    required: true
  },
  // albumId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'album',
  //   required: true
  // }
})
const Sale = mongoose.model('sale', SaleSchema)
module.exports = Sale