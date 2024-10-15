const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodeapidb', 'postgres', '12345678', {
host: 'localhost',
dialect: 'postgres',
});

module.exports = sequelize;