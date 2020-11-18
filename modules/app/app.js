const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use('/api/people', require('../people/people.router'));
app.use('/api/pets', require('../pets/pets.router'));

//below works
// app.get('/', (req, res) => {
//     res.send('Hello Express!');
// });

module.exports = app;
