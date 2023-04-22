const router = require("express").Router();
const User = require("../models/userModels");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_TOKEN = process.env.JWT_TOKEN;

//new user Registration

router.post("/register", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email });

    //checking if user is already registered
    if (user) {
      throw new Error("User already exists");
    }

    //create new user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;

    //save user
    const newUser = new User(req.body);
    await newUser.save();

    res.send({
      success: true,
      message: "created successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    //checking if user is already registered

    const user = await User.findOne({ email: req.user.email });
    if (!user) {
      throw new Error("User not found");
    }

    //compare password

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    //create & assign token

    const token = jwt.sign({ userId: user._id }, JWT_TOKEN);

    if (!validPassword) {
      throw new Error("invalid password");
    }

    res.send({
      success: true,
      message: "logged in successfully",
      data: token,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});


module.exports = router;
