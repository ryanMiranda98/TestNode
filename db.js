// Set up Database connection
const Pool = require("pg").Pool;

const pool = new Pool({
  // user: process.env.DB_USER,
  // password: process.env.DB_PASSWORD,
  // host: process.env.DB_HOST,
  // port: process.env.DB_PORT,
  // database: process.env.DB,
  connectionString: process.env.POSTGRES_URI,
});

module.exports = pool;
