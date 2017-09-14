'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
      type: String
    },

    password: {
      type: String
    },

    salt: {
      type: String
    }
})

const User = mongoose.model('users', userSchema)
module.exports = User