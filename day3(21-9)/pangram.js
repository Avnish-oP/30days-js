function isPangram(str) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let strArray=Array.from(str).reduce((previousValue));
    let count=0;
    strArray.forEach(element=>{
        if(alphabet.includes(element)){
            count++;
        }
    })
    return count;
  }
  
  // Test cases
  console.log(isPangram("The quick brown fox jumps over the lazy dog")); // Should print true
  console.log(isPangram("Hello, world!")); // Should print false
  