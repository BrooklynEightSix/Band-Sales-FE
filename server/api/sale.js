const express = require('express')
const router = express.Router()

const Sale = require('../models/Sale')

router.post('/', async (req, res) => {
  try {
    const { date, quantity, venueId, merchId, bandId } = req.body
    let sale = new Sale({
      quantity,
      date,
      venueId,
      merchId,
      bandId
    })
    await sale.save()
    res.send('Sale created...')
  } catch (error) {
    console.log(error.message)
    res.status(500).send('Server error')
  }
})

router.get('/:bandId/:venudId', async (req, res) => {
  try {
    // console.log(req.params)
    const { bandId, venueId } = req.params

    const sale = await Sale.find({ bandId })
      .populate('venueId')
      .populate('bandId')
      .populate('merchId')
    // await sale.populate('bandId')

    res.send(sale)
  } catch (error) {
    console.log(error.message)
    res.status(500).send('Server error')
  }
})

module.exports = router