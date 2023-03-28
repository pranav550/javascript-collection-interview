input="ui_dev_guide";
output="Ui Dev Guide";

let arr=input.split("_");

for(let i=0; i<arr.length; i++){
   arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
}

console.log(arr.join(" "));

