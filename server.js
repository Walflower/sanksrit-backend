const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 8000;

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.route("/").get((_req, res) => {
  res.json("Welcome to my API");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
