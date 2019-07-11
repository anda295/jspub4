class ToDoItem {
  createNewTaskElementtask(taskString) {
    const listElement = `${'<li>'
      + "<input type='checkbox' /><label>"}${taskString}</label>`
      + '<input type=\'text\' /><button class=\'edit\'>Edit</button>'
      + '<button class=\'delete\'>Delete</button>'
      + '</li>';
    return listElement;
  }
}
export { ToDoItem as default };
