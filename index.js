const express = require('express')
const cors = require('cors')

const server = express()
server.use(cors())

const port = process.env.PORT || 3000

const clubs = require('./src/data/clubs.json')

server.get('/', (req, res) => {
  return res.json(clubs)
})


server.listen(port, () => {
  console.log('Server initialized')
})