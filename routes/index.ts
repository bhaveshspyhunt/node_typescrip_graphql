import express from "express";
import auth from "../middlewares/auth";
const router = express.Router();

router.get("/", auth, (req, res) => {
  res.json({ id: 1, name: "bhavesh" });
});

export default router;
