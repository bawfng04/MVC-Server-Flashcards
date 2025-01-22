const sql = require("mssql");
require("dotenv").config();
const IP_ADDRESS = process.env.IP_ADDRESS || "localhost";

const config = {
  server: IP_ADDRESS || "NPM-SASS",

  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  options: {
    encrypt: false,
    trustServerCertificate: false,
    useUnicode: true,
    charset: "UTF-8",
  },
};

if (IP_ADDRESS) {
  console.log("connected to database via IP address");
} else {
  console.log("connected to database via localhost");
}

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then((pool) => {
    console.log("Connected to SQL Server successfully!");
    return pool;
  })
  .catch((err) => {
    console.error("SQL Server connection failed!", err);
    throw err;
  });

module.exports = { sql, poolPromise };
