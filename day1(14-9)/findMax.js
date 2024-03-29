function findMax(arr) {
    let max = arr[0];
    arr.forEach(element => {
        if (element>max){
            max = element;
        }
    });
    return max;
  }
  
  // Test cases
  console.log(findMax([3, 8, 1, 6, 2, 8])); // Should print 8
  console.log(findMax([45, 67, 12, 90, 4, 76])); // Should print 90
  