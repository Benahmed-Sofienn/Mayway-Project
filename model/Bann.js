// require mongoose
const mongoose = require("mongoose");

//Schema
const { Schema } = mongoose;

// create userSchema

const bannSchema = new Schema({
  
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = Bann = mongoose.model("bann", bannSchema);
