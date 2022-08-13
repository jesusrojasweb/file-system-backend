module.exports = (imagesData) => {
  const { results, total, total_pages } = imagesData;

  if (Array.isArray(results)) {
    const images = results.map((image) => {
      const { id, width, height, description, urls } = image;

      const url = urls.regular;

      return { id, width, height, description, url };
    });
    return { total, total_pages, results: images };
  }
  return imagesData;
};
