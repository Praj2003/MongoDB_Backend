const categoryController = require("../controller/category.controller");


module.exports = (app) =>{
    app.post("/PKmart/api/v1/auth/categoryCreate",categoryController.createCategory);
}