// models/questionModel.js
const { poolPromise, sql } = require("../database/database");

class QuestionModel {
  async getAllQuestions() {
    const pool = await poolPromise;
    const result = await pool.request().query("SELECT * FROM questions");
    return result.recordset;
  }

  async getQuestionById(id) {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("id", sql.Int, id)
      .query("SELECT * FROM questions WHERE id = @id");
    return result.recordset[0];
  }
}

module.exports = new QuestionModel();
