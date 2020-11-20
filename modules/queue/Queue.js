class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    // Set initial data.
    //this.storage = {};
    this.first = null;
    this.last = null;
  }
  // adding to the back
  enqueue(data) {
    // Add some data to the queue.
    const node = new Node(data);
    // "if there is no first, enqueue adds a new first, otherwise it just adds to the back of the line
    if (!this.first) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    //this becomes the last item in the queue

    this.last = node;
  }

  //removing from the front

  dequeue() {
    // Remove some data from the queue.
    if (!this.first) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;

    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }

  show() {
    // Return the next item in the queue.
    //const node = this.first.value;
    const node = this.first;
    //const next = node.next;
    if (!this.first) {
      return 'nothing is available';
    }
    if (node === null) {
      return;
    }

    return node;

  }

  all() {
    // Return all items in the queue.
    let node = this.first;
    let array = [];
    console.log('outside', node);

    while (node) {
      array.push(node.value);
      node = node.next;
      console.log('inside', node);

    }

    return array;

  }
}

module.exports = Queue;