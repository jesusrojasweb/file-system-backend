const path = require("path");
const shortid = require("shortid");

const modifyName = (file, name) => {
  const nameToChange = !name ? file.name : name;

  const fileOriginalName = path.parse(nameToChange).name;
  const fileExtention = path.parse(nameToChange).ext;

  const fileName = `${fileOriginalName}-${shortid.generate()}${fileExtention}`;

  return fileName;
};

module.exports = modifyName;
