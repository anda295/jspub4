import ToDo from './todo/toDo';

const viewToDo = new ToDo();
viewToDo.initToDos();
const addButton = document.getElementsByTagName('button')[0];
addButton.addEventListener('click', viewToDo.addTask);
