import express from 'express';
import Task from '../models/Task';
import User from '../models/User';


const router = express.Router();

router.get('/', async (req, res) => {
    let results = await Task.findAll();
    res.status(200);
    res.send(results);
    console.table(results);
});

router.get('/:id', async (req, res) => {
    let results = await Task.findAll({
        where: {
            id: req.params.id
        }
    });
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
    console.log('Success');
})

export default router;