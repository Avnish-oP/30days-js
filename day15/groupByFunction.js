Array.prototype.groupBy = function (fn) {
  let groupByArray = {};
  this.forEach((ele) => {
    let key = fn(ele);
    if (groupByArray[key]) {
      groupByArray[key].push(ele);
    } else {
      groupByArray[key] = [ele];
    }
  });
  return groupByArray;
};

console.log([1, 2, 3].groupBy(String)); // {"1":[1],"2":[2],"3":[3]}
let array = [{ id: "1" }, { id: "1" }, { id: "2" }];
let fn = function (item) {
  return item.id;
};
console.log(array.groupBy(fn));
