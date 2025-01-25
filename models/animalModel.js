const { pool } = require("mssql");
const { poolPromise, sql } = require("../database/database");

class AnimalModel {
  async getAllAnimals() {
    const pool = await poolPromise;
    const query = "SELECT * FROM Animals";
    const result = await pool.request().query(query);
    return result.recordset;
  }
}

module.exports = new AnimalModel();
