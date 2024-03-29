function reverseSentence(sentence) {
    // Your code here
    let words = sentence.split(" ");
    let reverseSentence= words.reverse().join(' ');
    return reverseSentence;
  }
  
  // Test cases
  console.log(reverseSentence("Hello, world!")); // Should print "world! Hello,"
  console.log(reverseSentence("JavaScript is awesome.")); // Should print "awesome. is JavaScript"
  