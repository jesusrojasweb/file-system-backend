const express = require("express");
const router = express.Router();
const fileController = require("../../controllers/fileController");

router
  .get("/", fileController.getAllFiles)
  .get("/:fileId", fileController.getOneFile)
  .get("/:fileId/download", fileController.downloadOneFile)
  .post("/", fileController.createNewFile)
  .patch("/:fileId", fileController.updateOneFile)
  .patch("/:fileId/name", fileController.changeFileName)
  .delete("/:fileId", fileController.deleteOneFile);

module.exports = router;
