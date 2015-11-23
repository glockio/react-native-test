import {bindActionCreators} from 'redux';
import {connect} from 'react-redux/native';
import NewTodo from '../components/newTodo.component';



export default connect(mapStateToProps)(NewTodo);