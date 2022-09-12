// 1. Explain call(), apply() and, bind() methods. Give an example of call(), apply(), bind()
//Call invokes the function and allows you to pass in arguments one by one.
//OR
//With the call() method, you can write a method that can be used on different objects.
//Eg: 
const person = {
    firstName: "krishna",
    lastName: "pandey",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
person.fullName();

//apply() : With the apply() method, you can write a method that can be used on different objects.
//OR
//Apply invokes the function and allows you to pass in arguments as an array.
//Eg:
const person1 = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const person12 = {
    firstName: "krishna",
    lastName: "pandey"
}

person1.fullName.apply(person12);

//bind() : With the bind() method, an object can borrow a method from another object.
//OR
//Bind returns a new function, allowing you to pass in a this array and any number of arguments.
//Eg:
const person3 = {
    firstName: "rahul",
    lastName: "rawat",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const member = {
    firstName: "rohan",
    lastName: "singh",
}

let fullName = person3.fullName.bind(member);








//2. What are objects in javascript?
/*
In JavaScript, an object is an unordered collection of key-value pairs. Each key-value pair is called a property.
The key of a property can be a `string`. And the value of a property can be any value, e.g., a string, a number, an array, and even a function.
*/
// Eg :
let oneObj = {
    firstName: "krishankant",
    lastName: "nagila",
};









// 3. What are function constructors?
// In JavaScript, a constructor function is used to create objects.
// In the below example, function Person() is an object constructor function.
// To create an object from a constructor function, we use the new keyword.


// constructor function
function Person() {
    this.name = 'piyush',
        this.age = 25,

        this.greet = function () {
            console.log('hello');
        }
}

const persong = new Person();
const person2 = new Person();
console.log(persong.name);
console.log(person2.name);









// 4. Explain prototypes
/*
When a function is created in JavaScript, the JavaScript engine adds a prototype property to the function. This prototype property is an object (called a prototype object) that has a constructor property by default. The constructor property points back to the function on which prototype object is a property. We can access the function’s prototype property using functionName.prototype.
*/

function ptype(firstName, lastName) {
    (this.firstName = firstName),
        (this.lastName = lastName),
        (this.fullName = function () {
            return this.firstName + " " + this.lastName;
        });
}

let personp = new ptype("rahul", "singh");

console.log(personp);








// 5. What is prototype chain
// If a prototype value is changed, then all the new objects will have the changed property value. All the previously created objects will have the previous value.
// constructor function Eg:
function Person() {
    this.name = "Rahul";
}

Person.prototype.age = 23;

const person2p = new Person();

console.log(person2p.age);

Person.prototype = { age: 24 };

const person3p = new Person();

console.log(person3p.age);
console.log(person2p.age);







// 6. Give an example of inheritance using function constructor
//Eg:
function Employee(name, age, gender, id) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.id = id;
};

function Developer(name, age, gender, id, specialization) {

    // Calling Employee constructor function
    Employee.call(this, name, age, gender, id);

    // Adding a new parameter
    this.specialization = specialization;
}

// Creating objects
let Employee1 = new Employee("krishan", 23, "male", 123);
let Developer1 = new Developer("sikha", 21, "female", 345,
    "Frontend Developer");
console.log(Employee1);
console.log(Developer1);







// 7. What are callbacks?
// A callback is a function that you pass into another function as an argument for executing later.
// function
function greeting(name, callback) {
    console.log("Hi" + " " + name);
    callback();
}

// callback function
function callMe() {
    console.log("I am callback function");
}

// passing function as an argument
greeting("dharam", callMe);







// 8. What is the use of setTimeout?
// The setTimeout() method executes a block of code after the specified time. The method executes the code only once.
// program to display a text using setTimeout method
function greeting() {
    console.log("Hello world");
}

setTimeout(greeting, 3000);
console.log("Am the first msg");






//9. what are pure functions?
//A Pure Function is a function that always returns the same result if the same arguments are passed.
//Eg:
function add(a, b) {
    return a + b
}
console.log(add(4, 5)) //9