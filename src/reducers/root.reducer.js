

import {Map, List, fromJS} from 'immutable';
import todosReducer from './todos.reducer';

export default function rootReducer(state=Map(), action) {

  switch (action.type) {

    // TODOS SCOPE
    // case 'SET_TODOS':
    case 'SET_DEFAULT_TODOS':
      return state.updateIn(['todos'], (scopedState) => todosReducer(scopedState, action));

   }

  return state;
}
