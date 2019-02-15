const express = require('express');
const app = express();
const db = require('db.js');
const port = 1337;

app.get('/', (req, res)=>{
  res.send('test');
})

app.listen(port, ()=>{
  console.log(`Listening on port ${port}`);
})