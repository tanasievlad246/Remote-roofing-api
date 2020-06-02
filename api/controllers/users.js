import express from 'express';
import User from '../models/User';
import sequelize from 'sequelize';

const router = express.Router();

router.get('/users', async (req, res) => {
    if (req.body.filter) {
        let results = await User.findAll({
            order: sequelize.literal(`${req.body.filter} ASC`)
        });
        await res.status(200);
        await res.send(results);
        console.table(results);
    } else {
        let results = await User.findAll();
        await res.status(200);
        await res.send(results);
        console.table(results);
    }
});

router.get('/users/:id', async (req, res) => {
    let results = await User.findAll({
        where: {
            id: req.params.id
        }
    });
    await res.status(200);
    await res.send(results);
    console.table(results);
});

router.post('/users', async (req, res) => {
    let user = await User.create({
        name: 'test',
        surname: 'test',
        email: 'test@asd.com',
        projects_id: [1, 2]
    })
    await res.status(200);
    res.send(user);
    console.log('Success');
})

export default router;