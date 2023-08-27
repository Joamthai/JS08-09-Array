const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];

const result = [];

// while (alphabets.includes('a')) {
//   const index = alphabets.indexOf('a');
//   result.push(index);
//   alphabets.splice(index, 1, 0);
// }

// for (let index in alphabets) {
//   if (alphabets[index] === 'a') result.push(+index);
// }

alphabets.forEach((char, index) => {
  if (char === 'a') result.push(+index);
});

// alphabets.findIndex((item, index) => {
//   if (item == 'a') result.push(index);
// });

console.log(result);
