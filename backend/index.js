const express = require('express');
const app = express();
const PORT = 3000;

const tasksRoute = require('./Routes/tasksRoute');

app.use(express.json());

app.use('/tasks', tasksRoute);

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}`));