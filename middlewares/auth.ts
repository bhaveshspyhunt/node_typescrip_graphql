import express from "express";
import httpCode from "http-status-codes";

const auth = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  let token = req.headers.authorization?.split(" ")[1];
  console.log("token", token);
  if (!token) {
    return res.status(httpCode.UNAUTHORIZED).send({ message: "Unauthorized" });
  }
  next();
};

export default auth;
