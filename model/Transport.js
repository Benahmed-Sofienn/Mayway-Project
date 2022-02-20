// require mongoose
const mongoose = require("mongoose");
// require Schema
const { Schema } = mongoose;
// create contactSchema
const transportSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
    unique: true,
  },
  stops: {
    type: Array,
    required: true,
  },
  times: {
    type: Array,
    required: true,
  },
});

module.exports = Transport = mongoose.model("transport", transportSchema);
