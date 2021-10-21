const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`<h1>About this page</h1>`);
});

router.get("/me", (req, res) => {
  res.send("About me");
});

module.exports = router;
