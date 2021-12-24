import './styles.css';

//import { saludar } from './js/componentes';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach( crearTodoHtml );

//const newTodo = new Todo('Aprender java');
//todoList.nuevoTodo(newTodo);
//todoList.todos[0].imprimirClase();
//newTodo.imprimirClase();

console.log('todos', todoList.todos);