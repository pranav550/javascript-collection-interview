function FindFactorial(n){
fact=1;
if(n>1){
    for(let i=1; i<=n; i++){
        fact*=i
    }
    console.log(`factorial of ${n} is:`,fact)
}else{
    console.log("not exist")
}



} 

FindFactorial(5)