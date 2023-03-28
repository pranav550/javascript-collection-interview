function checkPalidrome(x){
  arrayVal = x.split('');
  reverseArrayVal=arrayVal.reverse();
  if(arrayVal===reverseArrayVal){
    console.log("It is a plaidrome");
  }else{
    console.log("It is not a palidrome");
  }

}

checkPalidrome("madam")