

import {Map, OrderedMap, List} from 'immutable';
import todosReducer from './todos.reducer';


const initialState = Map({
  'fireRef': null,
  '_todos_': Map({
    loadingTodos: false,
    todos:  OrderedMap(),
    selectedTodo: null,
  }),
});

export default function rootReducer(state=initialState, action) {

  console.log(`Calling ${action.type}...`);

  switch (action.type) {
    case "SELECT_TODO":
    case "GETTING_TODOS":
    case "GOT_TODOS":
    case 'ADD_TODO':
    case 'SET_TODOS':
      return state.updateIn(['_todos_'], (scopedState) => todosReducer(scopedState, action));

    case 'SET_FIREBASE_REF':
      return state.update('fireRef', () => action.fireRef)
   }

  return state;
}
