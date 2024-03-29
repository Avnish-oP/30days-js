function isPalindrome(str) {
    let trimStr=str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let left=0, right=trimStr.length-1;
    while(left<right){
        if(trimStr[left]!==trimStr[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
  }
  
  // Test cases
  console.log(isPalindrome("racecar")); // Should print true
  console.log(isPalindrome("A man, a plan, a canal, Panama")); // Should print true
  console.log(isPalindrome("hello")); // Should print false
  