

import {Map, Seq, List,OrderedMap, Record} from 'immutable';
import todosReducer from './todos.reducer';



const NoteRecord = new Record({
  key: undefined,
  text: '',
  todoId: undefined
});


const initialState = Map({
  'fireRef': null,
  '_todos_': Map({
    loadingTodos: false,
    todos:  OrderedMap(),
    selectedTodo: null,
  }),
  'notesByTodoId': Map({})
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

    case "SET_NOTES":
      const {todoId, notes} = action.payload

      let seq = Seq(notes).map( (noteData, key) => new NoteRecord(noteData) )

      return state.updateIn(["notesByTodoId"], (scopedState) => scopedState.set(todoId, seq.toMap()) );

   }

  return state;
}
