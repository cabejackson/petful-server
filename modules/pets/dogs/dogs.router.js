/* eslint-disable indent */
const express = require('express');
const json = require('body-parser').json();

const Dogs = require('./dogs.service');
const People = require('../../people/people.service');

const DogsRouter = express.Router();

DogsRouter
    .route('/')
    .get((req, res) => {
        // show the dog that's currently up for adoption.
        let displayDog = Dogs.get();
        res.status(200).json(displayDog);
    });

DogsRouter
    .route('/')
    .delete(json, (req, res) => {
        // remove a dog from adoption.
        let removeDog = Dogs.dequeue();
        let removePerson = People.dequeue();
        Dogs.enqueue(removeDog);
        People.enqueue(removePerson);
        res.status(204).end();

    });

module.exports = DogsRouter;