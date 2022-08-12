const modifyName = require("../helpers/modifyName");

const setFileData = (req, res, next) => {
  if (req.files) {
    const { file } = req.files;
    const fileName = modifyName(file);

    req.fileData = {
      name: fileName,
      type: file.mimetype,
    };

    return next();
  }

  const { name } = req.body;

  req.body.name = modifyName(null, name);

  return next();
};

module.exports = setFileData;
