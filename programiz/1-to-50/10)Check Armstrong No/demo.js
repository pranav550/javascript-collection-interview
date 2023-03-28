function checkArmStrong(n){
let temp=n;
let sum=0;
while(temp>0){
    let remainder = temp%10;
    sum+=remainder*remainder*remainder;
    temp = parseInt(temp/10); 
}
if(sum==n){
    console.log(`${n} is a armstrong number`);
}else{
    console.log(`${n} is not a armstrong number`)
}

}

checkArmStrong(153)