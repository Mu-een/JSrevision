// =====Math method=====
// console.log("sqrt():", Math.sqrt(4));

// let data = [9, 3, 1, "Peter", 5, 10];
// let size = data.length -1;
// console.log("Array size:", size);
// console.log("Element",data[size]);
// shortcut to get last element
// console.log("at():", data.at(-1));

// return a middle element(s)
// let middleIndex = Math.trunc((data.length - 1)/ 2);
// console.log("middleIndex:", middleIndex);
// console.log("middle element:", data.slice(middleIndex, middleIndex +2));

// checking if array size is odd/even number
// if array size is odd number make use of slice
// if condition is false make use of the else statement
// let middleIndex = Math.trunc((data.length - 1)/ 2);
// if(data.length % 2 == 0) {
//     console.log(data.slice(middleIndex, middleIndex +2));
// }else {
//     console.log(data[middleIndex]);
// }

// remove element from array (have to remove the string in array to get max element)
// data.splice(3, 1);
// 2nd approach to remove string (if you have multiple strings)
// let onlyNumbers = data.filter(item => {
//     if(typeof item != 'string')
//         return item;
// })
// console.log("max:", Math.max(...onlyNumbers));
// retrieve biggest element in array
// console.log("Max:", Math.max(...data));


// ====string method====
// let sentence = "I love programming";
// return an array of characters
// console.log(sentence.split(''));
// return an array of word
// console.log(sentence.split(' '));


// ====date method====
// let myDate = new Date();
// console.log("My date:", myDate);
// use another date
// let myDate = new Date("2022/11/28");
// console.log("My date:", myDate);
// retrieve just the date
// console.log("My date:", myDate.toLocaleDateString());


// ====if statement====
// let age = 17
// if(age > 17){
//     console.log("You're qualified");
// }else {
//     console.log("You're not qualified");
// }


// ====nested if statement====
// outer if statement must be true to run other if statement
// let age = 18;
// let salary = 5000;
// if(age > 17){
//     if(salary >= 5000) {
//         console.log("Well done");
//     }else {
//         console.log("Present 2nd payslip")
//     }
// }else {
//     console.log("You're not qualified");
// }

// joel likes this way(correct way)
// if(age > 17 && salary >= 5000){
//     console.log("well done");
// }else {
//     console.log("thank you for coming");
// }


// ====switch statement====
// let monthInt = 1;
// switch(monthInt) {
//     case 1:
//         console.log("January");
//     break;
//     case 2:
//         console.log("February");
//     break;
// }

// let grade = -5;
// switch(true) {
//     case grade == 100:
//         console.log("You're awesome");
//     break;
//     case (grade >= 90) && (grade <= 99):
//         console.log("Well done");
//     break;
//     case (grade >= 75) && (grade <= 89):
//         console.log("Distinction");
//     break;
//     case (grade >= 50) && (grade <= 74):
//         console.log("Pass");
//     break;
//     case (grade <= 49) && (Math.sign(grade) != -1):
//         console.log("Fail");
//     break;
//     default:
//         console.log("Out of range");
// }


// =====loops=====
// for in - reads the properties/index
// in this case its going to display the index
// let numbers = [8, 9, 3, 12, 34];
// for(let numb in numbers) {
//     console.log(numb);
// }
// console.table(numbers);

// let people = {
//     name: 'Cassidy',
//     surname: 'Lawrence',
//     email: 'cassidy@gmail.com'
// }

// for (let p in people) {
//     console.log(`${p} => ${people[p]}`);
// }

// for of - display the elements/content of array
// want to read the elements in array make us of for of loop
// for (let numb of numbers) {
//     console.log(numb);
// }

// never use for of for reading object

// infinity loop - when you want to loop something until a certain action takes place
// for(let i = 0;;) {
//     console.log('let find out');
// }

// while loop - to repeat a specific block of code an unknown number of times, until a condition is met.
// let cnt = 0;
// while(cnt < 10) {
//     console.log(`Step: ${cnt}`);
//     cnt++;
// }

// let cnt = 0;
// let numbers = [8, 9, 3, 12, 34];
// while(cnt < numbers.length) {
//     console.log(`Step: ${numbers[cnt]}`);
//     cnt++;
// }

// do while loop - defines a code block to be executed once, and repeated as long as a condition is true .
// let cnt = 0
// let numbers = [8, 9, 3, 12, 34];
// do{
//     console.log(`Step: ${numbers[cnt]}`);
//     cnt++;
// }while(cnt < numbers.length);


