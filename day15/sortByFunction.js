var sortBy = function(arr, fn) {
    // let sortedArray=[]
    // arr.forEach((element,index) => {
    //     if(sortedArray.length==0){
    //         sortedArray.push(element)
    //     }else{
    //         let flag=0
    //         for(let i=0;i<sortedArray.length;i++){
    //             if(fn(element)<fn(sortedArray[i])){
    //                 sortedArray.splice(i,0,element)
    //                 flag=1
    //                 break
    //             }
    //         }
    //         if(flag==0){
    //             sortedArray.push(element)
    //         }
    //     }
    // });
    // return sortedArray
    //above code has more complexity
    return arr.sort((a, b) => fn(a) - fn(b));
    
};

let arr = [{"x": 1}, {"x": 0}, {"x": -1}]
let fn = (d) => d.x

console.log(sortBy(arr,fn))