const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use('/api/people', require('../people/people.router'));
// app.use('/api/pets', require('../pets/pets.router'));
app.use('/api/cats', require('../pets/cats/cats.router'));
app.use('/api/dogs', require('../pets/dogs/dogs.router'));

//below works
// app.get('/', (req, res) => {
//     res.send('Hello Express!');
// });

module.exports = app;
