const mongoose = require("mongoose");

const UserShema =  mongoose.Schema({
  name: {
    type: String,
    // required: true,
    trim: true
  },
  email: {
    type: String,
    // required: true,
    trim: true
  },
  password: {
    type: String,
    // required: true
  },
  avatar: {
    type: String,
    trim: true
  }
});

module.exports = User = mongoose.model("users", UserShema);
