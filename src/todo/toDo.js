import { createNewTaskElement, getToDos } from './service';

class ToDo {
  initToDos() {
    const list = getToDos();
    let elemenTptsHtml = '';
    list.forEach((e) => { elementsHtml += createNewTaskElement(e); });
    document.getElementById('incomplete-tasks').innerHTML += elementsHtml;
  }

  addTask() {
    const taskInput = document.getElementById('new-task');
    const listItem = createNewTaskElement(taskInput.value);
    document.getElementById('incomplete-tasks').appendChild(listItem);
    taskInput.value = '';
  }
}
export { ToDo as default };
