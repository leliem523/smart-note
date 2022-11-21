const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema(
  {
    tokenKey: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Token", tokenSchema);
