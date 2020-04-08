const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");
const {
  DBSOURCE,
  usersDbPath,
  usersStatisticDbPath,
} = require("../../../config");

const createTableUsers = (db) => {
  const allUsers = JSON.parse(
    fs.readFileSync(usersDbPath, (err, data) => {
      if (err) throw err;
      return data;
    })
  );
  // console.log(users);
  db.run(
    `CREATE TABLE users (
          id INTEGER PRIMARY KEY,
          first_name text, 
          last_name text, 
          email text UNIQUE, 
          gender text,
          ip_address text,
          CONSTRAINT email_unique UNIQUE (email)
          )`,
    (err) => {
      if (err) {
        // Table already created
      } else {
        // Table just created, creating some rows
        console.log("CREATE TABLE users");
        const insert =
          "INSERT INTO users (id, first_name, last_name, email, gender, ip_address) VALUES (?,?,?,?,?,?)";
        allUsers.map((user) => {
          db.run(insert, [
            user.id,
            user.first_name,
            user.last_name,
            user.email,
            user.gender,
            user.ip_address,
          ]);
        });
      }
    }
  );
};
const createTableUserStats = (db) => {
  const usersStat = JSON.parse(
    fs.readFileSync(usersStatisticDbPath, (err, data) => {
      if (err) throw err;
      return data;
    })
  );
  // console.log(users);
  db.run(
    `CREATE TABLE users_statistic (
      user_id INTEGER,
      date text, 
      page_views INTEGER, 
      clicks INTEGER
          )`,
    (err) => {
      if (err) {
        // Table already created
      } else {
        // Table just created, creating some rows
        console.log("CREATE TABLE users_statistic");
        const insert =
          "INSERT INTO users_statistic (user_id, date, page_views, clicks) VALUES (?,?,?,?)";
        usersStat.map((user) => {
          db.run(insert, [
            user.user_id,
            user.date,
            user.page_views,
            user.clicks,
          ]);
        });
      }
    }
  );
};
let db = new sqlite3.Database(DBSOURCE, async (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
  } else {
    await createTableUsers(db);
    await createTableUserStats(db);
  }
});

module.exports = db;
