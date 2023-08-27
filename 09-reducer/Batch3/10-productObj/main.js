const products = [
  { id: 1, name: 'Crystal' },
  { id: 4, name: 'Namthip' },
  { id: 5, name: 'Nestle' },
];

for (let key in products) {
}

const objProducts = products.reduce((acc, item) => {
  acc[item.id] = { name: item.name };
  return acc;
}, {});

console.log(objProducts);
