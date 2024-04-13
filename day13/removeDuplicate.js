var removeDuplicates = function(nums) {
    let size = 0;
    for(let i = 0; i<nums.length; i++){
        if(nums[i] !== nums[i+1]){
            nums[size] = nums[i];
            size++;
        }
    }
    return size;
    
};


let nums = [1,1,2,2,3];
console.log(removeDuplicates(nums));