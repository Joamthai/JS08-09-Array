const persons = [
  { name: 'John', sex: 'M' },
  { name: 'Jody', sex: 'M' },
  { name: 'Susan', sex: 'F' },
  { name: 'Kate', sex: 'F' },
  { name: 'Sid', sex: 'M' },
];
const arrM = [];
const arrF = [];

const genderGroup = persons.reduce((acc, item) => {
  if (item.sex == 'M') {
    arrM.push(item.name);
  } else {
    arrF.push(item.name);
  }
  return (acc = { M: arrM, F: arrF });
}, {});

console.log(genderGroup);
