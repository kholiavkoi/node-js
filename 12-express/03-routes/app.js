const express = require("express");
const router = require("./routes");

const PORT = 5001;
const app = express();

app.use(router);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
