import {bindActionCreators} from 'redux';
import {connect} from 'react-redux/native';
import NewTodo from '../components/newTodo.component';


// function mapStateToProps (store) {
//   return({

//   })
// }

export default connect(mapStateToProps)(NewTodo);