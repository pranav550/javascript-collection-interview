function factorial(n){
    if(n==0){
        return 1;
    }else{
        return n*factorial(n-1)
    }
}

let num = prompt("Enter a number: ");

    if(num<=0){
        console.log("Enter a positive number");
    }
else{
    let result = factorial(num)
console.log(result)
}