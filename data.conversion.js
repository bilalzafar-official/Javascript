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


// Primitive values
let str = "123";
let num = 456;
let boolTrue = true;
let boolFalse = false;
let nullVal = null;
let undefinedVal; // remains undefined
let bigIntVal = BigInt(9007199254740991);
let symbolVal = Symbol("unique");

// Converting string to number
let strToNum = Number(str);
console.log(strToNum, typeof strToNum);  // Output: 123 "number"

// Converting number to string
let numToStr = String(num);
console.log(numToStr, typeof numToStr);  // Output: "456" "string"

// Converting boolean to string
let boolToStr = String(boolTrue);
console.log(boolToStr, typeof boolToStr);  // Output: "true" "string"

// Converting number to boolean (non-zero numbers are true)
let numToBool = Boolean(num);
console.log(numToBool, typeof numToBool);  // Output: true "boolean"

// Converting string to boolean (non-empty strings are true)
let strToBool = Boolean(str);
console.log(strToBool, typeof strToBool);  // Output: true "boolean"

// Checking null and undefined conversions to boolean
console.log(Boolean(nullVal), typeof nullVal);       // Output: false "object"
// Note: typeof null returns "object", which is a historical quirk.
console.log(Boolean(undefinedVal), typeof undefinedVal); // Output: false "undefined"

// Converting BigInt (remains bigint)
console.log(bigIntVal, typeof bigIntVal);  // Output: 9007199254740991n "bigint"

// Checking symbol type (cannot be converted to number or string directly)
console.log(symbolVal, typeof symbolVal);  // Output: Symbol(unique) "symbol"

// Working with objects
let obj = { a: 1, b: "hello" };
// Convert object to JSON string
let objToStr = JSON.stringify(obj);
console.log(objToStr, typeof objToStr);  // Output: "{"a":1,"b":"hello"}" "string"
// Convert back to object
let strToObj = JSON.parse(objToStr);
console.log(strToObj, typeof strToObj);  // Output: { a: 1, b: "hello" } "object"

// Arrays
let arr = [1, 2, 3];
// Convert array to string (elements joined by commas)
let arrToStr = arr.toString();
console.log(arrToStr, typeof arrToStr);  // Output: "1,2,3" "string"

// Also note: Arrays are objects in JS
console.log(arr, typeof arr);  // Output: [1, 2, 3] "object"
