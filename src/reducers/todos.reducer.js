import {Map, OrderedMap, Record, Seq} from 'immutable';


// Keys not included in record schema are ignroed
// Keys deleted are set back to default values
// Records can access props without .get so todo.name will work :)


const TodoRecord = new Record({
  key: undefined,
  completed: false,
  name: '',
});


export default function todosReducer(scopedState, action) {

  const todosState = scopedState.get('todos');
  switch (action.type) {

    case "ADD_TODO": {
      console.log("Adding new todo")
      let todo = new TodoRecord(action.payload);
      return scopedState.setIn(['todos', todo.key], todo);
    }

    case "REMOTE_ADD_TODO": {
      let todo = new TodoRecord(action.payload);
      if(todosState.get(todo.key)) {
        return scopedState;
      } else {
        return scopedState.setIn(['todos', todo.key], todo);
      }
    }

    case "SELECT_TODO": {
      let selectedTodo = todosState.get(action.payload.todoKey);
      return scopedState.set('selectedTodo', selectedTodo);
    }

    case "GETTING_TODOS": {
      return scopedState.set('loadingTodos', true);
    }

    case "GOT_TODOS": {
      return scopedState.set('loadingTodos', false);
    }

    case 'SET_TODOS': {
      // Seq in immutable repersents lazy eval. until I call seq.toOrderedMap the code never runs
      let seq = Seq(action.payload).map( (todoData, key) => new TodoRecord(todoData) )
      return scopedState.set('todos', seq.toOrderedMap());
    }
  }

  return scopedState;
}

