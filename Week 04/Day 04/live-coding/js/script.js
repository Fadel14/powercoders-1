function creditCardValidation(ccn){
  let resultCondition1 = false;
  let resultCondition2 = false;
  let resultCondition3 = false;
  let resultCondition4 = false;

  ccn = ccn.toString();

  // has the number 16 digits
  if(ccn.length===16){
    // are the characters numbers?
    let counter = 0;
    for(let i=0; i<16; i++){
      let temp = Number.parseInt(ccn[i]);
      if(Number.isInteger(temp)){
        counter++;
      }
    }
    if(counter==16){
      resultCondition1 = true;
    }
    /*
    alternative way

    for(let i=0; i<16; i++){
      let temp = Number.parseInt(ccn[i]);
      if(!Number.isInteger(temp)){
        resultCondition1 = false;
        break;
      } else {
        resultCondition1 = true;
      }
    }
    */
  }

  // at least 2 different digits
  let firstDigit = ccn[0];    
  for(let i=1; i<16; i++){
    if(firstDigit != Number.parseInt(ccn[i])){
        resultCondition2 = true;
        break;
    }
  }

  /*
  alternative way  

  // The credit card number must be composed of at least two different digits (i.e. all of the digits cannot be the same)
  
  var obj = {};
  for(var i = 0; i < ccn.length; i++){
    obj[ccn[i]] = true;
  }
  if(Object.keys(obj).length > 1){
    resultCondition2 = true;
  }
  */

  // final digit has to be even
  let finalDigit = ccn[ccn.length-1]; //ccn[15]
  if(Number.parseInt(finalDigit) % 2 == 0){
    resultCondition3 = true;
  }
  
  // sum of digits > 16
  let sum = 0;
  for(let i=0; i<16; i++){
    let temp = Number.parseInt(ccn[i]);
    sum += temp;
  }
  if(sum > 16){
    resultCondition4 = true;
  }



  // check all result conditions for final validation
  if(resultCondition1 && resultCondition2 && resultCondition3 && resultCondition4){
    return true;
  } else {
    return false;
  }
}

let result = creditCardValidation(1211111111111112);
console.log(result);