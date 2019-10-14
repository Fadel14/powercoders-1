const numbers1 = [2, 4, 6, 7, 10, 15];
const minimum = 8;
const greaterThan = function(numbers,min) {
  var result = [];
  numbers.forEach(function(number){
    if(number > min){
      result.push(number);
    }
  });
  return result;
}
const largerNumbers = greaterThan(numbers1, minimum);
console.log(largerNumbers); // [10, 15]