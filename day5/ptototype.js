function maths(...args) {
    this.args.number=args.number;
    this.args.power=args.power;

}

maths.prototype.powerCounter = function(number, power) {
    let result = 1;
    for (let i = 0; i < power; i++) {
        result *= number;
    }
    return result;
}
 

console.log(maths.powerCounter(2, 3)); // 8