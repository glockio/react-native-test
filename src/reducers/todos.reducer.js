
import {Map, List, fromJS} from 'immutable';
import {setTodos} from '../actions/todo.actions';



const DEFAULT_TODOS = List([
  {completed: true, name: 'Learn Flex Box'},
  {completed: true, name: 'Learn Redux'},
  {completed: false, name: 'Hook Up Firebase'},
])

export default function rootReducer(state=List(), action) {

  switch (action.type) {
  case 'SET_TODOS':
    return setTodos(state, action.todos);

  case 'SET_DEFAULT_TODOS':
    return setTodos(state, DEFAULT_TODOS);
  }

  return state;
}

