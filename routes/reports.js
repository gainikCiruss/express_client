var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");

/* GET orders listing. */
router.get("/", async (req, res, next) => {
  try {
    const apiUrl = "https://lucienbags.com/wp-json/wc/v1/orders";

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization:
          "Basic Y2tfOWE1MjViNDg3YjhhNWEyMzYzZDljMjFjNjJjNTBhY2NhMzMyN2I5Mjpjc19hYWU0NWNmMjE5OWNmMWFkZmQwZTEwZDI3ZTIwZGQ0NTRmYzRmZWU1",
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
