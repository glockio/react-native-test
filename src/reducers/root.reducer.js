

import {Map, List, fromJS} from 'immutable';
import todosReducer from './todos.reducer';

export default function rootReducer(state=Map(), action) {

  console.log(`Calling ${action.type}...`);

  switch (action.type) {
    case 'ADD_TODO':
    case 'SET_DEFAULT_TODOS':
      return state.updateIn(['todos'], (scopedState) => todosReducer(scopedState, action));

    case 'SET_FIREBASE_REF':
      return state.update('fireRef', () => action.fireRef)
   }

  return state;
}
