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

// default parameters

function intrest(p, r = 5, t = 3) {
    return p * r * t / 100;
};
console.log(intrest(1000, 4));
//getter shetter

// getter to access the value
// shtter to update or manipulate the value
let person = {
    firstname: 'adarsh',
    lastname: ' tiwari',
    get fullname() {
        return `${person.firstname} ${person.lastname}`;



    },

    // Set fullname(value) {
    //     let parts = value.split('');
    //     this.firstname = parts[0];
    //     this.lastname = parts[1];

    // }
};
// console.log(fullname());



//try and catch blog
try {
    person.fullname = avdesh;


} catch (e) {
    alert("this is not proper input")
}