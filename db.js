const { Pool } = require("pg");

const username = "dbmasteruser";
const password = "DV`S;zS*j_r#c:hTrKyO,uI#3AX|.G|,";
const host = "ls-18b0059a6b8a8ac2b7ed9ab8c9e25e94a4e3a4f3.chij0jbl2tfj.ap-southeast-1.rds.amazonaws.com";
const port = 5432;
const database = "postgres";

const connectionString = `postgresql://${encodeURIComponent(username)}:${encodeURIComponent(password)}@${host}:${port}/${database}`;

const pool = new Pool({
  connectionString: connectionString,
  ssl: false, // Set to true for production (not recommended for testing)
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
