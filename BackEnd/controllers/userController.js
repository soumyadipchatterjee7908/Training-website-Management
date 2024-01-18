const userModel = require("../Model/userModel");
const bcrypt = require("bcrypt");

//create user register user
exports.registerController = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      email,
      password,
      confirmpassword,
      country,
      state,
      city,
    } = req.body;
    //validation

    if (
      !firstname ||
      !lastname ||
      !email ||
      !password ||
      !confirmpassword ||
      !country ||
      !state ||
      !city
    ) {
      return res.status(400).send({
        success: false,
        message: "please fill all fields",
      });
    }
    //exisiting users

    const exisitingUser = await userModel.findOne({ email });
    if (exisitingUser) {
      return res.status(401).send({
        success: false,
        message: "already user",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    //save new user
    const user = new userModel({
      firstname,
      lastname,
      email,
      password: hashedPassword,
      confirmpassword,
      country,
      state,
      city,
    });
    await user.save();
    return res.status(201).send({
      success: true,
      message: "new user created",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "error in register callback",
      success: false,
      error,
    });
  }
};

//get all users

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({});
    return res.status(200).send({
      userCount: users.length,
      success: true,
      message: "all user data",
      users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "error in get all-users",
      success: false,
      error,
    });
  }
};

//login
exports.loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(401).send({
        success: false,
        message: "please provide email and password",
      });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(200).send({
        success: false,
        message: "email is not register",
      });
    }
    //password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send({
        success: false,
        message: "invalid username or password",
      });
    }
    return res.status(200).send({
      success: true,
      message: "login successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "error in login",
      error,
    });
  }
};
