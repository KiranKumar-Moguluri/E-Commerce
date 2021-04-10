const Product=require('../models/product');

const getAllproducts= async (req,res) =>{
    try {
        const products= await Product.find({});
        res.json(products);

    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error is founded here.. Please check to process"});
    }
}

const getproductById= async (req,res) =>{
    try {
        const products= await Product.findById(req.params.id);
        res.json(products);

    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error is founded here.. Please check to process"});
    }
}

module.exports={
    getAllproducts,
    getproductById,
}