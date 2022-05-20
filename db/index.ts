import mongoose, { connect } from "mongoose";
// import config from "../config/config";

// Connection esatblished
mongoose.connect("mongodb://127.0.0.1:27017/graphql", {}, (err) => {
  err ? console.log("err", err) : console.log("connected");
});
