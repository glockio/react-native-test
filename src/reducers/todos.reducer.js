import {OrderedMap, Record, Seq} from 'immutable';


// Keys not included in record schema are ignroed
// Keys deleted are set back to default values
// Records can access props without .get so todo.name will work :)


const TodoRecord = new Record({
  key: undefined,
  completed: false,
  name: '',
});



export default function todosReducer(state=OrderedMap(), action) {

  switch (action.type) {
    case "ADD_TODO": {
      let todo = new TodoRecord(action.payload);
      return state.set(todo.key, todo);
    }


    case "REMOTE_ADD_TODO": {
      let todo = new TodoRecord(action.payload);

      if(state.get(todo.key)) {
        return state;
      } else {
        return state.set(todo.key, todo);
      }

    }
    case 'SET_TODOS': {
      // Seq in immutable repersents lazy eval. until I call seq.toOrderedMap the code never runs
      let seq = Seq(action.payload).map( (todoData, key) => new TodoRecord(todoData) )
      const newState = seq.toOrderedMap();
      return newState;
    }


  }

  return state;
}

