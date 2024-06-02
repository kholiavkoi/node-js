import express from "express";
import morgan from "morgan";

const app = express();

// logs info about request
app.use(morgan("tiny"));

// converts JSON to JS object
app.use(express.json());

// converts Form data to JS object
app.use(express.urlencoded({ extended: true }));

app.use((req, res) => {
  console.log(req.query);
  console.log(req.body);
  res.send("This is express server");
});

app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});
