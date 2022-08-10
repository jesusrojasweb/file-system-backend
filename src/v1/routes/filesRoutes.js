const express = require("express");
const router = express.Router();
const fileController = require("../../controllers/fileController");

router
  .get("/", fileController.getAllFiles)
  .get("/:fileId", fileController.getOneFile)
  .post("/:fileId", fileController.createNewFile)
  .patch("/:fileId", fileController.updateOneFile)
  .delete("/:fileId", fileController.deleteOneFile);

module.exports = router;
