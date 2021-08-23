var express = require("express");
var router = express.Router();
const { signup, signin } = require("../controllers/user");

router
  /* User SignUp */
  .post("/signup", signup)

  /* User SignIn */
  .post("/signin", signin);

module.exports = router;
