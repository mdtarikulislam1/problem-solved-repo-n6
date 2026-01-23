function findNb(m) {
  let sum = 0;
 
  for (let i = 1; i <= m; i++) {
    sum += i ** 3;
    if (sum <= m) {
      if (sum === m) {
        return i;
      }
    } else {
      return -1;
      
    }
  }
}

console.log(findNb(1071225));
