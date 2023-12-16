const express = require('express');
require('dotenv').config(); 
require('./config/dbConfig');
const app = express();
const PORT = process.env.PORT || 8080;
const buyerRoutes = require('./api/buyer');
const sellerRoutes = require('./api/seller');
const auth = require('./api/auth');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/auth', auth)
app.use('/api/buyer', buyerRoutes)
app.use('/api/seller', sellerRoutes)

app.listen(PORT, ()=>{
    console.log("Server started at port", PORT);
})