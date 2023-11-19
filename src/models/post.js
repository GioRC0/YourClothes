const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxlength: 500,
    },
    photo: {
        type: String
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);