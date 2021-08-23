const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = Schema(
  {
    fullName: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    hash_password: {
      type: String,
      required: true,
    },
    profilPicture: {
      type: String,
      default: "",
    },
    phoneNumber: {
      type: Number,
      default: "",
    },
    referenceCode: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

// virtual feed
userSchema.virtual("password").set(function (password) {
  //this.hash_password
  // const salt = await bcrypt.genSalt(10);
  password = password.toString();
  this.hash_password = bcrypt.hashSync(password, 10);
});

userSchema.methods = {
  authenticate: function (password) {
    password = password.toString();
    return bcrypt.compareSync(password, this.hash_password);
  },
};

module.exports = mongoose.model("User", userSchema);
