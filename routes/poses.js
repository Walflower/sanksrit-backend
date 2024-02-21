const express = require("express");
const router = express.Router();
const fs = require("fs");

router.route("/").get((req, res) => {
  try {
    const posesData = JSON.parse(fs.readFileSync("./data/poses.json"));
    return res.status(200).json(posesData);
  } catch (error) {
    res.status(400).json({ message: "Error retrieving post info", error });
  }
});

module.exports = router;
