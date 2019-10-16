const db = require('../dbConfig');

module.exports = {
  createUser,
  findBy,
  getUsers,
}

async function createUser(userObj){
  const [id] = await db('users').insert(userObj)
  return findById(id);
}

function findBy(filter){
  return db('users').where(filter)
}

function getUsers(){
  return db('users')
}


function findById(id) {
  return db('users')
    .where({ id })
    .first();
}