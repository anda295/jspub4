
import './list.css';
import { getToDos, createNewTaskElement } from '../todoservice';

class ToDoList {
  constructor() {
    const addButton = document.getElementsByTagName('button')[0];
    addButton.addEventListener('click', this.addToDo);
  }

  initToDos() {
    const list = getToDos();
    let elementsHtml = '';
    list.forEach((e) => { elementsHtml += createNewTaskElement(e); });
    document.getElementById('incomplete-tasks').innerHTML += elementsHtml;
  }

  addToDo() {
    const taskInput = document.getElementById('new-task');
    const listItem = createNewTaskElement(taskInput.value);
    document.getElementById('incomplete-tasks').innerHTML += listItem;
    taskInput.value = '';
  }
}
export {
  ToDoList as default
};
