const mongoose = require("mongoose");

const AppSchema = mongoose.Schema({
  message: String,
  name: String,
  gender: String,
  email: String,
  phone: Number
});

module.exports = mongoose.model("App", AppSchema);
