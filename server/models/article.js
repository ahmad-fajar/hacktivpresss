'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
  title: {
    type: String
  },

  content: {
    type: String
  },

  category: {
    type: String
  },

  author: {
    type: String
  }
})

const Article = mongoose.model('articles', articleSchema)
module.exports = Articles