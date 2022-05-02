const express = require('express')
const server = express()
const port = process.env.PORT || 3333

const clubs = require('./src/data/clubs.json')

server.get('/', (req, res) => {
  return res.json(clubs)
})

server.get('/clubs', (req, res) => {
  return res.json(clubs)
})


server.listen(port, () => {
  console.log('Server initialized')
})