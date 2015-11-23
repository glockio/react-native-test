import {Map, List, fromJS} from 'immutable';


export function addTodo(todoName) {
  return { type: 'ADD_TODO', todoName: todoName };
};

export function setDefaultTodos() {
  return { type: 'SET_DEFAULT_TODOS'};
};

export function setTodos(todos) {
  return { type: 'SET_TODOS', todos: todos};
};




