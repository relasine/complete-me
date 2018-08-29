class Node {
  constructor(letter) {
    this.letter = letter;
    this.wordEnding = null;
    this.children = {};
  }

}

module.exports = Node;