const express = require("express");
const router = express.Router();
const fs = require("fs");

function shuffle(inputArray) {
  let oldArray = [...inputArray];
  let newArray = [];

  while (oldArray.length > 0) {
    // pick a random number from 0 to array.length-1
    const randomIndex = Math.floor(Math.random() * oldArray.length);

    // use random number as index - get item from old array
    const randomItem = oldArray[randomIndex];

    // Remove it
    const array3 = oldArray.slice(0, randomIndex);
    const array4 = oldArray.slice(randomIndex + 1);
    oldArray = array3.concat(array4);

    // Add removed item to a new array
    newArray.push(randomItem);
  }
  // return new array
  return newArray;
}

router.route("/").get((req, res) => {
  try {
    const posesData = JSON.parse(fs.readFileSync("./data/poses.json"));
    const shuffledPoses = shuffle(posesData);

    return res.status(200).json(shuffledPoses);
  } catch (error) {
    res.status(400).json({ message: "Error retrieving post info", error });
  }
});

module.exports = router;
