const router = require('express').Router()
const User = require('../models/User')
const CryptoJS = require('crypto-js')

// Update
router.put('/: id', (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
    }
    try {
    } catch (err) {
      res.status(500).json(err)
    }
  } else {
    res.status(403).json('You can update only your account!')
  }
})
// Delete
// Get
// Get All
// Get user stats
