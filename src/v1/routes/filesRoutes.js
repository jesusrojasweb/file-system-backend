const express = require("express");
const router = express.Router();
const fileControllerS3 = require("../../controllers/fileControllerS3");
const fileControllerDB = require("../../controllers/fileControllerDB");
const setFileData = require("../../middlewares/setFileData");

router
  .get("/", fileControllerDB.getAllFiles)
  .get("/:fileId", fileControllerDB.getOneFile)
  .get("/:fileId/download", fileControllerS3.downloadOneFile)
  .post(
    "/",
    setFileData,
    fileControllerS3.createNewFile,
    fileControllerDB.createNewFile
  )
  .patch("/:fileId", fileControllerS3.updateOneFile)
  .patch(
    "/:fileId/name",
    setFileData,
    // fileControllerS3.changeFileName, remove comment if aws keys have delete permissions
    fileControllerDB.updateOneFile
  )
  .delete(
    "/:fileId",
    // fileControllerS3.deleteOneFile, remove comment if aws keys have delete permissions
    fileControllerDB.deleteOneFile
  );

module.exports = router;
