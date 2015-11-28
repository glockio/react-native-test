import {Map, List, fromJS} from 'immutable';

const DEFAULT_TODOS = List([
  {completed: true, name: 'Learn Flex Box'},
  {completed: true, name: 'Learn Redux'},
  {completed: false, name: 'Hook Up Firebase'},
])


export default function todosReducer(state=Map(), action) {

  switch (action.type) {

    case "ADD_TODO":
      let todo = action.payload;
      return state.set(todo.key, todo);

    case "REMOTE_ADD_TODO":
      if(state.get(todo.key)) {
        return state;
      } else {
        return state.set(todo.key, todo);
      }

    case 'SET_TODOS':
      return state.update( () => fromJS(action.todos));

    case 'SET_DEFAULT_TODOS':
      return state.update( () => fromJS(DEFAULT_TODOS));


  }

  return state;
}

