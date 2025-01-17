const { pool } = require("mssql");
const { poolPromise, sql } = require("../database/database");

class AnswerModel {
  async getAllAnswers() {
    const pool = await poolPromise;
    const query = "SELECT * FROM ANSWERS";
    const result = await pool.request().query(query);
    return result.recordset;
  }

  async getAnswerById(id) {
    const pool = await poolPromise;
    const query = "SELECT * FROM answers WHERE id = @id";
    const result = await pool.request().input("id", sql.Int, id).query(query);
    return result.recordset[0];
  }
}

module.exports = new AnswerModel();
