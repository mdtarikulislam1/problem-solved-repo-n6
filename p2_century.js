function century(year) {
  let result
  if(year % 100 === 0){
    result = year / 100
  } else{
    result = ((year / 100) + 1)
  }

  return Number(Math.floor(result))
}

console.log(century(1705))
