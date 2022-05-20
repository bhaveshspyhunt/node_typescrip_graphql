import express from "express";
import userRoute from "./routes";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import User from "./modals/user";
import { StatusCodes } from "http-status-codes";
const app = express();
require("./db/index");

app.use("/api/user", userRoute);

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);
var root = {
  hello: () => {
    return "Hello world!";
  },
};
app.use(
  "/graphql",
  graphqlHTTP((request: any, response: any, param: any) => ({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }))
);

app.get("/", async (req, res) => {
  try {
    const user = new User({
      first_name: "bhavesh",
      last_name: "bhanushali",
      mobile_number: "8778788888",
      gender: "male",
      email: "",
      password: "test123",
    });
    await user.save();
    res.send(user);
  } catch (error: any) {
    console.log("error", error?.message);
    res.status(StatusCodes.BAD_REQUEST).json({ message: error?.message });
  }
});

app.listen(3000, () => {
  console.log("server running....");
});
