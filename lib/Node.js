class Node {
  constructor(letter) {
    this.letter = letter;
    this.wordEnding = null;
    this.children = {};
    this.priority = 0;
  }

}

module.exports = Node;