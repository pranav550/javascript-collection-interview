// occurence of array element
function occurence(arr){
const sum=arr.reduce(function(acc,curr){
     return acc[curr] ? ++acc[curr] : acc[curr] = 1,acc
},{})
console.log(sum)
}
occurence([5, 5, 5, 2, 2, 2, 2, 2, 9, 4])




//

function occurence2(arr){
    let initialValue=0;
const sum=arr.reduce(function(acc,curr){
     return acc+curr
})
console.log(sum)
}

occurence2([5, 5, 5, 2, 2, 2, 2, 2, 9, 4])