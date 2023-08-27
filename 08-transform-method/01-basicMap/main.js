const array1 = [1, 2, 30, 400];
const newArr = array1.map((el) => el * 2);
console.log(newArr);

const array2 = [1, 2, 3, 4];
const newArr2 = array2.map((el) => `${el}`);
console.log(newArr2);

const array3 = [1, '1', 2, {}];
const newArr3 = array3.map((el) => typeof el);
console.log(newArr3);

const array4 = ['apple', 'banana', 'orange'];
const newArr4 = array4.map((el) => el.toUpperCase());
console.log(newArr4);

const array5 = [1, 3, 4, 5, 6, 7, 8];
const newArr5 = array5.map((el) => (el % 2 == 0 ? 'even' : 'odd'));
console.log(newArr5);

const array6 = [1, -3, 2, 8, -4, 5];
const newArr6 = array6.map((el) => (el > 0 ? el : el * -1));
console.log(newArr6);

const array7 = [100, 200.25, 300.84, 400.3];
const newArr7 = array7.map((el) => el.toFixed(2));
console.log(newArr7);

const array8 = [0, 5, 10, 7, 6, 5, 0];
const MOUNTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
const newArr8 = array8.map((el) => MOUNTHS[el]);
console.log(newArr8);

const array9 = [1, 16, 81, 256, 625, 1296];
const newArr9 = array9.map((el) => Math.sqrt(Math.sqrt(el)));
console.log(newArr9);

const array10 = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 },
];
const newArr10 = array10.map((el) => el.name);
console.log(newArr10);

const array11 = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 },
];
const newArr11 = array11.map((el) => el.age);
console.log(newArr11);

const array12 = [
  { name: 'apple', surname: 'London' },
  { name: 'banana', surname: 'Bangkok' },
  { name: 'watermelon', surname: 'Singapore' },
];
const newArr12 = array12.map((el) => `${el.name} ${el.surname}`);
console.log(newArr12);

const array13 = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-01' },
  { name: 'watermelon', birth: '1985-12-01' },
];
const today = new Date();
const newArr13 = [];
const result = array13.map((fruit) => {
  const birthDate = new Date(fruit.birth);
  fruit['age'] = today.getFullYear() - birthDate.getFullYear();
  newArr13.push(fruit);
  return newArr13;
});
console.log(newArr13);

const array14 = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-10' },
  { name: 'watermelon', birth: '1985-12-30' },
];
const newArr14 = array14.map(function (obj) {
  const MOUNTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  let name = obj.name;
  const day = obj.birth.slice(-2);
  const month = obj.birth.slice(-5, -3) - 1;
  const year = obj.birth.slice(0, 4);
  const resultString = `<tr>
    <td>${name}<t/td> <td>${day} ${MOUNTHS[
    month
  ].toLowerCase()} ${year}</td><tr>`;

  return resultString;
});
console.log(newArr14);
