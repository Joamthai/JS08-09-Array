console.log("Learn Array")

// ##### Basic Array #####
// Array Literal
// Element : members
const friends = ['Money', 'Non', 'Peakpoon', 'Fon' ];

// Array Constructor
const height = new Array(150, 160, 175);
console.log(height);

// ##### Access, Modify, Add, Delete#####
// Bracket Notation with Index

// Access
console.log(friends[0]); // Money
console.log(friends[2]); // Peakpoon
console.log(friends[-1]); // undefined
console.log(friends[10]); // undefined

// Update
friends[0] = 'Gold';
console.log(friends[0]); // Gold

friends[1] = 'Michael';
console.log(friends[1]); // Michael

// ถ้าพยายามอัพเดทใน index ทีไม่มีอยู่ === add
// friends[-1] = 'Pavit';
// console.log(friends); // ['Gold', 'Michael', 'Peakpoon', 'Fon', -1: 'Pavit']
// console.log(friends[-1]); // Pavit

// Add
console.log(friends[3]); // Fon
friends[4] = 'Git'; 
console.log(friends[4]); // Git

// Delete
delete friends[2];
console.log(friends); // ['Gold', 'Michael', empty, 'Fon', 'Git', -1: 'Pavit']
console.log(friends[2]); // undefined

// <arr>.length
console.log(friends.length); // 5

friends[friends.length] = 'Mix'; // จะต่อท้ายให้อัตโนมัติ
console.log(friends); // ['Gold', 'Michael', empty, 'Fon', 'Git', 'Mix']
console.log(friends.length); // 6

for (let i = 0; i < friends.length; i++) {
    console.log(i, friends[i]);
}

// Method CRUD Element
const animals = ['Spider', 'Cat', 'Elephant'];

// Immutable : ไม่เปลี่ยนแปลงค่า (ถ้าจะเปลี่ยนต้องเขียนทับ)
// Mutable : เปลี่ยนแปลงค่าได้

// Method Push ทำให้ Array Mutate
let pu = animals.push('Dog');
console.log(animals); // ['Spider', 'Cat', 'Elephant', 'Dog']
console.log(pu); // Method Push return <arr>.length === 4

// Method Unshift 
let us = animals.unshift('Snake', 'Mt.Bird'); 
console.log(animals); //['Snake', 'Mt.Bird', 'Spider', 'Cat', 'Elephant', 'Dog']
console.log(us); // 6 (return ความยาว เพราะรู้อยู่แล้วว่า push ค่าอะไรเข้าไป)

// Method Pop
let po = animals.pop();
console.log(animals); // ['Snake', 'Mt.Bird', 'Spider', 'Cat', 'Elephant']
console.log(po) // Dog (return value เผื่อจะนำไปใช้ต่อ)

// Method Shift
let sh = animals.shift();
console.log(animals); // ['Mt.Bird', 'Spider', 'Cat', 'Elephant']
console.log(sh); // Snake

// __________________________________________________________ //

// ##### Loop #####

// for loop
// Imperative กำหนด i เอง
for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i]);
}

// for...in
// มอง array เป็น object <key>:<value> == <index>:<value>
// ไม่ต้องกำหนด i เอง
// สนใจ index เป็นหลัก
for(let index in animals) {
    console.log(index, animals[index]);
}

// for...of
// จะสนใจ element เป็นหลัก
for(let element of animals) {
    console.log(element);
}

// Aside Topic : Higher Order Function
// EX.1
// Main FN
// cook : Higher Order Function (ฟังก์ชันที่รับฟังก์ชันเป็น parameter)
// fn1, fn2, fn3 : callback
function cook(fn1, fn2, fn3) {
    fn1();
    fn2();
    fn3();
};

function step1() {
    console.log('1.Prepare ingredient')
};
function step2() {
    console.log('2.Cooking')
};
function step3() {
    console.log('3.Serve')
};

cook(step1, step2, step3); // 1.Prepare ingredient 2.Cooking 3.Serve


// EX.2
function add(x, y) {
    return x + y;
}
console.log(add(5, 6)); // 11

// Function Expression : FN as a value
// const a = console.log;
// const b = alert;
// a('Hi');
// b("Hello")

// สร้าง function รับ parameter เป็น function
function addAndShow(x, y, fn) {
    let result = x + y;
    fn(`result is : ${result}`);
    return result;
}

function show(a) {
    console.log(a);
}

addAndShow(5, 10, show); // result is : 15



// forEach
const items = ['Football', 'Bag', 'Dish'];

// <array>.forEach(FN) syntax
// array == Caller
// Higher order FN == forEach (รับ parameter เป็น FN)

// items.forEach( function() {} )
items.forEach(function () {
    console.log('Hi') // Hi * 3 (จะ run ต้องจำนวน element)
});

const myFunc = function () {
    console.log('Hi') // Hi * 3 (จะ run ต้องจำนวน element)
};

items.forEach(myFunc) // Hi * 3

// function iterateFn(a) {
//     console.log(a);
// }

// const iterateFn = (items, index, array) => console.log(index, items)
const iterateFn = a => console.log(a);

items.forEach(iterateFn); // Football, Bag, Dish 
// 1st Loop : ("Football") => console.log("Football")
// 2nd Loop : ("Bag") => console.log("Bag")
// 3rd Loop : ("Dish") => console.log("Dish")

items.forEach((a, b, c) => {
    console.log(`At index ${b}, element = ${a}`)
})

function myForEach(fn) {

    for(let i = 0; i < 5; i++){
        fn('random')
    }
}

myForEach((a) => console.log(a))

let a = {};
const b = 100;

a[b]= b
// Object.assign(a, b)

console.log(a)