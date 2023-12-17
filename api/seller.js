const express = require('express');
const router = express.Router();
const Orders = require('../models/Orders');
const Catalogs = require('../models/Catalogs');

router.get('/orders', async (req, res)=>{
    const seller_id = req.query.seller_id;
    const orders = await Orders.find({seller_id: seller_id});
    res.send(orders);
});

router.post('/create-catalog', async (req, res)=>{
    const seller_id = req.body.seller_id;
    const products = req.body.products;
    var catalogExists = await Catalogs.findOne({seller_id: seller_id});
    var allProducts = [];
    if(catalogExists){
        allProducts = catalogExists.products;
        allProducts = allProducts.concat(products);
    }else{
        allProducts = products;
    }
    catalogExists.products = allProducts;
    try{
        await catalogExists.save();
    }catch(err){
        console.log(err, "error saving catalog ");
        return res.send("Unable to create an Catalog");
    }
    res.send(catalogExists)
});
module.exports = router;