const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./database');

async function launchServer() {
    const app = express();
    app.use(bodyParser.json());

    app.get('/', (req, res) => {
        res.json({ message: 'Hello~' });
    });

    try {
        await sequelize.sync();
        console.log('DB is ready!');
    } catch (e) {
        console.log('Unable to connect to the DB:');
        console.log(e);
        process.exit(1);
    }

    const port = process.env.PORT || 8080;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

launchServer();