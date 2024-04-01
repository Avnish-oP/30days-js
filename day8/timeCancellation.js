var cancellable = function(fn, args, t) {
    let cancelled = false;
    const timer = setTimeout(() => {
      if (!cancelled) {
        fn(...args);
      }
    }, t);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
    
};


  const result = [];
 
  const fn = (x) => x * 5;
  const args = [2], t = 20, cancelTimeMs = 50;
 
  const start = performance.now();
 
  const log = (...argsArr) => {
      const diff = Math.floor(performance.now() - start);
      result.push({"time": diff, "returned": fn(...argsArr)});
  }
       
  const cancel = cancellable(log, args, t);
 
  const maxT = Math.max(t, cancelTimeMs);
           
  setTimeout(cancel, cancelTimeMs);

  setTimeout(() => {
      console.log(result); 
  }, maxT + 15)
 