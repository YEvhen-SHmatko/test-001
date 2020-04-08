const usersDbPath = "./src/db/init/users.json";
const usersStatisticDbPath = "./src/db/init/users_statistic.json";
const DBSOURCE = "./src/db/db.sqlite";
const config = {
  port: 3001,
  DBSOURCE,
  usersDbPath,
  usersStatisticDbPath,
};

module.exports = config;
