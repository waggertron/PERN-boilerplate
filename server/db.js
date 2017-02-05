const Sequelize = require('sequelize');
const { dbName, user, password, configObj } = require('config').db;

const connection = new Sequelize(dbName, user, password, configObj);

connection.authenticate().then((err) => {
  if (err) throw err;
  console.log('DB connection successful!');
  return;
});

module.exports = connection;
