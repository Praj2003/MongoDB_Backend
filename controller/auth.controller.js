const user_model = require("../model/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const jwt_config = require("../configs/jwt.config")


exports.signUp = async(req,res) =>{
    try{
       const user_Obj = {
        name : req.body.name,
        userID : req.body.userID,
        email : req.body.email,
        password : bcrypt.hashSync(req.body.password,8),
        userType : req.body.userType
       }

       const user_created = await user_model.create(user_Obj);

       console.log(user_created);

       res.status(200).send({
        message : "User has been created Successfully!"
       })
    }catch(err){
       res.status(500).send({
        message : "There is some error while creating the customer successfully!"
       })
    }


}
//token generation
exports.signIn = async(req,res) =>{
    //user verfication
    const user = await user_model.findOne({userID : "Praj2003"});

    if(user == null){
        res.status(404).send({message : "user with given user ID is not found!"})
    }

    //password verification 

    const isPasswordValid = bcrypt.compareSync(req.body.password, user.password);

    if(!isPasswordValid){
        res.status(500).send({message : "Incorrect password entered!"})
    }

    //jwt token generation
    const token = await jwt.sign({id : user.userID},jwt_config.secret,{expiresIn : 300});

    res.status(200).send({
        name : user.name,
        userID : user.userID,
        email : user.email,
        password : user.password,
        token : token
    })
 
}