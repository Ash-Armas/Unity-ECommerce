const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);
  
var db = mongoose.connection;
db.once("open", () => console.log("MongoDB connection start"));
db.on("error", console.error.bind(console, "mongoose error"));
  