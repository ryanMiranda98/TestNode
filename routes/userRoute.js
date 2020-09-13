const express = require("express");
const router = express.Router();
const pool = require("../db");

router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newUser = await pool.query(
      "INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING *",
      [name, email, password]
    );

    res.status(200).json({
      status: "success",
      data: newUser.rows[0],
    });
  } catch (error) {
    console.log(error)
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const allUsers = await pool.query("SELECT * FROM users");

    res.status(200).json({
      status: "success",
      data: allUsers.rows,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
});

module.exports = router;
