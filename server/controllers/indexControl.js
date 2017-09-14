'use strict'

const jwt = require('jsonwebtoken')

const crypt = require('../helpers/crypt')
const keygen = require('../helpers/keygen')
const db = require('../models')

const SECRET = '170914'

exports.signup = (req, res) => {
  console.log('>>> signup')
  let salt = keygen()
  let hashed = crypt(req.body.password, salt)
  let data = {
    username: req.body.username,
    password: hashed,
    salt: salt
  }
  db.User.create(data)
  .then(user => {
    console.log('>>> new user created')
    res.send(user)
  })
  .catch(e => res.send(e))
}

exports.signin = (req, res) => {
  console.log('>>> signin')
  db.User.findOne({
    where: {
      username: req.body.username
    }
  })
  .then(user => {
    if (user) {
      console.log('user found>>> ', user.username)
      let pass = crypt(req.body.password, user.salt)
      if (pass === user.password) {
        console.log('password confirmed')
        let wrap = {
          id: user._id,
          username: user.username
        }
        let token = jwt.sign(wrap, SECRET)
        res.send({username: user.username, token: token})
      }
    } else {
      console.log('wrong password')
      res.send(null)
    }
  })
  .catch(e => {
    console.log('signin failed')
    res.send(e)
  })
}