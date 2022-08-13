const axios = require("axios");
const querystring = require("node:querystring");
require("dotenv").config({ path: ".env" });

const BASE_URL = "https://api.unsplash.com";
const CLIENT_ID = `client_id=${process.env.UNSPLASH_KEY}`;

const searchImages = async (query) => {
  const searchQueries = querystring.stringify(query);

  const images = axios.get(
    `${BASE_URL}/search/photos?${searchQueries}&${CLIENT_ID}`
  );

  return images;
};

const getImageFile = async (imageUrl) => {
  const { data } = await axios(imageUrl, { responseType: "arraybuffer" });

  const imageUrlData = imageUrl.split(".com/")[1].split("?");
  const imageName = imageUrlData[0];
  const extention = querystring.parse(imageUrlData[1]).fm;
  const fullName = `${imageName}.${extention}`;
  return { imageName: fullName, buffer: data };
};

module.exports = { searchImages, getImageFile };
