import Sequelize from 'sequelize';
import db from '../config/config';
import User from './User';
import Project from './Project';

const Task = db.define('Task', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: Sequelize.STRING,
    description: Sequelize.TEXT,
    score: Sequelize.INTEGER,
    status: Sequelize.STRING,
    assigner: {
        type: Sequelize.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    project_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Project,
            key: 'id'
        }
    }
}, {
    timestamps: false,
    tableName: 'tasks'
})

// Project.hasOne(Task, { foreignKey: 'project_id' })
// Task.belongsTo(Project, { foreignKey: 'project_id' })

// Task.hasOne(User, { foreignKey: 'assigner' })
// Task.belongsTo(User, { foreignKey: 'assigner' })

export default Task;