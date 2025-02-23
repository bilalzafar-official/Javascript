console.log("2" > 1)
console.log("02" > 1)

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);


console.log(undefined > 0);
console.log(undefined >= 0);
console.log(undefined == 0);

// 1. Loose Equality (==) vs Strict Equality (===)
console.log(5 == "5");   // true (type coercion)
console.log(5 === "5");  // false (different types)

// 2. Boolean and Number Comparisons
console.log(true == 1);   // true (true becomes 1)
console.log(true === 1);  // false (different types)
console.log(false == 0);  // true (false becomes 0)
console.log(false === 0); // false

// 3. null and undefined Comparisons
console.log(null == undefined);  // true (special rule)
console.log(null === undefined); // false (different types)

// 4. Object Comparisons (reference vs value)
const obj1 = { name: "John" };
const obj2 = { name: "John" };
const obj3 = obj1;

console.log(obj1 == obj2);   // false (different references)
console.log(obj1 === obj2);  // false
console.log(obj1 == obj3);   // true (same reference)
console.log(obj1 === obj3);  // true

// 5. Array Comparisons
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
console.log(arr1 == arr2);   // false (different references)
console.log(arr1 === arr2);  // false

// 6. Special Cases with NaN
console.log(NaN == NaN);   // false (special NaN behavior)
console.log(NaN === NaN);  // false
console.log(isNaN(NaN));   // true (correct way to check)

// 7. String and Number Comparisons
console.log(0 == "");   // true (empty string becomes 0)
console.log(0 === "");  // false
console.log(" " == 0);  // true (space becomes 0)

// 8. Falsy Value Comparisons
console.log(false == "");  // true (both falsy)
console.log(false == []);  // true (array becomes "")
console.log(false == {});  // false (object reference)

// 9. Type Coercion Quirks
console.log("true" == true);  // false ("true" becomes NaN, true becomes 1)
console.log("1" == true);     // true (both become 1)

// 10. Object.is() Method (special comparisons)
console.log(Object.is(0, -0));     // false
console.log(Object.is(NaN, NaN));  // true
