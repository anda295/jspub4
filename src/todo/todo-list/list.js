import { getToDos } from '../todoservice';
import ToDoItem from '../todo-item/item';

class ToDoList {
    constructor() {
        this.todoItem = new ToDoItem();
        const addButton = document.getElementsByTagName('button')[0];
        addButton.addEventListener('click', this.addTask);
    }

    initToDos() {
        const list = getToDos();
        let elementsHtml = '';
        list.forEach((e) => { elementsHtml += this.todoItem.createNewTaskElement(e); });
        document.getElementById('incomplete-tasks').innerHTML += elementsHtml;
    }

    addTask() {
        const taskInput = document.getElementById('new-task');
        const listItem = this.todoItem.createNewTaskElement(taskInput.value);
        document.getElementById('incomplete-tasks').appendChild(listItem);
        taskInput.value = '';
    }
}
export { ToDoList as default };
