function factorial(n) {
    let fact, i = n;
    if (i===0){
        return 1;
    }
    else{
        return factorial(n-1)*n;
    }
  }
  
  // Test cases
  console.log(factorial(5)); // Should print 120 (5! = 5*4*3*2*1 = 120)
  console.log(factorial(0)); // Should print 1 (0! is defined as 1)
  