if (!Object.is) {
  Object.is = (x, y) => {
    if (x === y) {
      return x === y;
    }
  };
}

console.log((Object.is('one', 'two')));