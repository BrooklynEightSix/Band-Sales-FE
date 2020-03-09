const mongoose = require("mongoose")

const BandSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  // venueID: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'venue'
  //   }
  // ]
})
const Band = mongoose.model('band', BandSchema)
module.exports = Band