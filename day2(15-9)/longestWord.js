function findLongestWord(sentence) {
    let words = sentence.split(' ');
    let indexOf,longestLength=0;
    words.forEach((word,index)=>{
        if(word.length>longestLength){
            longestLength=word.length;
            indexOf=index
        }
    })
    return words[indexOf];
  }
  
  // Test cases
  console.log(findLongestWord("JavaScript is a powerful language.")); // Should print "JavaScript"
  console.log(findLongestWord("The quick brown fox jumps over the lazy dog.")); // Should print "quick"
  

//method2
function findLongestWord(sentence) {
    let words = sentence.split(' ');
    let longestWord = words.reduce((longest,current)=>{
        return current.length>longest.length? current:longest
    })
    return longestWord;
  }
  
  // Test cases
  console.log(findLongestWord("JavaScript is a powerful language.")); // Should print "JavaScript"
  console.log(findLongestWord("The quick brown fox jumps over the lazy dog.")); // Should print "quick"
