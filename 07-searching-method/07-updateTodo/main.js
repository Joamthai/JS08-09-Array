const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' },
];

// const updateTask = (id, newName, arr) => {
//         if(arr[id - 1].id = id){
//             arr[id - 1].name = newName
//         }
//     };
function updateTask(id, newTask) {
  const foundedIndex = tasks.findIndex((obj, index) => obj.id == id);

  if (foundedIndex != -1) {
    // tasks[foundedIndex].name = newTask;
    const newTodo = Object.assign({}, tasks[foundedIndex]);
    newTodo.name = newTask;
    tasks.splice(foundedIndex, 1, newTodo);
    console.log(tasks);
  }
}

updateTask(2, 'Travelling');
// console.log(newTask);

// console.log(tasks[0].id)
