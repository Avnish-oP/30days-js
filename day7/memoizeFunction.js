function memoize(fn) {
    // let cache = {};
    let cache = new Map();
    
    return function(...args) {
        let key = JSON.stringify(args);
        if(!cache.get(key)){
            cache.set(key,fn(...args))
        }
        return cache.get(key)
        // let key = JSON.stringify(args);
        // if(!cache.hasOwnProperty(key)){
        //     cache[key] = fn(...args);
        // }
        // return cache[key];
         
        
    }
}

  let callCount = 0;
 const memoizedFn = memoize(function (a, b) {
 	 callCount += 1;
  return a + b;
  })
  console.log(memoizedFn(2, 3) )// 5
  console.log(memoizedFn(1, 3) )// 5
  console.log(callCount) // 1 
 