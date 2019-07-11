
import ToDoList from './todo/todo-list/list';
import './main.css';
import logo from '../assets/logo.png';

document.getElementById('logo').setAttribute('src', logo);


const list = new ToDoList();
list.initToDos();
