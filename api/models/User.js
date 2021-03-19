import Sequelize from 'sequelize';
import db from '../config/config';
import Task from '../models/Task';
import Project from '../models/Project';

const User = db.define('User', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: Sequelize.STRING,
    name: Sequelize.STRING,
    surname: Sequelize.STRING,
}, {
    timestamps: false,
    tableName: 'users'
})

export default User;