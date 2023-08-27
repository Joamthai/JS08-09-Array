const array = [1, 3, 4, 5, 6, 7, 8];

const filterRange = (arr, a, b) => {
  const result = arr.filter((item) => item > a && item < b);
  console.log(result);
};

filterRange(array, 3, 7);
// console.log(array);
