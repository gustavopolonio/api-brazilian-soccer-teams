const express = require('express')
const server = express()

const films = require('./public/films.json')

server.get('/', (req, res) => {
  return res.json(films)
})


server.listen(3333, () => {
  console.log('Server initialized')
})