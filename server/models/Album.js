const mongoose = require("mongoose")

const AlbumSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  info:{
    type: String,
    required: true
  },
  bandId: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'band'
  }
})
const Album = mongoose.model('album', AlbumSchema)
module.exports = Album