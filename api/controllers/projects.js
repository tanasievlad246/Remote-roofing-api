import express from 'express';
import Project from '../models/Project';
import User from '../models/User';

const router = express.Router();

router.get('/', async (req, res) => {
    let results = await Project.findAll();
    res.status(200);
    res.send(results);
    console.table(results);
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
    console.table(results);
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
    console.log('Success');
})

export default router;