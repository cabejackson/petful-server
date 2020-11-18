const Queue = require('../queue/Queue');
const store = require('../../store');

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
};

store.cats.forEach(cat => pets.cats.enqueue(cat));
store.dogs.forEach(dog => pets.dogs.enqueue(dog));

// --------------------

module.exports = {
  getDog() {
    // Return the Dog next in line to be adopted.
    return pets.dogs.show();
  },
  getCat() {
    // Return the Cat next in line to be adopted.
    return pets.cats.show();
  },

  dequeueCats() {
    // Remove a cat from the queue.
    return pets.cats.dequeue();
  },

  // enqueue(cat) {
  //   //Add cat to the back of line
  //   return cats.enqueue(cat)
  // },
  dequeueDogs() {
    // Remove a dog from the queue.
    return pets.dogs.dequeue();
  },
};
