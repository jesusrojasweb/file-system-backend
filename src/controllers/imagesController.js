const imagesService = require("../services/imagesService");
const normaliceImages = require("../helpers/normaliceImage");

const searchImages = (req, res, next) => {
  const { query } = req;
  imagesService
    .searchImages(query)
    .then(({ data }) => {
      const imagesData = normaliceImages(data);
      res.json({ status: "OK", data: imagesData });
    })
    .catch(next);
};

const getImageFile = async (req, res, next) => {
  const { url } = req.body;
  imagesService
    .getImageFile(url)
    .then((imageData) => {
      next(imageData);
    })
    .catch(next);
};

module.exports = { searchImages, getImageFile };
