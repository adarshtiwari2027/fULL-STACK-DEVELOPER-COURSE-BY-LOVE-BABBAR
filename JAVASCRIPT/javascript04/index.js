console.log("HELLO");
run();

function run() {
    console.log('running');
}
// fuinction call or revoke
run();
//scend methode function  assingments
let stand = function walk() {
    console.log('walking');
}
stand();

// arguments  map and form a object form..

// function sum(a, b) {
//     console.log(arguments);
//     return a + b;
// }
// let ans = sum(2, 4, 6, 7, 8);
// console.log(ans);


// we can add all paramenter in sum add them by using a arguments ....
function sum(a, b) {
    // console.log(arguments);
    let total = 0;
    for (let vaule of arguments)
        total = total + vaule;
    return total;
}
let ans = sum(2, 4, 6, 7, 8);
console.log(ans);
// hellow everyone
//nknkKDNXKN


//AKDXLADXLAHUX