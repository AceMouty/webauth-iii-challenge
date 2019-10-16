const express = require('express');
const server = express();
const helmet = require('helmet');
const cors = require('cors');
// Express Routes
const authRoutes = require('./routes/auth-routes');
const usersRoutes = require('./routes/users-routes');
// global middleware
server.use(cors())
server.use(helmet())
server.use(express.json())

// Express Routes
server.use("/api/auth", authRoutes);
server.use("/api", usersRoutes)

server.get('/', (req, res) => {
  res.status(200).json({message: "It's working"})
})
module.exports = server;