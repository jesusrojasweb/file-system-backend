module.exports = (error, req, res, next) => {
  console.log(error);

  if (error.name === "CastError") {
    res.status(400).json({ error: "id used is malformed" });
  }

  res.status(500).json({ error });
};
