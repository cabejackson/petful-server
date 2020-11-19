/* eslint-disable indent */
const express = require('express');
const json = require('body-parser').json();

const Cats = require('./cats.service');
const People = require('../../people/people.service');

const CatsRouter = express.Router();

CatsRouter
    .route('/')
    .get((req, res) => {
        // show the cat that's currently up for adoption.
        let displayCat = Cats.get();
        res.status(200).json(displayCat);
    });

CatsRouter
    .route('/')
    .delete(json, (req, res) => {
        // remove a cat from adoption.
        let removeCat = Cats.dequeue();
        let removePerson = People.dequeue();
        Cats.enqueue(removeCat);
        People.enqueue(removePerson);
        res.status(204).end();

    });

module.exports = CatsRouter;