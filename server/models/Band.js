const mongoose = require("mongoose")

const BandSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  playing: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'venue'
  }
  // venueID: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'venue'
  //   }
  // ]
})
const Band = mongoose.model('band', BandSchema)
module.exports = Band