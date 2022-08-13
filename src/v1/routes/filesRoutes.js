const express = require("express");
const router = express.Router();
const fileControllerS3 = require("../../controllers/fileControllerS3");
const fileControllerDB = require("../../controllers/fileControllerDB");
const setFileData = require("../../middlewares/setFileData");
const userExtractor = require("../../middlewares/userExtractor");

router
  .get("/", userExtractor, fileControllerDB.getAllFiles)
  .get("/:fileId", userExtractor, fileControllerDB.getOneFile)
  .get("/download/:fileId/", userExtractor, fileControllerS3.downloadOneFile)
  .post(
    "/",
    userExtractor,
    setFileData,
    fileControllerS3.createNewFile,
    fileControllerDB.createNewFile
  )
  .patch("/:fileId", userExtractor, fileControllerS3.updateOneFile)
  .patch(
    "/name/:fileId/",
    userExtractor,
    setFileData,
    // fileControllerS3.changeFileName, remove comment if aws keys have delete permissions
    fileControllerDB.updateOneFile
  )
  .delete(
    "/:fileId",
    userExtractor,
    // fileControllerS3.deleteOneFile, remove comment if aws keys have delete permissions
    fileControllerDB.deleteOneFile
  );

module.exports = router;
