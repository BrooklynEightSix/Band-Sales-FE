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

router.get('/:bandId/:venueId', async (req, res) => {
  try {
    const { bandId, venueId} = req.params
    
    const sale = await Sale.find({ bandId, venueId })
      .populate('merchId')
      .populate({
        path: 'merchId',
        model: 'merch',
        populate: {
            path: 'albumId',
            model: 'album'           
        }
    })
    const result = sale.map(item=>({
      albumTitle: item.merchId.albumId.title,
      albumInfo: item.merchId.albumId.info,
      quantity: item.quantity,
      type:item.merchId.type,
      price:Number(item.merchId.price)
    }))

    res.send(result)
  } catch (error) {
    console.log(error.message)
    res.status(500).send('Server error')
  }
})

module.exports = router