import express from 'express'
import cors from 'cors'

const server = express()
server.use(express.json())
server.use(cors())


const port = process.env.PORT || 3333

const clubs = require('./src/data/clubs.json')

server.get('/', (req, res) => {
  return res.json(clubs)
})


server.listen(port, () => {
  console.log('Server initialized')
})