import express from 'express';
import User from '../models/User';
import sequelize from 'sequelize';
import Task from '../models/Task';
import Project from '../models/Project';

const router = express.Router();

router.get('/', async (req, res) => {
    if (req.body.filter) {
        let results = await User.findAll({
            order: sequelize.literal(`${req.body.filter} ASC`)
        });
        res.status(200);
        await res.send(results);
        console.table(results);
    } else {
        let results = await User.findAll();
        res.status(200);
        res.send(results);
        console.table(results);
    }
});

router.get('/:id', async (req, res) => {
    let results = await User.findAll({
        where: {
            id: req.params.id
        }
    });
    await res.status(200);
    await res.send(results);
    console.table(results);
});

router.get('/:id/tasks', async (req, res) => {
    let results = await User.findAll(
        {
            where: {
                id: req.params.id
            },
            include: Task
        }
    );
    res.status(200);
    res.send(results);
    console.table(results);
});

router.get('/:id/projects', async (req, res) => {
    let results = await User.findAll(
        {
            where: {
                id: req.params.id
            },
            include: Project
        }
    );
    res.status(200);
    res.send(results);
    console.table(results);
});

router.post('/', async (req, res) => {
    let user = await User.create({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        projects_id: req.body.projects_id,
        tasks_id: req.body.tasks_id
    })
    await res.status(200);
    res.send(user);
    console.log('Success');
})

export default router;