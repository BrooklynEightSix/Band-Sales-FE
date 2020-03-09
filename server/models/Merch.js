const mongoose = require("mongoose")

const MerchSchema = mongoose.Schema({
  type: {
    type: String,
    enum: ['Clothing', 'CD', 'Cassettes', 'Vinyls'],
    required: true
  },
  bandId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'band'
  },
  price: {
    type:  mongoose.Decimal128,
    required: true
  },
  albumId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'album'
  },
})
const Merch = mongoose.model('merch', MerchSchema)
module.exports = Merch