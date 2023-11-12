var TrieNode = function () {
  this.children = {};
  this.endOfWord = false;
};

var Trie = function () {
  this.root = new TrieNode();
};

Trie.prototype.insert = function (word) {
  let cur = this.root;

  for (let c of word) {
    if (!Object.keys(cur.children).includes(c)) {
      // create trie node
      cur.children[c] = new TrieNode();
    }
    // link it with root
    cur = cur.children[c];
  }
  // at the end of word
  cur.endOfWord = true;
};

Trie.prototype.search = function (word) {
  let cur = this.root;

  for (let c of word) {
    if (!Object.keys(cur.children).includes(c)) {
      return false;
    }
    // move our ptr to that exist child
    cur = cur.children[c];
  }

  return cur.endOfWord;
};

Trie.prototype.startsWith = function (prefix) {
  let cur = this.root;

  for (let c of prefix) {
    if (!Object.keys(cur.children).includes(c)) {
      return false;
    }
    cur = cur.children[c];
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

var obj = new Trie();
obj.insert("word");
