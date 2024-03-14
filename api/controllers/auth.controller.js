import User from "../models/user.model.js";
import bcryptjs from "bcryptjs"

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(400).json({ message: "All fields required" });
  }

  const hashedPass = bcryptjs.hashSync(password, 10)

  const newUser = new User({ username, email, password:hashedPass });

  try {
    await newUser.save();
    res.json({ message: "Signup successfull", newUser });
  } catch (error) {
    res.status(500), json({ message: error.message });
  }
};

export const signin = async (req, res) => {
  res.send("signin route");
};
