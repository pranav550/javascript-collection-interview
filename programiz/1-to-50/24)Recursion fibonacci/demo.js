function fibonacci(n){
    if(n<2){
        return n;
    }else{
        return fibonacci(n-1)+fibonacci(n-2) 
    }
}

let num = prompt("Enter a number: ");

    if(num<=0){
        console.log("Enter a positive number");
    }
else{
for(let i=0; i<num; i++){
    console.log(fibonacci(i))
}  
}