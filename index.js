const express = require('express')
const server = express()
const port = process.env.PORT || 3333

const clubs = require('./src/data/clubs.json')

server.get('/', (req, res) => {
  console.log('hi')
  return res.json(clubs)
})


server.listen(port, () => {
  console.log('Server initialized')
})