const api = require('./api')
const express = require('express');
const cors = require('cors')
const server = express();

server.use(cors());

server.use(express.json());

server.listen(8000);

server.get('/', (req, res) => {
  return res.send({message: "Olá deu boa"})
})

server.get('/market/:id&:quote', async (req, res) => {
  const { id, quote } = req.params;
  try {
    const { data } = await api.get(`/Depth?pair=${id}${quote}&count=2`);

    return res.send(data);
    
  } catch (error) {
    res.send({ error: error.message })
  }
})

console.log('server is running')