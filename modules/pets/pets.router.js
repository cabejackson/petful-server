/* eslint-disable indent */
const express = require('express');
const json = require('body-parser').json();

const Pets = require('./pets.service');
const People = require('../people/people.service');

const router = express.Router();

// router.get('/', (req, res) => {
//   // Return all pets currently up for adoption.
//   // let displayDog = Pets.getDog()
//   // res.json(displayDog);
// })

router.get('/cat', (req, res) => {
  let displayCat = Pets.getCat();
  res.json(displayCat);
  // return (
  //   res
  //     .json({
  //       imageURL: 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
  //       imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
  //       name: 'Fluffy',
  //       sex: 'Female',
  //       age: 2,
  //       breed: 'Bengal',
  //       story: 'Thrown on the street'
  //     })
  //   // .send('hi caleb!')
  // );
});
router.get('/dog', (req, res) => {
  let displayDog = Pets.getDog();
  res.json(displayDog);

  // return (
  //   res
  //     .json({
  //       imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
  //       imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
  //       name: 'Zeus',
  //       sex: 'Male',
  //       age: 3,
  //       breed: 'Golden Retriever',
  //       story: 'Owner Passed away'
  //     })
  //   // .send('hi caleb!')
  // );
});

router.delete('/cat', json, (req, res) => {
  // Remove a cat from adoption.
  let removeCat = Pets.dequeueCats();
  res.json(removeCat);

});

router.delete('/dog', json, (req, res) => {
  // Remove a dog from adoption.
  let removeDog = Pets.dequeueDogs();
  res.json(removeDog);

});

module.exports = router;
