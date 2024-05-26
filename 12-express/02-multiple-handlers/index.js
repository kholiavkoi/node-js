const express = require("express");

const app = express();

const PORT = 5001;

const firstHandler = (req, res, next) => {
  console.log("First Handler");
  next();
};

const secondHandler = (req, res) => {
  console.log("Second Handler");
  res.send("Response from Express Server");
};

app.get("/", firstHandler, secondHandler);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
