// require mongoose
const mongoose = require("mongoose");

//Schema
const { Schema } = mongoose;

// create userSchema

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  imgLink: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  adresse: {
    type: String,
  },
  lastName: {
    type: String,
  },
  number: {
    type: String,
  },
  age: {
    type: String,
  },
  sexe: {
    type: String,
  },
  country: {
    type: String,
  },
  state: {
    type: String,
  },
});

module.exports = mongoose.model("user", userSchema);
