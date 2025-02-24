
function addNums(num1, num2) {
    return result = num1 + num2;
}

// console.log(addNums(5,5)) // 10

function concat(...nums) {
    return result = nums
}

// console.log([100, 200, 300, 400]) // 100, 200, 300, 400;

// const user = {
//     name: 'John',
//     age: 30
// }

function object({ name, age }) {
    // console.log(`My name is ${name} and I am ${age} years old`);
}

object({
    name: 'ali',
    age: 30
});

var c = 300
if (true) {
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a) // 10
// console.log(b) // 20
// console.log(c) // 30;


addone(5)
function addone(num) {
    return num + 1
}

const addtwo= function(num) {
    return num + 1
}
addtwo(5)


if (true) {
    const user="bilal"
    if (true) {
     const   website = "youtube"
     console.log(user + " is a developer and he has a website called " + website);
     
    }
    // console.log(website)
}
///   Note :>  this means that this is only used for object and it is used to access the object properties and methods

const user1 = {
    name: 'John',
    age: 30,
    greeting :function () {
        console.log(`My name is ${this.name} and I am ${this.age} years old`);
        
    }

}

user1.greeting()

user1.name= 'ahmad'
user1.greeting()

function name() {
    const user = "ali"

    // console.log(`${this.user} is a developer`);
    
}

//Note  :> this is not used in function and cannot acces its properties  


// IEFE Function
  // named iefe function
(function  add () {
    console.log('Hello World');
    
})();

// when two iefe function are called then comma is used to separate them otherwise gievs error

 
 ( ()=>{
    console.log('Hello World');
 })();

 