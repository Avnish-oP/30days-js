function maxDifference(arr) {
    let max = arr[0];
    let min = arr[0];
    arr.forEach(element => {
        if (element>max){
            max=element;
        }
        if(element<min){
            min=element;
        }
    });
    return max-min;
  }
  
  // Test cases
  console.log(maxDifference([7, 2, 8, 9])); // Should print 7
  console.log(maxDifference([1, 5, 3, 2, 4])); // Should print 4
  