let arr = [];
let input;
let sum = 0;

do {
    input = +prompt("Enter a number");

    if (input == "") {
        arr.push();
    } else if(!isNaN(input)) {
        sum += input;
        arr.push(input);
    } else {
        break;
    }
} while (true);

console.log("Sum of numbers:", sum)
console.log(arr);