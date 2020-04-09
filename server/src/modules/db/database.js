const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");
const {
  DBSOURCE,
  usersDbPath,
  usersStatisticDbPath,
} = require("../../../config");

const createTableUsers = (db) => {
  const allUsers = JSON.parse(fs.readFileSync(usersDbPath));
  const create = `CREATE TABLE users ( id INTEGER PRIMARY KEY, first_name text, last_name text, email text UNIQUE, gender text, ip_address text, CONSTRAINT email_unique UNIQUE (email))`;

  const insert =
    "INSERT INTO users (id, first_name, last_name, email, gender, ip_address) VALUES (?,?,?,?,?,?)";

  const cbCreate = (err) => {
    if (err) {
      // console.log(err);
      return;
    }
    allUsers.map((user) => {
      db.run(insert, [
        user.id,
        user.first_name,
        user.last_name,
        user.email,
        user.gender,
        user.ip_address,
      ]);
      console.log("users", user.id);
    });
  };
  db.run(create, cbCreate);
};
const createTableUserStats = (db) => {
  const usersStat = JSON.parse(fs.readFileSync(usersStatisticDbPath));
  const create = `CREATE TABLE users_statistic ( user_id INTEGER, date text, page_views INTEGER, clicks INTEGER)`;
  const insert =
    "INSERT INTO users_statistic (user_id, date, page_views, clicks) VALUES (?,?,?,?)";
  const cbCreate = (err) => {
    if (err) {
      // console.log(err);
      return;
    }
    usersStat.map((user) => {
      db.run(insert, [user.user_id, user.date, user.page_views, user.clicks]);
      console.log("stats", user.user_id);
    });
  };
  db.run(create, cbCreate);
};
let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    createTableUsers(db);
    createTableUserStats(db);
  }
});

module.exports = db;
