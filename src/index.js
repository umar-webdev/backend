// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.on("error", (err) => {
      console.log("Error:", err);
      throw err;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is runnning at port:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO Connection Failedd!!", err);
  });

/*

import express from "express";

const app = express()(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on("error", (err) => {
      console.log("Error:", err);
      throw err;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("EERROR:", error);
    throw error;
  }
})();
*/
