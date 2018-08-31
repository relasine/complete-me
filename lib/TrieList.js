const Node = require('../lib/Node');

class Trie {
  constructor() {
    this.root = null;
    this.wordCount = 0;
  }

  count() {
    return this.wordCount;
  }

  insert(newWord) {
    this.wordCount ++;

    let wordArray = newWord.split('');

    if (!this.root) {
      this.root = new Node();
      this.root.letter = 'ROOT';
    }

    let currNode = this.root;

    wordArray.forEach((arrLetter) => {
      if (!currNode.children[arrLetter]) {
        currNode.children[arrLetter] = new Node(arrLetter);
        currNode = currNode.children[arrLetter];
      } else if (currNode.children[arrLetter]) {
        currNode = currNode.children[arrLetter];
      }
    });

    currNode.wordEnding = newWord;
  }

  suggest(word) {
    let wordArray = word.split('');
    let currNode = this.root;
    let suggestions = [];
    let falseReturn = false;

    wordArray.forEach((arrLetter) => {
      if (currNode.children[arrLetter]) {
        currNode = currNode.children[arrLetter];
      } else if (!currNode.children[arrLetter]) {
        falseReturn = true;
      }
    });

    if (!falseReturn) {
      suggestions = this.pullSuggestions(currNode);
    }

  
    suggestions.sort((a, b) => {
      return b.priority - a.priority;
    });

    let suggestionsNew = suggestions.map((object) => {
      object.word;
      return object.word;
    });

    if (suggestionsNew.length) {
      return suggestionsNew;
    }
  }

  pullSuggestions(node, workingArray = []) {

    Object.keys(node.children).forEach((child) => {
      if (node.children[child]) {
        this.pullSuggestions(node.children[child], workingArray);
      }
    });

    if (node.wordEnding !== null) {
      let object = {word: node.wordEnding, priority: node.priority};

      workingArray.push(object);
    }

    if (workingArray.length > 0) {
      return workingArray;
    }
  }

  populate(dictionary) {
    dictionary.forEach((word) => {
      this.insert(word);
    });
  }

  delete(word) {
    if (!this.root) {
      return 'There are no words in the prefix-trie!';
    }

    let wordArray = word.split('');
    let stopDelete = false;

    if (!this.checkDictionary(wordArray)) {
      return 'This word is not in the prefix trie!';
    }

    if (wordArray.length === 1) {
      this.deleteOneWord(word);
      return;
    }

    wordArray.forEach((node, index) => {
      let currNode = this.root;

      for (let i = index; i < wordArray.length; i++) {
        currNode = currNode.children[wordArray[i - index]];
      }

      if (stopDelete) {
        return;
      } else if (index === 0) {
        currNode.wordEnding = null;
        if (Object.keys(currNode.children).length > 0) {
          stopDelete = true;
        }
      } else if (Object.keys(currNode.children).length === 1) {
        currNode.children = {};
      } else if (Object.keys(currNode.children).length > 1) {
        stopDelete = true;
      }
    });
    
    this.wordCount --;
  }

  deleteOneWord(word) {
    if (Object.keys(this.root.children[word].children) > 0) {
      this.root.children[word].wordEnding = null;
    } else {
      delete this.root.children[word];
    }
  }

  select(word) {
    let array = word.split('');
    let currNode = this.root;

    array.forEach((letter) => {
      currNode = currNode.children[letter];
    });

    currNode.priority ++;
  }

  checkDictionary(wordArray) {
    let result = true;
    let currNode = this.root;

    wordArray.forEach((letter) => {
      if (currNode.children[letter]) {
        currNode = currNode.children[letter];
      } else {
        result = false;
      }
    });

    return result;
  }
}

module.exports = Trie;