const db = require('../db.js');

const User = db.define('user', {
  email: {
    type: Sequelize.STRING,
    field: 'email',
    allowNull: false,
  },
});

// User.add()

module.exports = User;
