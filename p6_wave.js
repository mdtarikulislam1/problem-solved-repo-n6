function wave(str) {
  let strarr = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      let arr = str.split("");
      arr[i] = arr[i].toUpperCase();
      let newStr = arr.join("");
      strarr.push(newStr);
    }
  }

  return strarr;
}


console.log(wave("hello"));
