let arr = ['React', 'Vue', 'Angular'];
let newArr = [];

const copySorted = (array) => {
  newArr = newArr.concat(array);
  return newArr.sort((a, b) => (a < b ? -1 : 1));
};

let sorted = copySorted(arr);
console.log(sorted);
console.log(arr);
