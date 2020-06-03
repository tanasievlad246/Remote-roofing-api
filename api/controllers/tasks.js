import express from 'express';
import Task from '../models/Task';
import User from '../models/User';
import Project from '../models/Project';

const router = express.Router();

router.get('/', async (req, res) => {
    let results = await Task.findAll({
        include: [User, Project]
    });
    res.status(200);
    res.send({
        intructions: {
            info: 'reqeusts do not require API key',
            requests: {
                get: 'returns data in JSON format',
                post: {
                    info: 'the format of the post request can not be altered',
                    format: {
                        name: 'string',
                        body: 'string',
                        status: ['active', 'declined', 'inactive', 'completed'],
                        assigner: 'integer',
                        project_id: 'integer'
                    }
                }
            }
        }, results
    });
});

router.get('/:id', async (req, res) => {
    let results = await Task.findAll({
        where: {
            id: req.params.id
        },
        include: [User, Project]
    });
    res.status(200);
    res.send(results);
});

router.post('/', async (req, res) => {
    let task = await Task.create({
        name: req.body.name,
        description: req.body.description,
        score: req.body.score,
        status: req.body.status,
        assigner: req.body.assigner,
        project_id: req.body.project
    })
    res.status(200);
    res.send(task);
})

export default router;