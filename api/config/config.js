import Sequelize from 'sequelize';

/**
 * Connection credentials
 */
const database = 'express-sequelize'
const username = 'postgres';
const password = 'password'

const sequelize = new Sequelize(database, username, password,
    {
        host: 'localhost',
        dialect: 'postgres'
    }
)


export default sequelize;