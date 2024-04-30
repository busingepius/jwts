function getProduct(req,res,next){
    res.status(200).json({data:req.user});
}
module.exports = getProduct;