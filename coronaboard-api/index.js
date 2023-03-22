const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./database');
const globalStatController = require('./controller/global-stat.controller');
const keyValueController = require('./controller/key-value.controller');

async function launchServer() {
    const app = express();
    app.use(bodyParser.json());

    app.get('/', (req, res) => {
        res.json({ message: 'Hello~' });
    });
    app.get('/global-stats', globalStatController.getAll);
    app.post('/global-stats', globalStatController.update);
    app.delete('/global-stats', globalStatController.remove);
    app.get('/key-value/:key', keyValueController.get);
    app.post('/key-value', keyValueController.update);
    app.delete('/key-value/:key', keyValueController.remove);

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