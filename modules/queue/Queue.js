class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}



class Queue {
  constructor() {
    // Set initial data.
    this.storage = {};
    this.head = null;
    this.tail = null;

  }
  // adding to the back
  enqueue(data) {
    // Add some data to the queue.
    // "if there is no first, enqueue adds a new first, otherwise it just adds to the back of the line(aka the tail)"
    //"this.storage AT this.tail = the data"
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
    }

    if (this.tail) {
      this.tail.next = node;
    }
    //this becomes the last item in the queue
    this.tail = node;

    this.storage[this.tail] = data;
    // // console.log(data);
    //counter 
    this.tail++;
  }
  //removing from the front
  dequeue() {
    // Remove some data from the queue.
    let removed = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return removed;
  }

  show() {
    // Return the next item in the queue.
    if (!this.head) {
      return 'no pets here';
    }
    const firstPet = this.head.value;
    // console.log('here', firstPet)
    return firstPet;
  }

  all() {
    // Return all items in the queue.

    let node = this.head;
    let all = [];
    while (node !== null) {
      all.push(node.value);
      node = node.next;
    }
    return all;
  }
}

module.exports = Queue;
