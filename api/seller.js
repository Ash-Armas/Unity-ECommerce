const express = require('express');
const router = express.Router();


router.get('/',(req, res)=>{
    res.send("Seller page")
})

module.exports = router;