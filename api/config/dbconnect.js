import sequelize from './config';

export default async function dbConnect() {
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.')
    } catch (err) {
        console.err('Unable to connect to the database:', err)
    }
}