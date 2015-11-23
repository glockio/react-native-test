import {Map, List, fromJS} from 'immutable';

const DEFAULT_TODOS = List([
  {completed: true, name: 'Learn Flex Box'},
  {completed: true, name: 'Learn Redux'},
  {completed: false, name: 'Hook Up Firebase'},
])

export default function todosReducer(state=List(), action) {

  switch (action.type) {

    case "ADD_TODO":
      console.log(action);
      return state.update( (todos) => todos.push({completed: false, name: action.todoName}) )

    case 'SET_TODOS':
      return state.update( () => fromJS(action.todos));

    case 'SET_DEFAULT_TODOS':
      return state.update( () => fromJS(DEFAULT_TODOS));
  }

  return state;
}

