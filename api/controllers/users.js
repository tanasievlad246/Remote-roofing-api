import express from 'express';
import User from '../models/User';
import sequelize from 'sequelize';
import Task from '../models/Task';
import Project from '../models/Project';

const router = express.Router();

router.get('/', async (req, res) => {
    let intructions =
    {
        info: 'reqeusts do not require API key',
        requests: {
            get: 'returns data in JSON format',
            post: {
                info: 'the format of the post request can not be altered',
                format: {
                    name: 'string',
                    surname: 'string',
                    email: 'string'
                }
            }
        }
    }

    if (req.body.filter) {
        let results = await User.findAll({
            order: sequelize.literal(`${req.body.filter} ASC`)
        });
        res.status(200);
        res.send({ intructions, results });
    } else {
        let results = await User.findAll();
        res.status(200);
        res.send({ intructions, results });
    }
});

router.get('/:id', async (req, res) => {
    let results = await User.findAll({
        where: {
            id: req.params.id
        }
    });
    res.status(200);
    res.send(results);
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
});

router.post('/', async (req, res) => {
    let user = await User.create({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
    })
    res.status(200);
    res.send(user);
})

export default router;