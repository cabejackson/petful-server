/* eslint-disable indent */
const Queue = require('../../queue/Queue');
const store = require('../../../store');

// Set up initial data.
// --------------------

const dogs = new Queue();

store.dogs.forEach(dog => dogs.enqueue(dog));

// --------------------
module.exports = {
    get() {
        // show the dog next in line to be adopted
        return dogs.show();
    },
    enqueue(dog) {

        // add dog to the back of line
        return dogs.enqueue(dog);
    },
    dequeue() {
        // remove a dog from the queue
        return dogs.dequeue();

    }
};