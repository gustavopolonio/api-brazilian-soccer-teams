const express = require('express')
const server = express()

const clubs = require('./src/data/clubs.json')

server.get('/', (req, res) => {
  return res.json(clubs)
})


server.listen(3333, () => {
  console.log('Server initialized')
})