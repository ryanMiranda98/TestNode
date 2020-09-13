// Set up path and config file
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, ".env") });

// Import app
const app = require("./app");

// Set up server to listen on
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, (req, res) => {
  console.log(`Server is running on ${PORT}`);
});
