const letter = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function alphabetPosition(text) {
  const small = text.toLowerCase();
  const splitText = small.split("");
  const filteredArray = splitText.filter(element => element.trim() && letter.includes(element))

  let result = []

  for(let i = 0; i<filteredArray.length; i++){
        let arr = filteredArray[i]
        result.push(letter.indexOf(arr) + 1)
  }
  return result.join(" ")
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));


