import express from "express";
import {
  createFamily,
  readAllFamily,
  readEachFamily,
  updateFamily,
  deleteFamily,
  checkIncoming,
} from "../controllers/familyController.js";

const familyRouter = express.Router();

familyRouter.route("/").get(readAllFamily).post(checkIncoming, createFamily);
familyRouter
  .route("/:id")
  .get(readEachFamily)
  .patch(updateFamily)
  .delete(deleteFamily);

export default familyRouter;
