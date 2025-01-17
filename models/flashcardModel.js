const { pool } = require("mssql");
const { poolPromise, sql } = require("../database/database");

class FlashcardModel {
  async getAllFlashcard() {
    const pool = await poolPromise;
    //join table của question và answer sau đó lấy ra question và answer
    const query =
      "SELECT q.id, q.question, q.options, q.answer as correctAnswer, a.explanation AS answer FROM questions q JOIN answers a ON q.id = a.question_id";
    const result = await pool.request().query(query);
    return result.recordset;
  }

  async getFlashcardById(id) {
    const pool = await poolPromise;
    const query =
      "SELECT q.id, q.question, a.explanation AS answer FROM questions q JOIN answers a ON q.id = a.question_id WHERE q.id = @id";
    const result = await pool.request().input("id", sql.Int, id).query(query);
    return result.recordset;
  }
}

module.exports = new FlashcardModel();
