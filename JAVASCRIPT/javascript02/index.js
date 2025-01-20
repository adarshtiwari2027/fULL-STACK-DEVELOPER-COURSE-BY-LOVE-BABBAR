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
function Rectangle(len, bre, ) {
    this.length = len;
    this.breadth = bre;
    this.draw = function() {
        console.log('drawing')
    }
}

//object created using constructur..
let rectangleobject = new Rectangle(4, 6, );
// add property later if function is created ...
rectangleobject.height = 5;
console.log(rectangleobject);
//delete after function is creted
delete rectangleobject.length;
console.log(rectangleobject);