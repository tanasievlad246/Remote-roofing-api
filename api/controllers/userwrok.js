import express from 'express';
import User from '../../models/User';
import Task from '../../models/Task';
import Project from '../../models/Project';

const router = express.Router();

router.get('/', async (req, res) => {
    let results = await User.findAll({
        include: [Task, Project]
    });
    res.status(200);
    res.send(results);
});

export default router;