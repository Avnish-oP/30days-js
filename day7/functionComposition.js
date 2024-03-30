var compose = function(functions) {
    return function(x) {
        for (let i=functions.length-1; i>=0; i--){
            x=functions[i](x);
        }
        return x;
    }
};

const fn = compose([x => x + 1, x => 2 * x])
  fn(4)
  console.log(fn(4))


  //arguments length counting function
var argumentsLength = function(...args) {
    let count = 0; 
    // for(let arg in args){
    //     count++;
    // }
    args.forEach(element=>count++)
    return count;
    
};

console.log(argumentsLength(1, 2, 3)); // 3
 