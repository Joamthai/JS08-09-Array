const str = 'background-color-white';

const arr = str.split('-');

let result = '';
arr.forEach((word, index) => {
  if (index == 0) {
    result += word;
  } else {
    result += word[0].toUpperCase() + word.slice(1);
  }
});

console.log(result);
