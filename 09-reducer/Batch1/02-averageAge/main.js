let john = { name: 'John', age: 27 };
let jo = { name: 'Jo', age: 21 };
let jin = { name: 'Jin', age: 25 };

let arr = [john, jo, jin];

function getAverageAge(arr) {
  let sumAge = arr.reduce((sum, item) => sum + item.age, 0);
  let avgAge = sumAge / arr.length;
  return avgAge;
}

console.log(getAverageAge(arr)); // (27 + 21 + 25) / 3 = 24.33
