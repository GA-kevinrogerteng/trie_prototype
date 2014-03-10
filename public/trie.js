Trie = function(){
  this.characters = {};
  this.isWord = false;
};
Trie.prototype.learn = function(word, index){
  if (index === undefined){
    index = 0;
  }
  var wordLength = word.length;
     if (wordLength !== index) {
      if (this.characters[word[index]] === undefined){
        this.characters[word[index]] = new Trie();
      }
        var childTrie = this.characters[word[index]];
        childTrie.learn(word, index + 1);
     }else 
     {
      this.isWord = true;
      return;
     }
};
  // This function should add the given word,
  // starting from the given index,
  // to this Trie.

  // It will be recursive.  It will tell
  // the correct child of this Trie to learn the word
  // starting from a later index.

  // Consider what the learn function should do
  // when it reaches the end of the word?
  // A word does not necessarily end at a leaf.
  // You must mark nodes which are the ends of words,
  // so that the words can be reconstructed later.


Trie.prototype.getWords = function(words, currentWord){
  
  if (currentWord === undefined){
    currentWord = "";
  }

  if (words === undefined) {
    words = [];
  }
  if (this.isWord === true){
      words.push(currentWord);
  }

  for(var k in this.characters){
    var childTrie = this.characters[k];
    var izWord = currentWord + k;
    childTrie.getWords(words, izWord);
  }
  return words;
};

  // This function will return all the words which are
  // contained in this Trie.
  // it will use currentWord as a prefix,
  // since a Trie doesn't know about its parents.


Trie.prototype.find = function(word, index){
  // if (word.length === 0){
  //   return false;
  // }
  if (index === undefined){
    index = 0;
  }
  if (this.characters[word[index]]) {
    return this.characters[word[index]].find(word, index+1);
  } else if (index === word.length) {
    return this;
  } else{
    return false;
  }
};

  // This function will return the node in the trie
  // which corresponds to the end of the passed in word.

  // Be sure to consider what happens if the word is not in this Trie.


Trie.prototype.autoComplete = function(prefix){
  // This function will return all completions 
  // for a given prefix.
  // It should use find and getWords.

  if (prefix === undefined){
    prefix = "";
  }
  var lookUp = this.find(prefix);
  if (lookUp){
  return lookUp.getWords([], prefix);
  } else {
  return [];
  }
};

var root = new Trie();
root.learn("begin");
root.learn("began");
root.learn("list");
root.learn("listed"); 
var newS = root.find("beg");






