// function dnaStrand(dna) {
//   let result = [];
//   const strtoarr = dna.split("");

//   for (let i = 0; i < strtoarr.length; i++) {
//     if (strtoarr[i] === "A") result.push("T");
//     else if (strtoarr[i] === "T") result.push("A");
//     else if (strtoarr[i] === "C") result.push("G");
//     else if (strtoarr[i] === "G") result.push("C");
//   }
//   return result.join("");
// }

// console.log(dnaStrand("ATTGC"));

// another and best solution


// function dnaStrand(dna) {
//   let result = dna.replace(/./g,function(e){
//     return dnaStrand.pair[e]
//   })
//   return result
// }

//  dnaStrand.pair = {
//   A: "T",
//   T: "A",
//   C: "G",
//   G: "C",
// };

// console.log(dnaStrand("ATTGC"));


const pair = {
  A: "T",
  T: "A",
  C: "G",
  G: "C",
};

function dnaStrand(dna) {
 let result = []
 const strtoarr = dna.split("")
 for(let i = 0; i<strtoarr.length; i++){
     result.push(pair[strtoarr[i]])
 }
 return result.join("")
}



console.log(dnaStrand("ATTGC"));