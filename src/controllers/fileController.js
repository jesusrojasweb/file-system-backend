const fileService = require("../services/fileService");

const getAllFiles = async (req, res) => {
  const allFiles = await fileService.getAllFiles();
  res.json(allFiles["Contents"]);
};
const getOneFile = async (req, res) => {
  const { fileId } = req.params;

  const file = await fileService.getOneFile(fileId);
  res.json(file);
};
const downloadOneFile = async (req, res) => {
  const { fileId } = req.params;

  const fileStream = fileService.downloadOneFile(fileId);
  fileStream.pipe(res);
};
const createNewFile = async (req, res) => {
  const file = req.files;
  const createFile = fileService.createNewFile(file);

  res.json(createFile);
};
const updateOneFile = async (req, res) => {
  const { fileId } = req.params;

  const file = req.files;
  await fileService.updateOneFile(fileId, file);

  res.send(`Update file ${fileId}`);
};
const changeFileName = async (req, res) => {
  const { fileId } = req.params;
  const { name } = req.body;

  await fileService.changeFileName(fileId, name);
  res.send(`Name changed file ${fileId}`);
};
const deleteOneFile = async (req, res) => {
  const { fileId } = req.params;

  await fileService.deleteOneFile(fileId);
  res.send(`Delete file ${fileId}`);
};

module.exports = {
  getAllFiles,
  getOneFile,
  downloadOneFile,
  createNewFile,
  updateOneFile,
  changeFileName,
  deleteOneFile,
};
