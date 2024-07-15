const productController = require("../controller/product.controller");


module.exports = (app) =>{
    app.post("/PKmart/api/v1/auth/ProductCreate",productController.createProduct);
}