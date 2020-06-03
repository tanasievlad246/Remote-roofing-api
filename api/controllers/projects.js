import express from 'express';
import Project from '../models/Project';
import User from '../models/User';

const router = express.Router();

router.get('/', async (req, res) => {
    let results = await Project.findAll({
        include: User
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
                        assigner: 'integer'
                    }
                }
            }
        },
        results
    });
});

router.get('/:id', async (req, res) => {
    let results = await Project.findAll({
        where: {
            id: req.params.id
        },
        include: User
    });
    res.status(200);
    res.send(results);
});

router.post('/', async (req, res) => {
    let project = await Project.create({
        name: req.body.name,
        body: req.body.body,
        status: req.body.status,
        assigner: req.body.assigner
    })
    res.status(200);
    res.send(project);
})

export default router;