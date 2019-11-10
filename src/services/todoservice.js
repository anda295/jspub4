
export function createNewTaskElement(taskString) {
  const listElement = `${'<li>'
    + "<input type='checkbox' /><label>"}${taskString}</label>`
    + '<input type=\'text\' /><button class=\'edit\'>Edit</button>'
    + '<button class=\'delete\'>Delete</button>'
    + '</li>';
  return listElement;
}
export function getToDos() {
  return ['Go to work', 'Grab a beer at JSPUB', 'Make dinner reservations', 'Pay Bills'];
}
