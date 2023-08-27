const styles = ['Jazz', 'Blue'];

styles.push('Rock-n-Roll');
console.log(styles); // ['Jazz', 'Blue', 'Rock-n-Roll']

styles[1] = 'Classic';
console.log(styles); // ['Jazz', 'Classic', 'Rock-n-Roll']

delete styles[0];
console.log(styles); // [empty, 'Classic', 'Rock-n-Roll']

console.log(styles.length) // 3