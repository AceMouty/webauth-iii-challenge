const express = require('express')
const router = express.Router();

router.get('/users', (req, res) => {
  res.status(200).json({message: "Hitting the users route."})
})

module.exports = router;