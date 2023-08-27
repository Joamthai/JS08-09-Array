const nums = [7, 9, -5, -1, 0, 3];

const negativeNums = element => element < 0;

console.log(nums.find(negativeNums)) // -5