const fileServiceDB = require("../services/fileServiceDB");
const path = require("path");

const getAllFiles = (req, res, next) => {
  const { userId } = req;
  fileServiceDB
    .getAllFiles(userId)
    .then((allFiles) => {
      res.json({ status: "OK", data: allFiles });
    })
    .catch(next);
};
const getOneFile = (req, res, next) => {
  const { fileId } = req.params;

  const { userId } = req;

  fileServiceDB
    .getOneFile(fileId, userId)
    .then((file) => {
      res.json({ status: "OK", file });
    })
    .catch(next);
};
const createNewFile = (req, res, next) => {
  let file = {};
  if (req.files) {
    file = req.files;
  }
  const { fileData, userId } = req;

  let name = "";
  if (fileData) {
    name = fileData.name;
  } else if (req.body.name) {
    name = req.body.name;
    const imageExtention = path.parse(name).ext;
    const imageType = imageExtention.split(".")[1];
    file.mimetype = `image/${imageType}`;
  }

  const identifyInfo = { name, userId };

  fileServiceDB
    .createNewFile(file, identifyInfo)
    .then((fileCreated) => {
      res.status(201).send({ status: "OK", data: fileCreated });
    })
    .catch(next);
};
const updateOneFile = (req, res, next) => {
  const { fileId } = req.params;
  const { userId } = req;
  const { name } = req.body;

  const identifyInfo = { name, userId };

  const file = req.files;
  fileServiceDB
    .updateOneFile(fileId, identifyInfo)
    .then((file) => {
      res.status(201).json({ status: "OK", data: file });
    })
    .catch(next);
};
const deleteOneFile = (req, res, next) => {
  const { fileId } = req.params;
  const { userId } = req;

  fileServiceDB
    .deleteOneFile(fileId, userId)
    .then(() => {
      res.json({ status: "OK", msg: "File deleted" });
    })
    .catch(next);
};

module.exports = {
  getAllFiles,
  getOneFile,
  createNewFile,
  updateOneFile,
  deleteOneFile,
};
