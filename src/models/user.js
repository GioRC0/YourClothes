const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String, 
      required: true,
    },
    age: {
      type: Number, 
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
      minlength: 8, 
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);