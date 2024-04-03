var TimeLimitedCache = function () {
    this.cache = new Map();
    this.time = new Map();
  };

  let getCurrentTime = () => new Date().getTime();
  
  TimeLimitedCache.prototype.set = function (key, value, duration) {
    let currentTime = getCurrentTime();
    let existed = this.time.has(key) && this.time.get(key) > currentTime;
    this.time.set(key, currentTime + duration);
    this.cache.set(key, value);
    
    return existed;
  };
  
  TimeLimitedCache.prototype.get = function (key) {
    let currentTime = getCurrentTime();
    if (this.time.get(key) > currentTime) {
      return this.cache.get(key);
      
    }
    this.cache.delete(key);
    this.time.delete(key);
    return -1;
  };
  
  TimeLimitedCache.prototype.count = function () {
    let currentTime = getCurrentTime();
    return Array.from(this.time.keys()).filter(key => this.time.get(key) > currentTime).length;
  };
  
  const timeLimitedCache = new TimeLimitedCache();
  console.log(timeLimitedCache.set(1, 42, 1000)); // false
  console.log(timeLimitedCache.set(1, 50, 100)); // true
  console.log(timeLimitedCache.get(1)); // 50
  console.log(timeLimitedCache.count()); // 1