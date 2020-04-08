const db = require("../../modules/db/database");
const getAllUsers = (req, res, next) => {
  const sql = `
  SELECT 
    users.id, 
    users.first_name, 
    users.last_name, 
    users.email, 
    users.gender, 
    users.ip_address, 
    SUM(users_statistic.page_views) AS [page_views], 
    SUM(users_statistic.clicks) AS [clicks]
  FROM users INNER JOIN users_statistic
  ON users.id=users_statistic.user_id
  GROUP BY users.id
  `;
  const params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
};
module.exports = getAllUsers;
