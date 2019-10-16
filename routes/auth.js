const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
  res.status(200).json({message: "hitting the register route"})
})

router.post('/login', (req, res) => {
  res.status(200).json({message: "hitting the login route"})
})

module.exports = router;