'use strict'

let path = require('path');

module.exports = (app) => {
  
  let sendFile = (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../client/public/index.html'));
  };
  
  app.get('/', sendFile);

};