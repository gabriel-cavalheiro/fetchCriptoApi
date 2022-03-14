const axios = require('axios');

const api = axios.create({
  baseURL: 'https://api.kraken.com/0/public',
})

module.exports = api;