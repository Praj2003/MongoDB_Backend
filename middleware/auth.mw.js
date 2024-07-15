const user_model = require("../model/user.model");

const verifySignUp = async (req, res,next) => {
  try {
    if (!req.body.name) {
      res.status(400).send({ message: "Name is Not provided in the body!" });
    }

    if (!req.body.userID) {
      res.status(400).send({ message: "User ID is Not provided in the body!" });
    }

    if (!req.body.email) {
      res.status(400).send({ message: "Email is Not provided in the body!" });
    }

    if (!req.body.password) {
      res
        .status(400)
        .send({ message: "Password is Not provided in the body!" });
    }
    
    const user = await user_model.findOne({userID : req.body.userID})

    if(user){
        res.status(400).send({
            message : "User with the given userID already exists!"
        })
    }

    next();//this is used to pass the control to the next middleware

  } catch (err) {
     res.status(500).send({
        message : "There is some error while cheking the details!"
     })
  }
};

const verifySignIn = async(req,res,next) =>{
    try{
      if(!req.body.userID){
        res.status(400).send({
            message : "UserID is not provided for token generation!"
        })
      }

      if(!req.body.password){
        res.status(400).send({
            message : "Password is not provided for token generation!"
        })
      }

      next();


    }catch(err){
       res.status(500).send({
        message : "There is some error while providing the token!"
       })
    }
}

module.exports = {
    verifySignUp : verifySignUp,
    verifySignIn : verifySignIn
}