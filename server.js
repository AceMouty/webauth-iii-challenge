const express = require('express');
const server = express();
const helmet = require('helmet');
const cors = require('cors');

// global middleware
server.use(helmet())
server.use(express.json())

server.get('/', (req, res) => {
  res.status(200).json({message: "It's working"})
})
module.exports = server;