import express from 'express';
import bodyParser from 'body-parser';
import dbConnect from './config/dbconnect'
import User from './models/User'
import sequelize from './config/config';



const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json())



dbConnect();

app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Hello III!'
    })
})

app.get('/users', async (req, res) => {
    // let results = await User.findAll({
    //     attributes: ['id', 'name']
    // });
    let results = await sequelize.query('SELECT * FROM users AS users', { type: "SELECT" })
    await res.status(200);
    await res.send(results);
    console.table(results);
})

app.post('/users', async (req, res) => {
    await sequelize.query(`INSERT INTO users (name, surname, email) VALUES ('vlad', 'tanasie', 'vlad@gmail.com',)`, { type: "INSERT" })
    await res.status(200);
    // await res.send(results);
    console.log('Success');
})




app.listen(port, () => console.log(`Running on ${port}`))