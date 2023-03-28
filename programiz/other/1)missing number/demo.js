let arr=[1,2,3,5];
count=10;
arr1=[];

for(let i=1; i<=count; i++){
    !arr.includes(i)?arr1.push(i):""
}
console.log(arr1)
