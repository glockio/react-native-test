import {Map, List, Record} from 'immutable';
import Firebase from 'firebase';
import fireBaseUrl from '../../firebaseUrl';

const fireRef = new Firebase(fireBaseUrl).child('todos');

// https://github.com/acdlite/flux-standard-action
// {type: ADD_TODO, payload: {text: name}, metadata: {status: success }}


export function remoteAddTodo (todo, meta) {
  return {type: "ADD_TODO", payload: todo, meta: {remote: true} };
};

export function addTodo (todo) {

  return (dispatch) => {
      // creates a ref to the todo and assign a unique Key. Note At this point NO NETWORK REQ HAS OCCURED
      const todoRef = fireRef.push();

      todo.key = todoRef.key();

      dispatch(_addTodo(todo)); // Update redux for instant result

      // Make network request to firebase
      todoRef.set(todo, (error) => {

        if (error) {
          // error handler here... // dispatch("ERROR_ADDING_TODO");
        }
        // success callback  here...
      });
  };
};

function _gettingTodos (status) {
  return {type: "GETTING_TODOS", payload: {}, meta: {}  };
}

function _gotTodos (metadata={}) {
  return {type: "GOT_TODOS", payload: {}, meta: metadata };
}

export function getTodos (scopedRef) {

  const ref = scopedRef || fireRef;
  return (dispatch) => {
    dispatch(_gettingTodos());

    ref.once('value', (snapshot) => {
       dispatch(_gotTodos());
       dispatch(setTodos( snapshot.val()) );
    }, (error) => {
      dispatch(_gotTodos({error: error}));
    });

  }
}

export function setTodos (todos) {
  return {type: "SET_TODOS", payload: todos, meta: {} };
}

function _addTodo (todo, meta={}) {
  return {type: "ADD_TODO", payload: todo, meta: {} };
}




