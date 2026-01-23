const capitalize = (str) => {
  const splitstr = str.split("");
  let count = 0;

  for (let i = 0; i < splitstr.length; i++) {
    if (splitstr[i] !== " ") {
      count += 1;
      if (count % 2 === 1) {
        splitstr[i] = splitstr[i].toUpperCase();
      }
    }
  }

  return splitstr.join("");
};

console.log(capitalize("hello in the"));
