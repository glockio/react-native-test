import {bindActionCreators} from 'redux';
import {connect} from 'react-redux/native';
import Todos from '../components/todos.component';
import * as todoActionCreators from '../actions/todo.actions'

function mapStateToProps(state) {
  return({
    todos: state.get('todos')
  });
}

function mapDispatchToProps(dispatch) {
  return {
    todoActions: bindActionCreators(todoActionCreators, dispatch),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Todos);