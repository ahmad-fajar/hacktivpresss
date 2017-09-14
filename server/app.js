'use strict'

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const url = 'mongodb://localhost/ahmad-fajar-hacktivpress'
// const url = 'mongodb://hacktiv8:hacktiv8Super@cluster0-shard-00-00-remkh.mongodb.net:27017,cluster0-shard-00-01-remkh.mongodb.net:27017,cluster0-shard-00-02-remkh.mongodb.net:27017/hacktivpress-ahmad-fajar?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'
mongoose.connect(url, (err, res) => {
  if (!err) console.log('>>> Database connected')
  else console.log('>>> Error connecting to database')
})

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type : 'application/*+json'}));
app.use(bodyParser.json({ type : 'application/x-www-form-urlencoded'}));


const index = require('./routes/index');
// const user = require('./routes/user');
// const article = require('./routes/article');

app.use('/', index);
// app.use('/user', user);
// app.use('/article', article);


app.listen(3000, (err, res) => {
  if (!err) console.log('>>> Listening on port 3000')
  else console.log('Something wrong')
})