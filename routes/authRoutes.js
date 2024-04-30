const login = require("../controllers/authControllers");
const getProduct = require("../controllers/productController");
const authMiddleware = require("../middleware/authMiddleware");

const router = require("express").Router();

router.route("/login").post(login);
router.route("/products").get(authMiddleware,getProduct);

module.exports = router;