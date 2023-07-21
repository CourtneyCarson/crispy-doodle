const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const post = require("../models/post");
// import MongoStore from "connect-mongo";

const db =
  "mongodb+srv://cmacarson:z9m04maLvLEwFyab@cluster0.wfaxua4.mongodb.net/?retryWrites=true&w=majority";

mongoose.Promise = global.Promise;

mongoose
  .connect(db)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB");
  });

router.get("/posts", function (req, res) {
  console.log("Requesting posts");
  post
    .find({}) //finds all posts
    .then((posts) => {
      //if succeded do this block of code
      res.json(posts);
      console.log(posts);
    })
    .catch((err) => {
      //catch error
      console.log("Error getting the posts");
    });
});

module.exports = router;
