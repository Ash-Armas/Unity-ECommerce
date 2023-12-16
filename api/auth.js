const express = require('express');
const router = express.Router();
const Users = require('../models/Users');

router.post('/register',async (req, res)=>{
    const user = req.body;
    const userExists = await Users.findOne({username:user.username});
    console.log(userExists)
    if(userExists) return res.send(`User with ${user.username} email already exists`);
    
    try{
        const newUser = Users(user);
        await newUser.save();
    }catch(err){
        return res.send("User not saved due to problem in server")
    }
    res.end("User saved");
});

router.post('/login',async (req, res)=>{
    const email = req.body.username;
    const password = req.body.password;
    const userExists = await Users.findOne({username:username, password:password});
    if(userExists) return res.send('login done');

    res.send("Invalid email/password");
});

module.exports = router;