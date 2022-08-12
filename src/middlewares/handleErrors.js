module.exports = (error, req, res, next) => {
  console.log(error);

  if (error.name === "CastError") {
    res.status(400).send({ error: "id used is malformed" });
  } else {
    res.status(500).send({ error: error._message }).end();
  }
};
