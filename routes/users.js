var express = require("express");
// const db = require("../db");
var router = express.Router();


/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/getAll", async (req, res, next) => {
  try {
    
  } catch(e){

  }
});

module.exports = router;
