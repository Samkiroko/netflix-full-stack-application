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
      res.status(200).json('The movie has been deleted')
    } catch (err) {
      res.status(500).json(err)
    }
  } else {
    res.status(403).json('You are not allowed!')
  }
})
// Get
router.delete('/:id', verify, async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id)
    res.status(200).json(movie)
  } catch (err) {
    res.status(500).json(err)
  }
})
// Get random
router.delete('/random', verify, async (req, res) => {
  const type = req.query.type
  try {
    if (type == 'series') {
      movie = await Movie.aggregate([{ $match: { isSeries: true } }, { $sample: { size: 1 } }])
    }
  } catch (err) {
    res.status(500).json(err)
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
