'use strict'

const jwt = require('jsonwebtoken');
const SECRET = 'RX-0 Unicorn';

// is admin and only admin
exports.authorizer = (req, res, next) => {
  let token = req.headers.token;

  if (token == undefined) return res.send('login dulu om..')

  jwt.verify(token, SECRET, (err, decrypted) => {
    // console.log(decrypted);
    if(decrypted) {
      req.token = decrypted
      next();
    } else {
      res.send('Insufficient right');
    }
  });
};
