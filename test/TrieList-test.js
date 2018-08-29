const { expect } = require('chai')
const Trie = require('../lib/TrieList')
const fs = require('fs');
const text = "/usr/share/dict/words"
const dictionary = fs.readFileSync(text).toString().trim().split('\n');

describe('TRIE', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });

  // it('should exist', () => {
  //   expect(trie).to.exist;
  // })

  // it('should default wordCount to 0', () => {
  //   expect(trie.wordCount).to.equal(0);
  // });

  // it('should default root to null', () => {
  //   expect(trie.root).to.equal(null);
  // });

  // it('should increase the number of words in wordList each time we insert a new word', () => {
  //   expect(trie.count()).to.equal(0);
  //   trie.insert('word');
  //   expect(trie.count()).to.equal(1);
  // });

  // it('should be able to take multiple words in wordList', () => {
  //   trie.insert('word');
  //   trie.insert('tacos');
  //   trie.insert('a');
  //   trie.insert('apple');
  //   expect(trie.count()).to.equal(4);
  // });

  // it('should create a new root if one does not exist', () => {
  //   trie.insert('a');
  //   expect(trie.root.children).to.deep.equal({a: {letter: 'a', wordEnding: 'a', children: {}}});
  // });

  // it('should set the wordEnding property of the last letter of a word to that word', () => {
  //   trie.insert('do');
  //   expect(trie.root.children.d.children.o.wordEnding).to.equal('do')
  // });

  // it('should get words from the dictionary and put them into the trie', () => {
  //   trie.populate(dictionary);
  //   expect(trie.count()).to.deep.equal(235886);
  // });

  it('should return a suggestion if the entered word is a complete word', () => {
    trie.insert('bat')
    trie.insert('band')
    trie.insert('batter');
    // trie.insert('app');

    expect(trie.suggest('ba')).to.deep.equal(['batter', 'bat', 'band']);
  })


});