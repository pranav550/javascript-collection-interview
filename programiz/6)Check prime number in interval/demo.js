function isCheckPrime(b,a){
    isPrime=false;
    for(let i=a; i<=b;i++){
       let flag=0;
        for(let j=2;j<i;j++){
          if(i%j==0){
            flag=1;
            break;
          }
        }

        if(i>1 && flag==0){
            console.log(i)
        }
    }


}

isCheckPrime(10,1)