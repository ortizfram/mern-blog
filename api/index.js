import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js"
import authRoutes from "./routes/auth.route.js"
import { errorHandler } from "./middleware/erros.js";

dotenv.config();

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.error(err);
  });

const app = express();
app.use(express.json())

// test route
app.get("/", (req,res)=> {
  res.send("test route")
});

// use routes
app.use("/api/user", userRoutes)
app.use("/api/auth", authRoutes)

// middleware
app.use(errorHandler)


const port = 8080;
app.listen(port, () => {
  console.log(`running on http://localhost:${port}`);
});
