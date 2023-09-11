const upController = (req, res, next) => {
    // req.file is the `avatar` file
    res.send("uploaded");
    // req.body will hold the text fields, if there were any
  };

  module.exports = upController;