if (!Object.is) {
  Object.is = function (x, y) {
    if (x === y) {
      // Handle +0 and -0 equality
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Handle NaN equality
      return x !== x && y !== y;
    }
  };
}

// Example usage
console.log(Object.is(5, 5));         // true
console.log(Object.is('foo', 'foo')); // true
console.log(Object.is({}, {}));       // false

console.log(Object.is(-0, 0));         // false
console.log(Object.is(NaN, NaN));      // true
