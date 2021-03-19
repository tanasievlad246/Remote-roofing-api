import Sequelize from 'sequelize';

/**
 * Connection credentials
 */
const database = 'remoteroofing'
const username = 'postgres';
const password = 'fortuna246'

const sequelize = new Sequelize(database, username, password,
    {
        host: 'localhost',
        dialect: 'postgres'
    }
)


export default sequelize;