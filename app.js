import express from 'express';
import UserHandler from "./user/handler/user.js";
import mongoose from "mongoose";
import morgan from "morgan";
import bodyParser from "body-parser";

const app = express();

mongoose.connect(
  ""
);

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

UserHandler.init(app);

export default app;
