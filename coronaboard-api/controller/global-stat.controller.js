const { GlobalStat } = require('../database');

async function getAll(req, res) {
    const result = await GlobalStat.findAll();
    res.status(200).json({ result });
}

async function update(req, res) {
    const { cc, date } = req.body;
    if (!cc || !date) {
        res.status(400).json({ error: 'cc and date are required' });
        return;
    }
    const count = await GlobalStat.count({ where: { cc, date } });
    if (count === 0) {
        await GlobalStat.create(req.body);
    } else {
        await GlobalStat.update(req.body, { where: { cc, date } });
    }
    res.status(200).json({ result: 'success' });
}

async function remove(req, res) {
    const { cc, date } = req.body;
    if (!cc || !date) {
        res.status(400).json({ error: 'cc with date are required' });
        return;
    }
    await GlobalStat.destroy({ where: { cc, date } });
    res.status(200).json({ result: 'success' });
}

module.exports = {
    getAll,
    update,
    remove,
};