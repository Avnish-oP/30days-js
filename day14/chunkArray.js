var chunk = function(arr, size) {
    let chunkedArr = [];
    let i = 0;
    while(i < arr.length) {
        chunkedArr.push(arr.slice(i, i + size));
        i += size;
    }
    return chunkedArr;
}

let arr = [1,2,3,4,5];
let size = 1

console.log(chunk(arr, size)); // [[1,9,6],[3,2]]