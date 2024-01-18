const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "userfirstname is required"],
    },
    lastname: {
      type: String,
      required: [true, "userlastname is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    confirmpassword: {
      type: String,
      required: [true, " confirm password is required"],
    },
    country: {
      type: String,
      required: [true, "contry is required"],
    },
    state: {
      type: String,
      required: [true, "state is required"],
    },
    city: {
      type: String,
      required: [true, "city is required"],
    },
    course: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Course",
      },
    ],
  },
  { timestamps: true },
  { versionKey: false }
);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
