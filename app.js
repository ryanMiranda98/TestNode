const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

app.use(
  cors({
    credentials: true,
    origin: [
      "http://localhost:3000",
    ],
  })
);

app.use(express.static(path.join(__dirname, "client", "build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// Body Parser
app.use(express.json());

// User routes
const userRoute = require("./routes/userRoute");
app.use("/api/users", userRoute);

module.exports = app;
