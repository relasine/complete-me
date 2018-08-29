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

  it('should exist', () => {
    expect(trie).to.exist;
  })

  it('should default wordCount to 0', () => {
    expect(trie.wordCount).to.equal(0);
  });

  it('should default root to null', () => {
    expect(trie.root).to.equal(null);
  });

  it('should increase the number of words in wordList each time we insert a new word', () => {
    expect(trie.count()).to.equal(0);
    trie.insert('word');
    expect(trie.count()).to.equal(1);
  });

  it('should be able to take multiple words in wordList', () => {
    trie.insert('word');
    trie.insert('tacos');
    trie.insert('a');
    trie.insert('apple');
    expect(trie.count()).to.equal(4);
  });

  it('should create a new root if one does not exist', () => {
    trie.insert('a');
    expect(trie.root.children).to.deep.equal({a: {letter: 'a', end: true, children: {}}});
  });

  it('should set the end property of the last letter to true', () => {
    trie.insert('do');
    expect(trie.root.children.d.children.o.end).to.equal(true)
  });

  it('should get words from the dictionary and put them into the trie', () => {
    trie.populate(dictionary);
    expect(trie.count()).to.deep.equal(235886);
  });


});