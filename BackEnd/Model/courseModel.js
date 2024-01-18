const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
    image: {
      type: String,
      required: [true, "image is required"],
    },
    amount: {
      type: Number,
      required: [true, "amount is required"],
    },
    duration: {
      type: Number,
      required: [true, " duration is required"],
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      require: [true, "user id is required"],
    },
  },
  { timestamps: true }
);

const courseModel = mongoose.model("Course", courseSchema);

module.exports = courseModel;
