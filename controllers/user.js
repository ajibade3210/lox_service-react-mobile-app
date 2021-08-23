const User = require("../models/User");

exports.signup = (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (user)
      return res.status(400).json({
        message: "User Already Registered",
      });

    const _user = new User(req.body);
    _user.save((error, data) => {
      if (error) {
        console.log("Error:", error.message);
        return res.status(400).json({
          message: "Something Went Wrong",
        });
      }
      if (data) {
        return res.status(201).json({
          msg: "User Created Successfully...",
        });
      }
    });
  });
};

exports.signin = (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (error) return res.status(400).json({ error: error.message });
    if (user) {
      if (user.authenticate(req.body.password)) {
        const { _id, email, password, fullName, phoneNumber } = user;
        res
          .status(200)
          .json({ user: { _id, fullName, password, email, phoneNumber } });
      } else {
        return res.status(400).json({
          message: "Invalid Password",
        });
      }
    } else {
      throw new Error();
      return res.status(400).json({ message: "Something Went Wrong" });
    }
  });
};
