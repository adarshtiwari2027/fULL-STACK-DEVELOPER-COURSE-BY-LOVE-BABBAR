// console.log('hello ji')
//     // object creation

// //factory function

// function createRectangle(len, bre) {

//     let rectangle = {
//         length: len,
//         breadth: bre,
//         draw: function() {
//             console.log('draw rectangle');
//         }
//     };
//     return rectangle;
// }

// let object1 = createRectangle(5, 4);
// let object2 = createRectangle(3, 6);
// constructer function ''' pastcle notation in which firct word of every key is capital
function Rectangle(length, breadth) {
    this.length = length;
    this.breadth = breadth;
    this.draw = function() {
        console.log("drawing");
    };
}

//object created using constructur..
let rectangleobject = new Rectangle(4, 6);
// add property later if function is created ...
rectangleobject.height = 5;
console.log(rectangleobject);
//delete after function is creted
//delete rectangleobject.length;
console.log(rectangleobject);

// // constructer property...
// let Rectangle1 = new Function(
//     'length', 'breadth',
//     this.length = length; this.breadth = breadth; this.draw = function() {
//         console.log('drawing');

//     }
// );
// let rect = new Rectangle1(3, 2);
// console.log(rect);
// //

//types in javascript
let a = 10;
let b = a;
a++;
console.log(a);
console.log(b);
let a1 = {
    value: 10,
};
let b1 = a1;
a1.value++;
console.log(a1);
console.log(b1);

let c = 10;

function increase(value) {
    c += 2;
}
increase(c);
console.log("now the vale is ", c);

//
let rectangle = {
    length: 10,
    breadth: 10,
};
// For in loop  used
for (let keys in rectangle) {
    // keys are reflected through keys
    // value are reflected through rectangele[keys]
    console.log(keys, rectangle[keys]);
}

// for of loop iterattion used in program
for (let keys of Object.keys(rectangle)) {
    console.log(keys, rectangle[keys]);
}
// for of loop iterattion used in program
for (let keys of Object.entries(rectangle)) {
    console.log(keys, rectangle[keys]);
}
if ("colour" in rectangle) {
    console.log("present");
} else {
    console.log("absent");
}

// cloning the obejct through itertion
let rectangle2 = {};
for (let keys in rectangle) {
    rectangle2[keys] = rectangle[keys];
}
console.log(rectangle2.breadth);

let src = {
    ram: 10,
    shyam: 5,
};
// assign methode to clone

let disten = Object.assign({}, src);
console.log(disten);
// spread methode
let rekha = {...src };
console.log(rekha);