function generateRandomNo(max,min){
    let a=parseInt(max);
    let b=parseInt(min);
  console.log(Math.floor(Math.random()*(a-b+1))+b)

}

generateRandomNo(10,1)

