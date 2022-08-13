const express = require("express");
const router = express.Router();
const imagesController = require("../../controllers/imagesController");
const fileControllerS3 = require("../../controllers/fileControllerS3");
const fileControllerDB = require("../../controllers/fileControllerDB");
const userExtractor = require("../../middlewares/userExtractor");

router.get("/", imagesController.searchImages);
router.post(
  "/",
  userExtractor,
  imagesController.getImageFile,
  fileControllerS3.createNewFile,
  fileControllerDB.createNewFile
);

module.exports = router;
