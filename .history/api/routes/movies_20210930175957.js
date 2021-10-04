const router = require('express').Router()
const Movie = require('../models/Movie')
const verify = require('../verifyToken')

// Create

router.post('/:id', verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newMovie = new Movie(req.body)

    try {
      const savedMovie = await newMovie.save()
      res.status(201).json(savedMovie)
    } catch (err) {
      res.status(500).json(err)
    }
  } else {
    res.status(403).json('You are not allowed')
  }
})

// Update
router.put('/:id', verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updateMovie = await Movie.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        },
      )
      res.status(200).json(savedMovie)
    } catch (err) {
      res.status(500).json(err)
    }
  } else {
    res.status(403).json('You are not allowed!')
  }
})
// Delete
router.delete('/:id', verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Movie.findByIdAndDelete(req.params.id)
      res.status(200).json(savedMovie)
    } catch (err) {
      res.status(500).json(err)
    }
  } else {
    res.status(403).json('You are not allowed!')
  }
})
// Get
router.get('/find/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    const { password, ...info } = user._doc
    res.status(200).json(info)
  } catch (err) {
    res.status(500).json(err)
  }
})
// Get All
router.get('/', verify, async (req, res) => {
  const query = req.query.new
  if (req.user.isAdmin) {
    try {
      const users = query ? await User.find().sort({ _id: -1 }).limit(10) : await User.find()
      res.status(200).json(users)
    } catch (err) {
      res.status(500).json(err)
    }
  } else {
    res.status(403).json('You are not allowed to see all users!')
  }
})

// Get user stats
router.get('/stats', async (req, res) => {
  const today = new Date()
  const latYear = today.setFullYear(today.setFullYear() - 1)

  try {
    const data = await User.aggregate([
      {
        $project: {
          month: { $month: '$createdAt' },
        },
      },
      {
        $group: {
          _id: '$month',
          total: { $sum: 1 },
        },
      },
    ])
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
