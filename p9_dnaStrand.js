


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