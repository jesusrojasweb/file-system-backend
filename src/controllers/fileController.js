const getAllFiles = (req, res) => {
  res.send(`Get all files`);
};
const getOneFile = (req, res) => {
  res.send(`Get file ${req.params.fileId}`);
};
const createNewFile = (req, res) => {
  res.send(`Get file ${req.params.fileId}`);
};
const updateOneFile = (req, res) => {
  res.send(`Update file ${req.params.fileId}`);
};
const deleteOneFile = (req, res) => {
  res.send(`Delete file ${req.params.fileId}`);
};

module.exports = {
  getAllFiles,
  getOneFile,
  createNewFile,
  updateOneFile,
  deleteOneFile,
};
