function countVowels(str) {
    let count=0;
    let vowels=['a','e','i','o','u'];
    let strArray=Array.from(str.toLowerCase());
    strArray.forEach((word)=>{
        vowels.forEach((vowel)=>{
            if(word===vowel){
                count++;
            }
        })
    })
    return count;
  }
  
  // Test cases
  console.log(countVowels("Hello, World!")); // Should print 3
  console.log(countVowels("JavaScript is great.")); // Should print 6
  
//method 2
function countVowels(str) {
    let count=0;
    let vowels=['a','e','i','o','u'];
    for (const char of str.toLowerCase()){
        if (vowels.includes(char)){
            count++;
        }
    }
    return count;
  }
  
  // Test cases
  console.log(countVowels("Hello, World!")); // Should print 3
  console.log(countVowels("JavaScript is great.")); // Should print 6
