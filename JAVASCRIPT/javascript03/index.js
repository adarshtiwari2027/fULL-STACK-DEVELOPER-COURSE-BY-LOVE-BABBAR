console.log('hello ji');
let lastname = 'tiwari';
let firstname = new String('adarsh');

let message =
    `this is 
    my furst 
    message from ${lastname} `;

// let word = message.split(' ');
// console.log(word);
console.log(message);

// date and time topic 
let date = new Date();
console.log(date);
// scenad methode 
let date2 = new Date('september 13 2003 1:15');
console.log(date2);
// third methode 
let date3 = new Date(1998, 6, 22, 7, 23, 45);
console.log(date3);
// fourth methode 
let date4 = new Date();
console.log(date4);



// Array  topic full
let numbers = [2, 3, 4, 5, 6, 7];
console.log(numbers);
//rewrite the no by its podition accor to index no
numbers[0] = 23;
console.log(numbers);
// insert in beging 
numbers.unshift(34);
console.log(numbers);

// insert in end 
numbers.push(9);
console.log(numbers);
// middle or desired positon
numbers.splice(3, 'k', 'e', 'b', 'c ');
console.log(numbers);


// seraching
let n = numbers.length;
// a practice appor with loop
// console.log(numbers.indexOf('b'));
// for (let i = 0; i < n; i++) {
//     if (numbers.indexOf(i) != -1)
//         console.log('present');
//     else console.log('absent');
// }


// ab refrences ke upar used karenge searching
let course = [
    { no: 1, naam: 'adarsh' }, { no: 2, naam: 'tiwari' }
];
console.log(course);
console.log(course.indexOf({ no: 1, naam: 'adarsh' }));

// call back

// function to search the

// function
// let course1 = course.find(function(course) {
//     return course.naam === 'tiwari';
// })
// console.log(course1);

// ARROW FUNCTION 
//let course1 = course.find(course1 => course.naam === 'adarsh'; console.log(course1);

// removing the element from array

let numbers2 = [3, 4, 5, 6, 7];
//form end deletion
numbers2.pop();
console.log(numbers2);
// deletion from beging
numbers2.shift();
console.log(numbers2);

// middle deleation
numbers2.splice(1, 1);
console.log(numbers2);

// emptying the array 
// let number3 = [2, 3, 4, 5, 6, 7, 8, 9, 109, 11, 22];
// // numbers3 = [];
// // splice methode 
// number3.splice(0, number3.length);
// console.log(numbers3);

// combination of array 
let first = [1, 2, 3, 4];
let secand = [5, 6, 7, 8];
let combined = first + secand;
console.log("= ", combined);
// methode 2
let combined2 = first.concat(secand);
console.log(combined2);
// slice methode 

let sliced = combined2.slice(2, 5);
console.log(sliced);

// combining inn object 
// var object1 = {
//     1: 'one',
//     2: 'two',
//     3: 'three',
// };
// var object2 = {
//     4: 'four',
//     5: 'five',
//     6: 'six'
// };

// let com = [...object1, ...object2]
// console.log(com);


// ITERING OVER ARRAY
let arr = [2, 4, 5, 3, 2, 5, 6, "end"];
// for of loop
for (let value of arr) {
    console.log(value);
};

// for each methode 
arr.pop();
arr.reverse();
arr.forEach(number => console.log(number));

// joining array
let arr1 = [1, 2, 3, 4, 5];
const joined = arr1.join(',');
console.log(joined);
// sorting methode
let sorted = arr1.sort();
console.log(sorted);

//filtering methode
let filterd = [2, 4, -4, 5, -1];
let af = filterd.filter(function(value) {
    return value >= 0;
});
console.log(af);

// mapping methode 
let arr2 = [2, 4, 3, 5, 6, 7, 8];
let maped = arr2.map(function(value) {
    return 'student_no  ' + value;
});
console.log(maped);

// mapping with object
let item = arr2.map(function(num) {
    return { value: num };
});
console.log(item);