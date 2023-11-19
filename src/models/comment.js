const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    author: {
      type: String, 
      required: true,
    },
    name: {
      type: String, 
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true
    },
    postId: {
        type: String,
        required: true
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Comment", commentSchema);