
import {Map, List, fromJS} from 'immutable';
import {setTodos} from '../actions/todo.actions';


export default function rootReducer(state=Map(), action) {

  switch (action.type) {
  case 'SET_TODOS':
    console.log("calling set todos...")
    return setTodos(state, action.todos);
  }

  return state;
}



