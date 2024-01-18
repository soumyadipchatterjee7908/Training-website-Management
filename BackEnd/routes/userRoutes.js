const express = require("express");
const {
  getAllUsers,
  registerController,
  loginController,
} = require("../controllers/userController");

//router object
const router = express.Router();

//GET ALL USERS
router.get("/all-users", getAllUsers);

// CREATE USER || post
router.post("/register", registerController);

// LOGIN || post
router.post("/login", loginController);

module.exports = router;
