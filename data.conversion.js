let score  = "123"

console.log(typeof score);


let numerScore = Number(score)

console.log(typeof numerScore);

/*
      conversion

      "33" =>  33
      "33abc" => NaN
      null => 0
      undefined => NaN
      true => 1
      false => 0

*/

let bolean = 1
let numberBolean = Boolean(bolean)
console.log(numberBolean);

let bolean1 = ""
let numberBolean2 = Boolean(bolean1)
console.log(numberBolean2);
