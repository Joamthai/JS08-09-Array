let flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
];

let newArr = flattened.reduce((acc, item) => {
  // return [...acc,...item]

  //   acc.push(item[0]);
  //   acc.push(item[1]);
  //   return acc;

  for (let value of item) {
    acc.push(value);
  }
  return acc;
}, []);

console.log(newArr);
