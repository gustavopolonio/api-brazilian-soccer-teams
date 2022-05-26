import express from 'express'
import cors from 'cors'

const server = express()


const port = process.env.PORT || 3000

const clubs = require('./src/data/clubs.json')

server.get('/', (req, res) => {
  return res.json(clubs)
})


server.listen(port, () => {
  console.log('Server initialized')
})