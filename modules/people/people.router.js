const express = require('express');
const json = require('body-parser').json();

const People = require('./people.service');

const router = express.Router();

router.get('/', (req, res) => {
  // Return all the people currently in the queue.
  let allPeople = People.get();
  res.status(200).json(allPeople);
});

router.post('/', json, (req, res) => {
  // Add a new person to the queue.
  let { name } = req.body;
  let results = People.enqueue(name);
  res.status(201).json(results);
});

router
  .route('/')
  .delete(json, (req, res) => {
    let person = People.dequeue();
    // Remove a person from the queue

    res.status(204).json(person);

  });
module.exports = router;
