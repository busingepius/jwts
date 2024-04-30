function getProduct(req,res,next){
    res.status(200).json({data:"get a product"});
}
module.exports = getProduct;