// ====functions====
// to use a block of code as many times as you want
// a function is limited to what values you put in unless you use parameters
// function addition(numb1, numb2){
//     console.log('Sum is:', numb1 + numb2);
// }
// addition(5,5);
// addition(7,5);


// using a variable and arrow function
// let addition = (numb1,numb2) => {
//     console.log('Sum:', numb1 + numb2);
// }
// addition(5,5);

// function subtraction (numb1 , numb2){
//     return numb1 - numb2;
// }
// console.log(subtraction(10 , 4));

// arrow
// ((numb1,numb2)=>{
//     console.log(numb1 + numb2)
// })(8,2);


// ====ternary operator====
// shortcut for if statement
// ? - if statement is true display ... 
// : - if statement is false display ...
// let age = 17;
// console.log(age >= 17 ? "Qualified" : "Not Qualified");


// ====rest operator====
// 1 + 2 = 3
// 3 + 3 = 6
// display 6
// function sumOf(...args){
//     return args.reduce( (a, b)=>{
//         return a + b
//     })
// }
// console.log(sumOf(1,2,3));


// ====constructor function====
// using rest operator
// [] - only allows positive numbers
// function Person(...details){
//     this.firstName = details[0];
//     this.lastName = details[1];
//     this.email = details.at(-1);
// }
// let person1 = new Person('Peter', 'Henk', 'peter@gmail.com')
// console.log(person1);


// ====constructor function exercise=====
// 1. Please create a constructor function called PersonDetails that will take the following parameters:
// firstName, lastName, email
// store the values of the arguments to the constructor properties.
// 2. Create a getter and setter for each properties including a display method that will display the person details
// 3. Create an instance called person1 from a constructor function
// 4. Call a display method (Only)

// function PersonDetails(firstName, lastName, 
//     email) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;

//     this.getFirstName = ()=> {
//         return this.firstName
//     }
//     this.setFirstName = (value) =>{
//         this.firstName = value;
//     }
//     this.getLastName = ()=> {
//         return this.lastName
//     }
//     this.setLastName = (value) =>{
//         this.lastName = value;
//     }
//     this.getEmail = ()=> {
//         return this.email
//     }
//     this.setEmail = (value) =>{
//         this.email = value;
//     }    
    
//     this.display = ()=> {
//         return `
//         Name: ${this.getFirstName()}
//         Surname: ${this.getLastName()}
//         Email: ${this.getEmail()}`;
//     }
// } 
// let person1 = new PersonDetails("Peter", "Henk",
// "peter@gmail.com");
// console.log(person1.display());
// console.log("=============");
// person1.setFirstName("Sarah");
// person1.setLastName("James");
// person1.setEmail("sarah@gmail.com");
// console.log(person1.display());

// Solution 2 (using a class)
// class PersonDetails {
    // private
    // #firstName;
    // #lastName;
    // #email;
    // constructor(firstName, lastName, email){
    //     this.#firstName = firstName;
    //     this.#lastName = lastName;
    //     this.#email = email;
    // }
    // first name
    // get firstName() {
    //     return this.#firstName;
    // }
    // set firstName(value) {
    //     this.#firstName = value;
    // }
    // last name
    // get lastName() {
    //     return this.#lastName;
    // }
    // set lastName(value) {
    //     this.#lastName = value;
    // }
    // email
    // get email() {
    //     return this.#email;
    // }
    // set email(value) {
    //     this.#email = value;
    // }
     // Display
//      display() {
//         console.log(`
//         Name: ${this.firstName}
//         Surname: ${this.lastName}
//         Email: ${this.email}`);
//     }
// }
// let person1 = new PersonDetails("Joel", "Mukanya", "joel@gmail.com");
// person1.display();
// console.log("===========");
// person1.firstName = "Peter";
// person1.lastName = "Henk";
// person1.email = "peter@gmail.com"
// person1.display();


// ====onclick====
// function addition(e){
//     e.preventDefault();
//     let numb1 = document.querySelector('#numb1').value;
//     let numb2 = document.querySelector('#numb2').value;
//     // document.querySelector('#output').innerText = eval(`${numb1} + ${numb2}`);
//     document.querySelector('#output').innerText = parseInt(numb1) + parseInt(numb2);

// }


// ===addEventListener===
// doesn't use onclick
let btnAddition = document.querySelector('button')
btnAddition = document.addEventListener('click',(e)=>{
    e.preventDefault();
    let numb1 = document.querySelector('#numb1').value;
    let numb2 = document.querySelector('#numb2').value;
    document.querySelector('#output').innerText = parseInt(numb1) + parseInt(numb2);
})