let arr = [3.24, 2.78, 3.86, 1.37, 0.52];

// let test = arr.splice(2, 0, 1.11);
console.log(arr);

// let test2 = arr.findIndex((element) => element <= 3.86);
// console.log(test2);

const descendingArr = arr.reduce((acc, item) => {
  const insertIndex = acc.findIndex((element) => element <= item);
  if (insertIndex === -1) {
    acc.push(item);
  } else {
    acc.splice(insertIndex, 0, item);
  }
  return acc;
}, []);

console.log(descendingArr);
