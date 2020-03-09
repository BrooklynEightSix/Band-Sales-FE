const mongoose = require("mongoose")

const VenueSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
})
const Venue = mongoose.model('venue', VenueSchema)
module.exports = Venue