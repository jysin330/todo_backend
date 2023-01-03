require("dotenv").config();
const express = require("express");
const connectToDB = require("./config/database");
const userRouter = require("./routes/userRoutes");

const app = express();
connectToDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", userRouter);


module.exports = app;
