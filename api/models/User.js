import Sequelize from 'sequelize';
import db from '../config/config';

const User = db.define('users', {
    email: Sequelize.STRING,
    name: Sequelize.STRING,
    surname: Sequelize.STRING
}, {
    timestamps: false
})

export default User;