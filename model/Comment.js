// require mongoose
const mongoose = require("mongoose");
// require Schema
const { Schema } = mongoose;
// create contactSchema
const commentSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  transportId: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

module.exports = Comment = mongoose.model("comment", commentSchema);
