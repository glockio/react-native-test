

import {Map, List} from 'immutable';
import todosReducer from './todos.reducer';

const initialState = Map({
  loadingTodos: false
});

export default function rootReducer(state=initialState, action) {

  console.log(`Calling ${action.type}...`);

  switch (action.type) {
    case 'ADD_TODO':
    case 'SET_TODOS':
      return state.updateIn(['todos'], (scopedState) => todosReducer(scopedState, action));

    case "GETTING_TODOS":
     return state.set('loadingTodos', true)

    case "GOT_TODOS":
      if(action.meta.error) {
        // handle error....
      }
      return state.set('loadingTodos', false)

    case 'SET_FIREBASE_REF':
      return state.update('fireRef', () => action.fireRef)
   }

  return state;
}
