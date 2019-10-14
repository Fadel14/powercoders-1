const word1 = 'hello';
const word2 = 'eollh';
const isAnagram = function(s1,s2) {
  return s1.split("").sort().join("") === s2.split("").sort().join("");
}
const result = isAnagram(word1, word2);
console.log(result); // true