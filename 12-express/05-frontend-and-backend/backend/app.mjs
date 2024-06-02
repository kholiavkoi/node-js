import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

// logs info about request
app.use(morgan("tiny"));

// converts JSON to JS object
app.use(express.json());

// converts Form data to JS object
app.use(express.urlencoded({ extended: true }));

// enable cors requests
app.use(cors());

app.use((req, res) => {
  console.log(req.body);
  const personData = {
    name: "Iaroslav",
    isProgrammer: true,
  };
  res.json(personData);
});

app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});
