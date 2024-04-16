var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    let results = [];
    let completed = 0;
    functions.forEach((result,index) => {
      result()
        .then((res) => {
            results[index] = res;
          completed++;
          if (completed === functions.length) {
            resolve(results);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

const promise = promiseAll([() => new Promise((res) => res(42))]);
promise.then(console.log); // [42]

let functions = [
  () => new Promise((resolve) => setTimeout(() => resolve(5), 200)),
];
promiseAll(functions).then(console.log); // [5]

let functions2 = [
  () => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
  () => new Promise((resolve) => setTimeout(() => resolve(10), 150)),
  () => new Promise((resolve) => setTimeout(() => resolve(16), 100)),
];
promiseAll(functions2).then(console.log).catch(console.log); // Error
