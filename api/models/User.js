import Sequelize from 'sequelize';
import db from '../config/config';

const User = db.define('User', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: Sequelize.STRING,
    name: Sequelize.STRING,
    surname: Sequelize.STRING,
    projects_id: Sequelize.ARRAY(Sequelize.INTEGER),
    tasks_id: Sequelize.ARRAY(Sequelize.INTEGER)
}, {
    timestamps: false,
    tableName: 'users'
})

export default User;