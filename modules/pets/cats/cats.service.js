/* eslint-disable indent */
const Queue = require('../../queue/Queue')
const store = require('../../../store')

// Set up initial data.
// --------------------

const cats = new Queue()

store.cats.forEach(cat => cats.enqueue(cat))

// --------------------
module.exports = {
    get() {
        // show the cat next in line to be adopted.
        return cats.show()
    },
    enqueue(cat) {

        // add cat to the back of line
        return cats.enqueue(cat)
    },
    dequeue() {
        // remove a cat from the queue.
        return cats.dequeue()

    }
}
