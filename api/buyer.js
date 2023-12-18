const express = require('express');
const router = express.Router();
const Users = require('../models/Users');
const Catalogs = require('../models/Catalogs');
const Products = require('../models/Products');
const Orders = require('../models/Orders');

router.get('/list-of-sellers',async (req, res)=>{
    const sellers = await Users.find({seller:true});
    res.send(sellers)
})

router.get('/seller-catalog/:seller_id',async (req, res)=>{
    const seller_id = req.params.seller_id;
    const sellerExists = await Users.find({_id:seller_id});
    if(!sellerExists){
        return res.send("Invalid seller id");
    }
    var catalog = await Catalogs.findOne({seller_id:seller_id});
    if(!catalog){
        catalog = new Catalogs({seller_id:seller_id});
        await catalog.save();ng
    }
    var products = catalog.products;
    if(!products) products=[]
    const allProducts = await Products.find();
    console.log(products)
    var filteredProducts = allProducts.filter(product=>{
        return products.includes(String(product._id));
    });
    res.send(filteredProducts)
})

router.post('/create-order/:seller_id', async (req, res)=>{
    const seller_id = req.params.seller_id;
    const products = req.body.products;
    const buyer_id = req.body.buyer_id;
    const orderExists = await Orders.findOne({buyer_id:buyer_id, seller_id: seller_id});
    var newOrder;
    if(!orderExists){
        newOrder = new Orders({buyer_id, seller_id,products});
    }else{
        newOrder = orderExists;
        var allProducts = newOrder.products;
        console.log(allProducts, products);
        allProducts = allProducts.concat(products);
    }
    const filteredProducts = allProducts.filter((item, index)=>allProducts.indexOf(item) === index);
    newOrder.products = filteredProducts;
    try{
        await newOrder.save();
    }catch(err){
        console.log(err, "error saving order ");
        return res.send("Unable to create an order");
    }
    res.send(newOrder)
});

module.exports = router;