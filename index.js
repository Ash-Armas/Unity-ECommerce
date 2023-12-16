const express = require('express');
require('dotenv').config(); 
require('./config/dbConfig');

const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
    console.log("Server started at port", PORT);
})