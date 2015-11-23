import {Map, List, fromJS} from 'immutable';


const todoActions = {
  setTodos(state, newTodos=List()) {
    return state.update( (currentTodos) => fromJS(newTodos) );
  }
};




export default todoActions