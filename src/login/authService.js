export function createNewTaskElement(taskString) {
  let listItem = document.createElement("li");

  //input (checkbox)
  let checkBox = document.createElement("input"); //checkbx
  //label
  let label = document.createElement("label"); //label
  //input (text)
  let editInput = document.createElement("input"); //text
  //button.edit
  let editButton = document.createElement("button"); //edit button

  //button.delete
  let deleteButton = document.createElement("button"); //delete button

  label.innerText = taskString;

  //Each elements, needs appending
  checkBox.type = "checkbox";
  editInput.type = "text";

  editButton.innerText = "Edit"; //innerText encodes special characters, HTML does not.
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";

  //and appending.
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  return listItem;
}
export function getToDos() {
  return ["Go to the doctor", "Buy bread", "Call bank"];
}
