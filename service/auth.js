const jwt = require('jsonwebtoken');
const key = require('./key');

function setUser(id, user) {
  return jwt.sign({
    _id : user.id,
    email:user.email,
  },key);
}

function getUser(token) {
  if(!token)return null;
  try {
    return jwt.verify(token,key);
  } catch (error) {
    return null;
  }
}

module.exports = {
  setUser,
  getUser,
};
