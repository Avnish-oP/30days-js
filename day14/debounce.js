var debounce = function(fn, t) {
    let id;
    return function(...args) {
        clearTimeout(id);
        id = setTimeout(() => {
            fn.apply(this, args)
        }, t);
    }
};

const log = debounce(console.log, 100);
log('Hello'); // cancelled
log('Hello'); // cancelled
log('Hello'); // logs 'Hello' to the console after 100ms