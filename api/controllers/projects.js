import express from 'express';
import passport from 'passport';
import { User, Task, Project, AssignedProject } from '../../models/index';


const router = express.Router();

/**
 * GET ALL PROJECTS
 * TODO: One must be able to filter by name, description, 
 * status array (boolean OR operation filter), 
 * name/surname of the assigner, 
 * name/surname/id of the assignee(s) and by score
 */
router.get('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let results = await Project.findAll({
        include: [User, {
            model: User,
            as: "ProjectAssignees",
            through: { AssignedProject, attributes: [] } // Excludes relation table from the query
        }]
    });
    res.status(200);
    res.send(results);
});

router.get('/:id', async (req, res) => {
    try {
        let results = await Project.findAll({
            where: {
                id: req.params.id
            },
            include: User
        });
        res.status(200);
        if (results.length < 1) {
            res.send({
                message: "Project not found"
            })
        } else {
            res.send(results);
        }
    } catch (e) {
        res.send({
            error: e
        })
    }
});

/**
 * Assign a project to a user
 */
router.post('/assign', async (req, res) => {
    let assign = await AssignedProject.create({
        UserId: req.body.user_id,
        ProjectId: req.body.project_id
    })
    res.status(200);
    res.send(assign);
})

router.post('/', async (req, res) => {
    let project = await Project.create({
        name: req.body.name,
        body: req.body.body,
        description: req.body.description,
        status: req.body.status,
        score: req.body.score,
        asigner: req.body.asigner
    })
    res.status(200);
    res.send(project);
});

router.delete("/:id", async (req, res) => {
    try {
        const operation = Project.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(202);
        res.send(operation);
    } catch (error) {
        res.send(error);
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const update = await Project.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200);
        res.send(Project.findOne({
            where: {
                id: req.params.id
            }
        }));
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

//Implement assigning of Projects

export default router;