import User from "../models/user.model.js";
import bcryptjs from "bcryptjs"
import { customError } from "../utils/customError.js";

export const signup = async (req, res,next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(customError(400, "All fields are required"))
  }

  const hashedPass = bcryptjs.hashSync(password, 10)

  const newUser = new User({ username, email, password:hashedPass });

  try {
    await newUser.save();
    res.json({ message: "Signup successfull", newUser });
  } catch (error) {
    next(error)
  }
};

export const signin = async (req, res) => {
  res.send("signin route");
};
