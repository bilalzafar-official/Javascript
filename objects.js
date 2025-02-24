// Singleton object
// Object.create =

// Object literal

let symbol = Symbol("key1")

 const user = {
    name : "bila",
    "full name" : "bilal zafar",
    email : "@gmail.com",
    password : 1234567,
    [symbol] : "key2",
    greeting : function () {
        console.log(`hello ${this.name}`);
        
    }
 }

 console.log(user.name);
 console.log(user["full name"]);
 console.log(user[symbol]);
 console.log(user.greeting())

 user.name = "ahmad"
 console.log(user.name);

 Object.freeze=user

//  user.password=1234
//  console.log(user.password);
 
