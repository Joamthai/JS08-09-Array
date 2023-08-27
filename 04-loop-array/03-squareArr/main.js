const arr = [2, 3, 5, 7, 11];
// console.log(arr);

const newArr = [];
console.log(newArr);


const squareArr = array => {
    for(let i = 0; i < array.length; i++){
       newArr[i] = array[i]**2;
    };
};

// const squareArr = array => {
//     for(let index in array) {
//         return array[index] ** 2
//     }
// } 

squareArr(arr)
console.log(newArr);

// newArr.forEach((item, index) => newArr[index] = item ** 2)
// console.log(newArr);






