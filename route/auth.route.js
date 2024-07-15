const user_controller = require("../controller/auth.controller");
const auth_mw = require("../middleware/auth.mw")

module.exports = (app) =>{
  app.post("/PKmart/api/v1/auth/signup",[auth_mw.verifySignUp],user_controller.signUp);
  app.post("/PKmart/api/v1/auth/signIn",[auth_mw.verifySignIn],user_controller.signIn);
}