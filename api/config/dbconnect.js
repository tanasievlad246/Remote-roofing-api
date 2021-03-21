import sequelize from './config';

export default async function dbConnect() {
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.')
    } catch (err) {
        console.log('Unable to connect to the database:', err)
    }
}