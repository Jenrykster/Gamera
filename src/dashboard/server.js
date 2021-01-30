//PRecisamos de um servidor local para que o repl.it não mate o processo quando fechar a aba
var fs = require('fs');
var http = require('http');
let path = require('path'); //Modulo para descobrir a pasta
const express = require('express')
const app = express()
const axios = require('axios')

app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(express.json())
app.listen(8080)

app.get('/', (req, res) => {
  res.send('Hello World')
  
})
app.post('/messages', (req, res) => {
  console.log('dsds');
  })