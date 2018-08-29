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
      this.root.letter = 'Node'
    }

    let currNode = this.root;

    wordArray.forEach((arrLetter) => {
      if (!currNode.children[arrLetter]) {
        currNode.children[arrLetter] = new Node(arrLetter);
        currNode = currNode.children[arrLetter]
      } else if (currNode.children[arrLetter]) {
        currNode = currNode.children[arrLetter]
      }
    });

    currNode.wordEnding = newWord;
  }

  suggest(word) {
    let wordArray = word.split('');
    let currNode = this.root;
    let suggestions = []
    let falseReturn = true;

    wordArray.forEach((arrLetter, index) => {
      if (currNode.children[arrLetter]) {
        currNode = currNode.children[arrLetter];
      } else if (!currNode.children[arrLetter]) {
        falseReturn = false;
      }
    });

    let currKeys = Object.keys(currNode.children)

    if (falseReturn === true) {
      suggestions = this.pullSuggestions(currNode);
      return suggestions
    } else {
      return 'No suggestions'
    }

  }

  pullSuggestions(node, workingArray = []) {
    let currNode = node;

    let suggestionArray = workingArray;

    Object.keys(currNode.children).forEach((child) => {
      if (currNode.children[child]) {
        this.pullSuggestions(currNode.children[child], suggestionArray)
      }
    })

    if (currNode.wordEnding !== null) {
      suggestionArray.push(currNode.wordEnding);
    }

    if (suggestionArray.length > 0) {
      return suggestionArray;
    } else {
      return 'No suggestions'
    }
  }

  pullSuggestions(node, workingArray = []) {
    let currNode = node;

    let suggestionArray = workingArray;

    Object.keys(currNode.children).forEach((child) => {
      if (currNode.children[child]) {
        this.pullSuggestions(currNode.children[child], suggestionArray)
      }
    })

    if (currNode.wordEnding !== null) {
      suggestionArray.push(currNode.wordEnding);
    }

    if (suggestionArray.length > 0) {
      return suggestionArray;
    }
  }

  pullSuggestions(node, workingArray = []) {
    let currNode = node;

    let suggestionArray = workingArray;

    Object.keys(currNode.children).forEach((child) => {
      if (currNode.children[child]) {
        this.pullSuggestions(currNode.children[child], suggestionArray)
      }
    })

    if (currNode.wordEnding !== null) {
      suggestionArray.push(currNode.wordEnding);
    }

    if (suggestionArray.length > 0) {
      return suggestionArray;
    }
  }

  populate(dictionary) {
    dictionary.forEach((word) => {
      this.insert(word)
    });
  }
}




module.exports = Trie;