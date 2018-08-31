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
  //   trie.insert('disestablishmentarianism');
  //   expect(trie.count()).to.equal(5);
  // });

  // it('should create a new root if one does not exist', () => {
  //   trie.insert('a');
  //   expect(trie.root.children).to.deep.equal({a: {letter: 'a', priority: 0, wordEnding: 'a', children: {}}});
  // });

  // it('should set the wordEnding property of the last letter of a word to that word', () => {
  //   trie.insert('do');
  //   expect(trie.root.children.d.children.o.wordEnding).to.equal('do');
  // });

  // it('should have multiple nodes from words with the same starting letter that have a wordEnding', () => {
  //   trie.insert('a');
  //   trie.insert('ace');
  //   expect(trie.root.children.a.wordEnding).to.equal('a');
  //   expect(trie.root.children.a.children.c.children.e.wordEnding).to.equal('ace');
  // });

  // it('should return a suggestion if the entered word is a complete word', () => {
  //   trie.insert('bat');
  //   trie.insert('band');
  //   trie.insert('batter');

  //   expect(trie.suggest('ba')).to.deep.equal(['batter', 'bat', 'band']);
  // });

  // it('should not return a word as a suggestion if it does not match the prefix', () => {
  //   trie.insert('frog');
  //   trie.insert('toad');

  //   expect(trie.suggest('f')).to.deep.equal(['frog']);
  // });
  
  // it('should get words from the dictionary and put them into the trie', () => {
  //   trie.populate(dictionary);
  //   expect(trie.count()).to.deep.equal(235886);
  // });

  // it('should take words from the dictionary and suggest them back with matching prefixes', () => {
  //   trie.populate(dictionary);
  //   expect(trie.suggest('gate')).to.deep.equal(['gater', 'gateado', 'gated', 'gatehouse', 'gatekeeper', 'gateless', 'gatelike', 'gatemaker', 'gateman', 'gatepost', 'gateage', 'gatetender', 'gatewards', 'gateward', 'gatewayman', 'gateway', 'gatewise', 'gatewoman', 'gateworks', 'gatewright', 'gate']);
  // });

  // it('should tell you if a word has no suggestions', () => {
  //   trie.populate(dictionary);
  //   expect(trie.suggest('sdlfkj')).to.equal(undefined);
  // });

  // it('should tell you there are no words in the pre-trie if you try to delete without them', () => {
  //   expect(trie.delete('word')).to.equal('There are no words in the prefix-trie!');
  // });

  // it('should tell you if a word is not in the prefix-trie if you try to delete one', () =>{
  //   trie.insert('frog');
  //   expect(trie.delete('toad')).to.equal('This word is not in the prefix trie!');
  // });

  // it('should delete stuff', () => {
  //   trie.insert('bro');
  //   trie.delete('bro');
  //   expect(trie.root.children.b.children).to.deep.equal({});
  // });

  // it('should delete stuff when there is more than one entry', () => {
  //   trie.insert('a');
  //   trie.insert('b');
  //   trie.delete('b');
  //   expect(trie.root.children.a).to.exist;
  // })

  // it('should reduce the wordCount if you delete a word', () => {
  //   expect(trie.wordCount).to.equal(0);
  //   trie.insert('word');
  //   expect(trie.wordCount).to.equal(1);
  //   trie.delete('word');
  //   expect(trie.wordCount).to.equal(0);
  // });

  // it('should not reduce the wordCount if you try to delete a word not in the trie', () => {
  //   trie.insert('friend');
  //   trie.delete('word');
  //   expect(trie.wordCount).to.equal(1);
  // });

  // it('should not delete nodes that are attached to other words', () => {
  //   trie.insert('hello');
  //   trie.delete('he');
  //   expect(trie.root.children.h.children.e.children.l.children.l.children.o).to.exist;
  //   expect(trie.root.children.h.children.e.wordEnding).to.equal(null)
  // })

  // it('should be able to delete one-letter words', () => {
  //   trie.insert('a');
  //   trie.insert('b');
  //   trie.delete('a');
  //   expect(trie.root.children).to.deep.equal({ b: { letter: 'b', wordEnding: 'b', children: {}, priority: 0 } });
  // })

  // it('should present high-priority words first when suggest is called', () => {
  //   trie.insert('he');
  //   trie.insert('helicopter');
  //   trie.insert('ha');
  //   trie.insert('hello');
  //   trie.insert('ace');
  //   trie.select('hello');
  //   expect(trie.suggest('he')).to.deep.equal([ 'hello', 'helicopter', 'he' ]);
  // });

});