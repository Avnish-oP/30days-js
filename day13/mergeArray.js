var merge = function(nums1, m, nums2, n) {
    let first = m-1; 
    let second =n-1; 
    let i= m+n-1;
    while(second>=0){
        if(first>=0 && nums1[first]>nums2[second]){
            nums1[i--]=nums1[first--]
        }
        else{
            nums1[i--]=nums2[second--]
        }
        
    }
    return nums1
    // let i = m - 1;
    // let j = n - 1;
    // let k = m + n - 1;
    
    // while (j >= 0) {
    //     if (i >= 0 && nums1[i] > nums2[j]) {
    //         nums1[k--] = nums1[i--];
    //     } else {
    //         nums1[k--] = nums2[j--];
    //     }
    // }
    // return nums1
};

let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
console.log(merge(nums1, m, nums2, n));
nums1=[4,5,6,0,0,0],m=3, nums2=[1,2,3],n=3
console.log(merge(nums1, m, nums2, n));