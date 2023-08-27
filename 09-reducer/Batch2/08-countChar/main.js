let str = 'I live in Thailand';
console.log(str.split(' '));
let sliptStr = str.toLowerCase().split('');
console.log(sliptStr); //['i', ' ', 'l', 'i', 'v', 'e', ' ', 'i', 'n', ' ', 't', 'h', 'a', 'i', 'l', 'a', 'n', 'd']
let newStr = sliptStr.filter((char) => char !== ' ');
console.log(newStr);

const countChar = newStr.reduce((acc, item) => {
  if (acc[item]) {
    acc[item]++;
  } else {
    acc[item] = 1;
  }
  return acc;
}, []);

console.log(countChar);
