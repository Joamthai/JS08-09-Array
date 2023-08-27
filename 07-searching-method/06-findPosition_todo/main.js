const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' }
  ];

  const findPosition = element => element.id == 2;

console.log(tasks.findIndex(findPosition)); // 1