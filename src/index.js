
import ToDoList from './todo/todo-list/list';
import logo from '../assets/logo.png';
import './app.css';

document.getElementById('logo').setAttribute('src', logo);

const list = new ToDoList();
list.initToDos();
