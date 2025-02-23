const name = "bilalzafar"
const age = 19

console.log(`my name is ${name} and i am ${age} years old`);

// String Properties and Methods

// 1. length: Returns the length of the string
console.log("Hello".length); // Output: 5

// 2. charAt(index): Returns character at specified index
console.log("Hello".charAt(1)); // Output: 'e'

// 3. charCodeAt(index): Returns Unicode of character at index
console.log("Hello".charCodeAt(1)); // Output: 101

// 4. concat(): Joins two or more strings
console.log("Hello".concat(" World")); // Output: 'Hello World'

// 5. includes(searchValue): Checks if string contains specified value
console.log("Hello".includes("el")); // Output: true

// 6. endsWith(searchValue): Checks if string ends with specified value
console.log("Hello".endsWith("lo")); // Output: true

// 7. indexOf(searchValue): Returns first index of specified value
console.log("Hello".indexOf("l")); // Output: 2

// 8. lastIndexOf(searchValue): Returns last index of specified value
console.log("Hello".lastIndexOf("l")); // Output: 3

// 9. match(regexp): Returns array of matches using regular expression
console.log("Hello".match(/l/g)); // Output: ['l', 'l']

// 10. repeat(count): Returns new string repeated specified times
console.log("Hi".repeat(2)); // Output: 'HiHi'

// 11. replace(searchValue, newValue): Replaces first match of pattern
console.log("Hello".replace("l", "x")); // Output: 'Hexlo'

// 12. replaceAll(searchValue, newValue): Replaces all matches of pattern
console.log("Hello".replaceAll("l", "x")); // Output: 'Hexxo'

// 13. search(regexp): Returns index of first regex match
console.log("Hello".search(/e/)); // Output: 1

// 14. slice(startIndex, endIndex): Extracts section of string
console.log("Hello".slice(1, 3)); // Output: 'el'

// 15. split(separator): Splits string into array of substrings
console.log("Hello World".split(" ")); // Output: ['Hello', 'World']

// 16. startsWith(searchValue): Checks if string starts with specified value
console.log("Hello".startsWith("He")); // Output: true

// 17. substr(startIndex, length): Deprecated. Use slice() instead
console.log("Hello".substr(1, 3)); // Output: 'ell'

// 18. substring(startIndex, endIndex): Similar to slice()
console.log("Hello".substring(1, 3)); // Output: 'el'

// 19. toLowerCase(): Converts to lowercase
console.log("HELLO".toLowerCase()); // Output: 'hello'

// 20. toUpperCase(): Converts to uppercase
console.log("hello".toUpperCase()); // Output: 'HELLO'

// 21. trim(): Removes whitespace from both ends
console.log("  Hello  ".trim()); // Output: 'Hello'

// 22. trimStart(): Removes whitespace from start
console.log("  Hello  ".trimStart()); // Output: 'Hello  '

// 23. trimEnd(): Removes whitespace from end
console.log("  Hello  ".trimEnd()); // Output: '  Hello'

// 24. padStart(targetLength, padString): Pads start of string
console.log("5".padStart(3, "0")); // Output: '005'

// 25. padEnd(targetLength, padString): Pads end of string
console.log("5".padEnd(3, "0")); // Output: '500'

// 26. codePointAt(pos): Returns Unicode code point value
console.log("A".codePointAt(0)); // Output: 65

// 27. fromCodePoint(...codePoints): Returns string from Unicode codes
console.log(String.fromCodePoint(65, 66, 67)); // Output: 'ABC'

// 28. localeCompare(compareString): Compares strings for sorting
console.log("a".localeCompare("b")); // Output: -1 (negative value)

// 29. normalize(form): Returns Unicode normalization form
console.log("café".normalize()); // Output: 'café' (normalized form)

// 30. matchAll(regexp): Returns iterator of all regex matches
const matches = [..."Hello World".matchAll(/[A-Z]/g)];
console.log(matches[0]); // Output: ['H']
