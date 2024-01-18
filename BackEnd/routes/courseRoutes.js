const express = require("express");
const {
  getAllCourseController,
  createCourseController,
  updateCourseController,
  getCourseByIdController,
  deleteCourseController,
  userCourseController,
} = require("../controllers/courseController");

//router object
const router = express.Router();

//routes

//GET || ALL course
router.get("/all-course", getAllCourseController);

// post || create-course
router.post("/create-course", createCourseController);

// put || update-course
router.put("/update-course/:id", updateCourseController);

// get || single course detail
router.get("/get-course/:id", getCourseByIdController);

// Delete || delete-course
router.delete("/delete-course/:id", deleteCourseController);

//get || user course
router.get("/user-course/:id", userCourseController);

module.exports = router;
