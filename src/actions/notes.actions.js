import {Map, List, Record} from 'immutable';
import Firebase from 'firebase';
import fireBaseUrl from '../../firebaseUrl';


export function loadNotes (todoId) {
  const ref = new Firebase(fireBaseUrl).child(`notes/${todoId}`);
  return (dispatch) => {
    dispatch(gettingNotes(todoId));

    ref.once('value', (snapshot) => {
       dispatch(gotNotes(todoId));
       dispatch(setNotes(todoId, snapshot.val()) );
    }, (error) => {
      dispatch(gotNotes(todoId, {error: error}));
    });

  }
}

function gettingNotes (todoId, status) {
  return {type: "GETTING_NOTES", payload: {todoId}, meta: {}  };
}

function gotNotes (todoId, metadata={}) {
  return {type: "GOT_NOTES", payload: {todoId}, meta: metadata };
}

function setNotes (todoId, notes, metadata={}) {
  return {type: "SET_NOTES", payload: {todoId, notes}, meta: metadata };
}





