const express = require('express')
const router = express.Router()

const Band = require('../models/Band')

router.post('/', async (req, res) => {
  try {
    const { name } = req.body
    let band = new Band({
      name
    })
    await band.save()
    res.send('Band created...')
  } catch (error) {
    console.log(error.message)
    res.status(500).send('Server error')
  }
})

module.exports = router