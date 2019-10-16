const express = require('express');
const router = express.Router();
const usersCheck = require('./middleware/usersMiddleware');
const Users = require('../database/helpers/users-helpers');

router.get('/users', usersCheck.validateLogin, (req, res) => {
  Users.getUsers()
    .then(users => res.status(200).json({data: users}))
    .catch(err => res.status(500).json({message: "The DB ran into a issue", err}))
});

module.exports = router;