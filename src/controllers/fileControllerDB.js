const fileServiceDB = require("../services/fileServiceDB");

const getAllFiles = (req, res, next) => {
  fileServiceDB
    .getAllFiles()
    .then((allFiles) => {
      res.json({ status: "OK", data: allFiles });
    })
    .catch(next);
};
const getOneFile = (req, res, next) => {
  const { fileId } = req.params;

  fileServiceDB
    .getOneFile(fileId)
    .then((file) => {
      res.json({ status: "OK", file });
    })
    .catch(next);
};
const createNewFile = (req, res, next) => {
  const { file } = req.files;
  const { fileData } = req;

  fileServiceDB
    .createNewFile(file, fileData.name)
    .then((fileCreated) => {
      res.status(201).send({ status: "OK", data: fileCreated });
    })
    .catch(next);
};
const updateOneFile = (req, res, next) => {
  const { fileId } = req.params;
  const { name } = req.body;

  const file = req.files;
  fileServiceDB
    .updateOneFile(fileId, { name })
    .then((file) => {
      res.status(201).json({ status: "OK", data: file });
    })
    .catch(next);
};
const deleteOneFile = (req, res, next) => {
  const { fileId } = req.params;

  fileServiceDB
    .deleteOneFile(fileId)
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
