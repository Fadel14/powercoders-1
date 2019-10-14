const sentence1 = 'guide your learning through pain';
const findLongest = function(sentence) {
  let words = sentence.split(" ");
  let prev = 0;
  let result = '';
  words.forEach(function(word){
    let chars = word.length;
    if(chars > prev){
      prev = chars;
      result = word;
    }
  });
  return result;
}
const longestWord = findLongest(sentence1);
console.log(longestWord === 'learning'); // true