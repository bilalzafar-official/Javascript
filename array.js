 const marvel_heroes = ['thor', "ironman", "hulk"]
 const dc_heroes = ["flash", "batman", "superman"]

//  marvel_heroes.push(dc_heroes)
//  console.log(marvel_heroes);
 
// const new_heroes = marvel_heroes.concat(dc_heroes)
// console.log(new_heroes);


console.log([...dc_heroes,...marvel_heroes]);
// 1. Creating an array
let fruits = ['apple', 'banana'];
console.log('Initial array:', fruits); // Output: ['apple', 'banana']

// 2. push() - Add element(s) to the end
fruits.push('orange');
console.log('After push:', fruits); // Output: ['apple', 'banana', 'orange']

// 3. pop() - Remove last element
let last = fruits.pop();
console.log('Removed:', last); // Output: 'orange'
console.log('After pop:', fruits); // Output: ['apple', 'banana']

// 4. shift() - Remove first element
let first = fruits.shift();
console.log('Removed:', first); // Output: 'apple'
console.log('After shift:', fruits); // Output: ['banana']

// 5. unshift() - Add element(s) to start
fruits.unshift('mango');
console.log('After unshift:', fruits); // Output: ['mango', 'banana']

// 6. concat() - Merge arrays
let veggies = ['carrot', 'potato'];
let combined = fruits.concat(veggies);
console.log('Combined:', combined); // Output: ['mango', 'banana', 'carrot', 'potato']

// 7. join() - Create string from array
let str = combined.join(' - ');
console.log('Joined:', str); // Output: 'mango - banana - carrot - potat'

// 8. slice() - Copy portion of array
let sliced = combined.slice(1, 3);
console.log('Sliced:', sliced); // Output: ['banana', 'carrot']

// 9. splice() - Add/remove elements
let removed = combined.splice(1, 2, 'grape');
console.log('Removed:', removed); // Output: ['banana', 'carrot']
console.log('After splice:', combined); // Output: ['mango', 'grape', 'potato']

// 10. indexOf() - Find element index
console.log('Index of grape:', combined.indexOf('grape')); // Output: 1

// 11. includes() - Check existence
console.log('Includes mango?', combined.includes('mango')); // Output: true

// 12. forEach() - Iterate elements
console.log('forEach:');
combined.forEach(item => console.log(`- ${item}`));
/* Output:
- mango
- grape
- potato
*/

// 13. map() - Create new transformed array
let numbers = [1, 2, 3];
let squares = numbers.map(num => num * num);
console.log('Squares:', squares); // Output: [1, 4, 9]

// 14. filter() - Create filtered array
let filtered = numbers.filter(num => num > 2);
console.log('Filtered:', filtered); // Output: [3]

// 15. reduce() - Accumulate values
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log('Sum:', sum); // Output: 6

// 16. find() - Find first matching element
let found = numbers.find(num => num > 1);
console.log('Found:', found); // Output: 2

// 17. some() - Check if any element matches
let hasEven = numbers.some(num => num % 2 === 0);
console.log('Has even?', hasEven); // Output: true

// 18. every() - Check all elements match
let allEven = numbers.every(num => num % 2 === 0);
console.log('All even?', allEven); // Output: false

// 19. reverse() - Reverse array order
numbers.reverse();
console.log('Reversed:', numbers); // Output: [3, 2, 1]

// 20. sort() - Sort elements
let random = [3, 1, 4, 2];
random.sort();
console.log('Sorted:', random); // Output: [1, 2, 3, 4]

// 21. toString() - Convert to string
console.log('String:', fruits.toString()); // Output: 'mango,banana'

// 22. Array.isArray() - Check if array
console.log('Is array?', Array.isArray(fruits)); // Output: true