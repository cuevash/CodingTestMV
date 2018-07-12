const express = require('express')

// Mock-up phones's data
const DataPhones = require('./mock/phoneDat')

// Create server
const app = express()

// Media files
app.use(express.static('static'))

// Allow cors requests
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//
// ROUTES
//

// List
app.get('/api/phones', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify(DataPhones))
})

// Single element
app.get('/api/phones/:id', (req, res) => {

  // Find element
  let phone = DataPhones.find((ele) => ele.id === req.params.id)

  if (phone) {
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(phone))
  } else {
    // Resource not found
    res.status(404).send(`Phone with id:${req.params.id} not found!`)
  }
})

module.exports = app
