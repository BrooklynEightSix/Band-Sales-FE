const express = require('express')
const router = express.Router()

const Venue = require('../models/Venue')

router.post('/', async (req, res) => {
  try {
    const { address, name } = req.body
    let venue = new Venue({
      name,
      address
    })
    await venue.save()
    res.send('Venue created...')
  } catch (error) {
    console.log(error.message)
    res.status(500).send('Server error')
  }
})

module.exports = router