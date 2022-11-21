const mongoose = require("mongoose");

const postModel = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
    },
    comment: {
      type: [String],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postModel);
