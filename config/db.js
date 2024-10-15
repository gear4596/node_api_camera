const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodeapidb', 'postgres', '0930121453gg2545', {
host: 'localhost',
dialect: 'postgres',
});

module.exports = sequelize;