const fileServiceS3 = require("../services/fileServiceS3");

const getOneFile = (req, res, next) => {
  const { fileId } = req.params;

  fileServiceS3
    .getOneFile(fileId)
    .then((file) => {
      res.json(file);
    })
    .catch(error);
};
const downloadOneFile = (req, res) => {
  const { fileId } = req.params;

  const fileStream = fileServiceS3.downloadOneFile(fileId);
  fileStream.pipe(res);
};
const createNewFile = (imageData, req, res, next) => {
  let file = [];
  if (req.files) {
    file = req.files;
  }
  const { fileData } = req;

  let name = "";

  if (fileData) {
    name = fileData.name;
  } else if (imageData) {
    name = imageData.imageName;
    req.body.name = name;
  }

  fileServiceS3
    .createNewFile(file, name, imageData.buffer)
    .then(() => {
      next();
    })
    .catch(next);
};
const updateOneFile = (req, res, next) => {
  const { fileId } = req.params;

  const file = req.files;
  fileServiceS3
    .updateOneFile(fileId, file)
    .then(() => {
      next();
    })
    .catch(next);
};
const changeFileName = (req, res, next) => {
  const { fileId } = req.params;
  const { name } = req.body;

  fileServiceS3
    .changeFileName(fileId, name)
    .then(() => {
      next();
    })
    .catch(next);
};
const deleteOneFile = (req, res, next) => {
  const { fileId } = req.params;

  fileServiceS3
    .deleteOneFile(fileId)
    .then(() => {
      next();
    })
    .catch(next);
};

module.exports = {
  getOneFile,
  downloadOneFile,
  createNewFile,
  updateOneFile,
  changeFileName,
  deleteOneFile,
};
