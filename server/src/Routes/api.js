const user = require("../Controllers/User_Controller");
const ProductController = require("../Controllers/Product_Controller");

const router = require("express").Router();

//userRoutes
router.post("/login", user.Login);
router.post("/res", user.ResisterTodo);
module.exports = router;

//productsRoutes
router.post("/add", ProductController.CreateProduct);
router.get("/read", ProductController.ReadProduct);
router.get("/readByID/:id", ProductController.ReadProductByID);
router.post("/update/:id", ProductController.UpdateProduct);
router.post("/delete/:id", ProductController.DeleteProduct);
