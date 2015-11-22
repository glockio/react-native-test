import {Map, List, fromJS} from 'immutable';


const todoActions = {
  setTodos(state, todos=List()){
    return state.update('todos',() => fromJS(todos));
  }

};


export default todoActions