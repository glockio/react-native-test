import {bindActionCreators} from 'redux';
import {connect} from 'react-redux/native';
import Todos from '../components/todos.component';




function mapStateToProps (state, dispatch) {
  console.log("mapping...")

  return({
    todos: state.get('todos')
  });
}

export default connect(mapStateToProps)(Todos);