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
    lastname: 'tiwari',
    get fullname1() {
        return `${person.firstname} ${person.lastname}`;



    },
    set fullname1(value){
        if (typeof value !=String){
            throw new error("you have not send a string");
            
        }
        let parts= value.split(' ');
        this.firstname =parts[0];
        this.lastname= parts[1];

    }
};
// console.log(fullname());



// //try and catch blog
// try {
//     person.fullname1 = true;


// } 
// catch (e) {
//     alert(e);
// }

// console.log(person.fullname1);

// scopr variable  ..
{
    let a=5;
    console.log(a);
}
// console.log(a);

 for(var i=0 ; i<10 ;i++){
    console.log(i);

 }
//  console.log(i);


// reducing an array
 let a =[1,3,4,5];
 let total =0;
 for(let value of a)
    total=total +value;
console.log(total);
// methode 2
a.reduce((accumaltor ,currentvalue)=>ccumaltor+currentvalue,0);