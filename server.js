const express = require("express");
const cors = require("cors");
const posesRoute = require("./routes/poses");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.route("/").get((_req, res) => {
  res.json("Express on Vercel");
});

app.use("/public", express.static("public"));
app.use("/poses", posesRoute);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
