function evil(fn) {
    return new Function('return ' + fn)();
  }
  console.log( evil('12/5*9+9.4*2') );