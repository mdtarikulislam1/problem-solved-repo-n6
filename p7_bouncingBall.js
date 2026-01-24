function bouncingBall(h, bounce, window) {
  if (h <= 0 || h <= window) {
    return -1;
  } else if (bounce >= 1 || bounce <= 0) {
    return -1;
  } else {
    let result = 1;
    let height = h;
    while (height > window) {
      if (height * bounce > window) {
        result += 2;
        height = height * bounce;
      } else{
        break
      }
    }
    return result
  }
}

console.log(bouncingBall(5, 0.75, 1));
