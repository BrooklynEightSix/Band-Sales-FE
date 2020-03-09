const express = require('express')
const router = express.Router()

const Album = require('../models/Album')

router.post('/', async (req, res) => {
  try {
    const { title, info, bandId } = req.body
    let album = new Album({
      info,
      title,
      bandId
    })
    await album.save()
    res.send('Album created...')
  } catch (error) {
    console.log(error.message)
    res.status(500).send('Server error')
  }
})

module.exports = router