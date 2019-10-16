const express = require('express');
const server = express();
const helmet = require('helmet');
const cors = require('cors');
// Express Routes
const authRoutes = require('./routes/auth');

// global middleware
server.use(cors())
server.use(helmet())
server.use(express.json())

// Express Routes
server.use("/api/auth", authRoutes);

server.get('/', (req, res) => {
  res.status(200).json({message: "It's working"})
})
module.exports = server;