Array.prototype.last = function(){
    return this.length===0? -1: this[this.length-1];
}

const nums = [null, {}, 3];
console.log(nums.last()); // 3