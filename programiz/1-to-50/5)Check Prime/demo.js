function isCheckPrime(number){
let isPrime=false;
if(number==1){
 isPrime=false;
}

else if(number>1){
    for(let i=2;i<number; i++){
        if(number%i==0){
            isPrime=false;
            break;
        }else{
            isPrime=true;
            break;
        }
    }
    if(isPrime){
       console.log(`${number} is prime number`)
    }else{
       console.log(`${number} is not prime number`);
    }
}
}

isCheckPrime(12);