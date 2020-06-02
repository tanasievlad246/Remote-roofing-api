import Sequelize from 'sequelize';
import db from '../config/config';
import User from './User';

const Project = db.define('Project', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: Sequelize.STRING,
    body: Sequelize.STRING,
    assigner: {
        type: Sequelize.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    assignees: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        references: {
            model: User,
            key: 'id'
        }
    }
}, {
    timestamps: false,
    tableName: 'projects'
})

// Project.hasMany(User);


export default Project;