let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];

const initObj = {};

function reduceFn(acc, name, index, arr) {
  //   if (!acc[name]) {
  //     acc[name] = 1;
  //   } else {
  //     acc[name]++;
  //   }

  if (!acc[name]) acc[name] = 0;
  acc[name]++;
  return acc;
}

const r = names.reduce(reduceFn, initObj);
console.log(r);
