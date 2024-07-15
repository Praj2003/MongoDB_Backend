const express = require("express");
const server_config = require("./configs/server.config")
const mongoose = require("mongoose");
const db_config = require("./configs/db.config");
const user_model = require("./model/user.model");
const bcrypt = require("bcryptjs");

const app = express();

app.use(express.json());

mongoose.connect(db_config.DB_URL);

const db = mongoose.connection;//forcing the connection to happen.

//error handling on database
db.on("error",() =>{
    console.log("There is some error while connecting to the database!")
})

db.once("open",() =>{
    console.log("Database has been successfully connected!")
    adminCheck();
})

const adminCheck = async() =>{
    try{
        const user = user_model.find({userType : "ADMIN"});

        if(user){
            console.log("Admin is already present here!")
            return;
        }
    }catch(err){
        console.log("There is some error while checking for the admin in the database!",err);
    }

    try{
        const adminObj = {
            name : "PrajvalK",
            userID : "Praj2003",
            email : "praj@gmail.com",
            password : bcrypt.hashSync("welcome123",8),
            userType : "ADMIN"

        }

        const adminCreate = await user_model.create(adminObj);

        console.log(adminCreate);
    }catch(err){
        console.log("There is some error while creating the admin!",err);
    }
}

//stiching the route to server file

require("./route/auth.route")(app);
require("./route/category.route")(app);
require("./route/product.route")(app);


//Setting up the server to start runnig on the port 3000
app.listen(server_config.PORT,() =>{
    console.log(`Server is successfully running on the port ${server_config.PORT}`);
})



