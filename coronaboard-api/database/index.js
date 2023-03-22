const Sequelize = require('sequelize');

const config = {
    host: process.env.MYSQL_HOST || 'localhost',
    port: 3306,
    database: 'coronaboard',
    username: 'tj',
    password: process.env.MYSQL_PASSWORD || '1a!A12341',
};

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: 'mysql',
    }
);

module.exports = {
    sequelize,
    GlobalStat: require('./global-stat.model')(sequelize),
}