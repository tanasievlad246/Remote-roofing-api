import Sequelize from 'sequelize';
import db from '../api/config/config';
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


export default Task;