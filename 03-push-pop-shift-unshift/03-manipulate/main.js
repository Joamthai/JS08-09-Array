const animals = ['Dog', 'Cat', 'Rat'];

animals.push('Fish');
console.log(animals); // ['Dog', 'Cat', 'Rat', 'Fish']

animals.unshift('Horse');
console.log(animals); // ['Horse', 'Dog', 'Cat', 'Rat', 'Fish']

animals.push('Giraffe', 'Snake');
console.log(animals); // ['Horse', 'Dog', 'Cat', 'Rat', 'Fish', 'Giraffe', 'Snake']

animals.shift();
console.log(animals); // ['Dog', 'Cat', 'Rat', 'Fish', 'Giraffe', 'Snake']

animals.pop();
console.log(animals); // ['Dog', 'Cat', 'Rat', 'Fish', 'Giraffe']

animals.shift();
console.log(animals) // ['Cat', 'Rat', 'Fish', 'Giraffe']