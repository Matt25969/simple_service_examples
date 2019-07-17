const express = require("express");
const router = express.Router();
const axios = require('axios');

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

// @route   GET example/sendingARequest
// @desc    Sends a HTTP get request to another service using the axios module
// @access  Public
router.get("/sendingARequest", (req, res) => {

axios.get('http://127.0.0.1:9000/notify').catch(error => {
      console.log(error);
    });
  

    })



module.exports = router;
