// var map = function(arr, fn) {
//     let newArr=[]
//     for (let i=0; i<arr.length; i++){
//         newArr[i]=fn(arr[i])
//     }
//     return newArr
// };

// var plusOne = (n)=>n+1;
// var arr= [1,2,3,4,5];
// console.log(map(arr, plusOne));


var filter = function(arr, fn) {
    let newArr= [];
    arr.forEach(element => {
        return fn(element)? newArr.push(element): null;
    });
    return newArr;
}

var isEven = (n)=>n%2===0;
var arr= [1,2,3,4,5];
console.log(filter(arr, isEven));