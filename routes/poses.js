const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

//randomizing the array
function shuffle(inputArray) {
  let oldArray = [...inputArray];
  let newArray = [];

  while (oldArray.length > 0) {
    const randomIndex = Math.floor(Math.random() * oldArray.length);

    const randomItem = oldArray[randomIndex];

    const array3 = oldArray.slice(0, randomIndex);
    const array4 = oldArray.slice(randomIndex + 1);
    oldArray = array3.concat(array4);

    newArray.push(randomItem);
  }
  return newArray;
}

router.route("/").get((req, res) => {
  try {
    const posesData = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, "..", "data", "poses.json"))
    );
    const shuffledPoses = shuffle(posesData);

    return res.status(200).json(shuffledPoses);
  } catch (error) {
    res.status(400).json({ message: "Error retrieving post info", error });
  }
});

module.exports = router;
