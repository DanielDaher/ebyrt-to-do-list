const express = require('express');
const app = express();
const PORT = 3000;

const tasksRoute = require('./src/Routes/tasksRoute');
const loginRoute = require('./src/Routes/loginRoute');
const usersRoute = require('./src/Routes/usersRoute');


app.use(express.json());

app.use('/tasks', tasksRoute);
app.use('/login', loginRoute);
app.use('/users', usersRoute);

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}`));