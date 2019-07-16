const express = require("express");
const router = express.Router();

// @route   GET example/test
// @desc    Tests route
// @access  Public
router.get("/test", (req, res) => {
  res.json({
    message: "Example"
  });
});

// @route   GET example/generate
// @desc    Generate a random number
// @access  Public
router.get("/generate", (req, res) => {

  
  randomNumber = Math.floor(Math.random() * 10);

      res.send(200,randomNumber);
    })

module.exports = router;
