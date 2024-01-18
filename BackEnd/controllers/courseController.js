const courseModel = require("../Model/courseModel");
const userModel = require("../Model/userModel");
const mongoose = require("mongoose");

//Get all-course
exports.getAllCourseController = async (req, res) => {
  try {
    const course = await courseModel.find({});
    if (!course) {
      return res.status(200).send({
        success: false,
        message: "no course found",
      });
    }
    return res.status(200).send({
      success: true,
      CourseCount: course.length,
      message: "all course list",
      course,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "error in geeting course",
      success: false,
      error,
    });
  }
};

//create-course
exports.createCourseController = async (req, res) => {
  try {
    const { title, description, image, amount, duration, user } = req.body;
    //validation

    if (!title || !description || !image || !amount || !duration || !user) {
      return res.status(400).send({
        success: false,
        message: "please fill all fields",
      });
    }
    // //exisiting users

    const exisitingUser = await userModel.findById(user);
    if (!exisitingUser) {
      return res.status(404).send({
        success: false,
        message: "unable to find user",
      });
    }

    //save new user
    const newCourse = new courseModel({
      title,
      description,
      image,
      amount,
      duration,
      user,
    });

    const session = await mongoose.startSession();
    session.startTransaction();
    await newCourse.save({ session });
    exisitingUser.course.push(newCourse);
    await exisitingUser.save({ session });
    await session.commitTransaction();
    await newCourse.save();
    return res.status(201).send({
      success: true,
      message: "Course created",
      newCourse,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      message: "error in creating course",
      success: false,
      error,
    });
  }
};

//update-course
exports.updateCourseController = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, image, amount, duration } = req.body;
    const course = await courseModel.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );
    return res.status(201).send({
      success: true,
      message: "Course updated",
      course,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      message: "error in updating course",
      success: false,
      error,
    });
  }
};

//single-course
exports.getCourseByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await courseModel.findByIdAndUpdate(id);

    if (!course) {
      return res.status(404).send({
        success: false,
        message: " couse not found with this is",
      });
    }
    return res.status(200).send({
      success: true,
      message: " fetch single blog",
      course,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      message: "error in single course",
      success: false,
      error,
    });
  }
};

//delete-course
exports.deleteCourseController = async (req, res) => {
  try {
    const course = await courseModel
      .findOneAndDelete(req.params.id)
      .populate("user");
    await course.user.course.pull(course);
    await course.user.save();
    return res.status(200).send({
      message: "delete course",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      message: "error in delete course",
      success: false,
      error,
    });
  }
};
exports.userCourseController = async (req, res) => {
  try {
    const userCourse = await courseModel
      .findById(req.params.id)
      .populate("course");

    if (!userCourse) {
      return res.status(404).send({
        success: false,
        message: " couse not found with this is id",
      });
    }
    return res.status(200).send({
      message: "user course",
      success: true,
      userCourse,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      message: "error in user course",
      success: false,
      error,
    });
  }
};
