const db = require("../../modules/db/database");
const getUserById = async (req, res, next) => {
  var sql = `
  SELECT 
    users.id, 
    users.first_name, 
    users.last_name, 
    users_statistic.date, 
    users_statistic.page_views, 
    users_statistic.clicks
  FROM users INNER JOIN users_statistic
  ON users.id=users_statistic.user_id
  where users.id = ?
`;
  var params = [req.params.id];
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
module.exports = getUserById;
