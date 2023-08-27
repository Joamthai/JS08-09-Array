const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 }
  ];

const findCherries = element => element.name == 'cherries';

console.log(inventory.find(findCherries)) // {name: 'cherries', quantity: 5}