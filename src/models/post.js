const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    description: {
        type: String,
        require: true,
        maxlength: 500,
    },
    audiovisuals: [
        {
            data: Buffer,
            contentType: String,
        }
    ],
  },
  {
        timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);