import {bindActionCreators} from 'redux';
import {connect} from 'react-redux/native';
import Todos from '../components/todos.component';


function mapStateToProps (store) {
  return({
    todos: store.get('todos')
  })
}

export default connect(mapStateToProps)(Todos);