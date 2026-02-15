function isPangram(string) {
  const strToArr = string.toUpperCase().split("");
  const removeDuplicate = [...new Set(strToArr)]
    .join("")
    .replace(/[^a-zA-Z]/g, "").length;

  return removeDuplicate === 26;
}

// console.log(isPangram("DDdsfd"));

// better solution 
function isPangram(string) {
  const letters = new Set();
  for (let char of string.toLowerCase()) {
    if (char >= "a" && char <= "z") {
      letters.add(char);
      if (letters.size === 26) return true;
    }
   console.log(letters)

  }
 
  return false
}

console.log(isPangram("sdf dg d"))
