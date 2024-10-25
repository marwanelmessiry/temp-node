const express = require('express');

const port =4000;
const app=express();
app.get('/',(req,res)=> res.send('<h1>helloooooo  dsdsi  </h1>') );
app.listen(port ,() => console.log(`app is running on port ${port} `));