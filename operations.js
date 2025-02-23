console.log("1" + 2 +2)
console.log(1 + "2" +2)
console.log(1 + 2 + "2" )

let gameCounter = 100
gameCounter++
++gameCounter

console.log(gameCounter);


// Arithmetic Operations
console.log('--- Arithmetic Operations ---');
console.log(10 + 5);        // Addition: 15
console.log(10 - 5);        // Subtraction: 5
console.log(10 * 5);        // Multiplication: 50
console.log(10 / 5);        // Division: 2
console.log(10 % 3);        // Modulus (remainder): 1
console.log(2 ** 3);        // Exponentiation: 8

let x = 5;
console.log(x++);           // Post-increment: 5 (returns value before increment)
console.log(x);             // Now shows 6
console.log(++x);           // Pre-increment: 7 (returns value after increment)

// Assignment Operations
console.log('\n--- Assignment Operations ---');
let y = 10;
y += 5;                     // y = y + 5
console.log(y);             // 15

y -= 3;                     // y = y - 3
console.log(y);             // 12

y *= 2;                     // y = y * 2
console.log(y);             // 24

y /= 4;                     // y = y / 4
console.log(y);             // 6

// Comparison Operations
console.log('\n--- Comparison Operations ---');
console.log(5 == '5');      // Loose equality (type coercion): true
console.log(5 === '5');     // Strict equality: false
console.log(5 != '5');      // Loose inequality: false
console.log(5 !== '5');     // Strict inequality: true
console.log(10 > 5);        // Greater than: true
console.log(10 <= 10);      // Less than or equal: true

// Logical Operations
console.log('\n--- Logical Operations ---');
console.log(true && false); // AND: false
console.log(true || false); // OR: true
console.log(!true);         // NOT: false

// Ternary Operator
console.log('\n--- Ternary Operator ---');
const age = 18;
console.log(age >= 18 ? 'Adult' : 'Minor'); // 'Adult'

// String Operations
console.log('\n--- String Operations ---');
console.log('Hello' + ' ' + 'World');       // Concatenation: 'Hello World'
console.log('5' + 3);                       // Type coercion: '53'