const express = require('express')
const router = express.Router()

const Merch = require('../models/Merch')

router.post('/', async (req, res) => {
  try {
    const { price, type, venueId, bandId } = req.body
    let merch = new Merch({
      type,
      price,
      venueId,
      bandId
    })
    await merch.save()
    res.send('Merch created...')
  } catch (error) {
    console.log(error.message)
    res.status(500).send('Server error')
  }
})

module.exports = router