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
    let falseReturn = true;

    wordArray.forEach((arrLetter) => {
      if (currNode.children[arrLetter]) {
        currNode = currNode.children[arrLetter];
      } else if (!currNode.children[arrLetter]) {
        falseReturn = false;
      }
    });

    suggestions = this.pullSuggestions(currNode)
  

    suggestions.sort((a, b) => {
      return b.priority - a.priority;
    });

    let suggestionsNew = suggestions.map((object) => {
      object.word
      return object.word;
    });

    return suggestionsNew
  }

  pullSuggestions(node, workingArray = []) {
    let currNode = node;
    let suggestionArray = workingArray;

    Object.keys(currNode.children).forEach((child) => {
      if (currNode.children[child]) {
        this.pullSuggestions(currNode.children[child], suggestionArray);
      }
    });

    if (currNode.wordEnding !== null) {
      let object = {word: currNode.wordEnding, priority: currNode.priority}
      suggestionArray.push(object);
    }

    if (suggestionArray.length > 0) {
      return suggestionArray;
    } else {
      return 'No suggestions';
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
    let revArray = wordArray.slice().reverse();

    if (!this.checkDictionary(wordArray)) {
      return 'This word is not in the prefix trie!';
    }

    wordArray.forEach((node, index) => {
      let currNode = this.root;

      for (let i = 0; i < wordArray.length - index; i++) {
        currNode = currNode.children[wordArray[i]];
      }

      if (index === 0 && Object.keys(currNode.children).length) {
        currNode.wordEnding = null 
      } else if (index >= 1 && Object.keys(currNode.children).length >= 1) {
        delete currNode.children[revArray[index - 1]];
        stopDelete = true;     
        
      } else if (index > 1 && stopDelete === false 
        && Object.keys(currNode.children).length <= 1) {
        delete currNode.children[revArray[index - 1]];
        
      }
    });

    this.wordCount --;
  }

  select(word) {
    let array = word.split('')
    let currNode = this.root;

    array.forEach((letter) => {
      currNode = currNode.children[letter]
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