const Node = require('../lib/Node')

class Trie {
  constructor() {
    this.root = null;
    this.wordCount = 0;
  }

  count() {
    return this.wordCount;
  }

  insert(newWord) {
    this.wordCount ++

    let wordArray = newWord.split('');

    if (!this.root) {
      this.root = new Node();
    }

    let currNode = this.root;
    let prevNode;

    wordArray.forEach((arrLetter) => {
      if (!currNode.children[arrLetter]) {
        currNode.children[arrLetter] = new Node(arrLetter);
        currNode = currNode.children[arrLetter]
      } else if (currNode.children[arrLetter]) {
        currNode = currNode.children[arrLetter]
      }
    });

    currNode.end = true;
  }

  suggest(word) {
    let wordArray = word.split('');

    let currNode = this.root;

    word.Array.forEach((arrLetter) => {
      if ()
    });
  }

  populate(dictionary) {
    dictionary.forEach((word) => {
      this.insert(word)
    });
  }
}




module.exports = Trie;