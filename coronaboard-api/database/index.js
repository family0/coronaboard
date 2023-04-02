const Sequelize = require('sequelize');

const config = {
    host: process.env.MYSQL_HOST || 'localhost',
    port: 3306,
    database: 'coronaboard',
    username: 'coronaboard',
    password: process.env.MYSQL_PASSWORD || 'coronaboard',
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
    KeyValue: require('./key-value.model')(sequelize),
}