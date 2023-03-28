//https://www.youtube.com/shorts/4ig9XS1gJcE
arr=['a','b','c'];

let obj= arr.reduce((acc,curr,i)=>({...acc,[i]:curr}),{});
console.log(obj);