import express from 'express'
import cors from 'cors'

const server = express()

let headers = new Headers();

headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
headers.append('Origin','http://localhost:3000');

server.use(cors({
  origin: '*',
  credentials: true,
  optionsSuccessStatus: 200,
  allowedHeaders: headers
}))

const port = process.env.PORT || 3000

const clubs = require('./src/data/clubs.json')

server.get('/', (req, res) => {
  return res.json(clubs)
})


server.listen(port, () => {
  console.log('Server initialized')
})