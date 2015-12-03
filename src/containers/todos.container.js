import {bindActionCreators} from 'redux';
import {connect} from 'react-redux/native';
import NewTodoForm from '../components/todos/todoForm.component';
import TodoList from '../components/todos/todosList.component';
import Fire from '../components/prometheus.component';
import * as todoActionCreators from '../actions/todo.actions'
import React from 'react-native';

const {View, Text, ActivityIndicatorIOS, StyleSheet} = React;

// Containers:
 // 1. Connect to store
//  2. Function as composers of dumb components

// Containers have everything they need to render themselves.
// They are entry points into sections of the app


class TodosContainer extends React.Component {

  renderBody() {
    if(this.props.loading) {
      return <ActivityIndicatorIOS animating={true} size='large' style={styles.spinner}/>
    } else {
      return(
        <TodoList todos={this.props.todos} todoActions={this.props.todoActions}/>
      );
    }
  }

  render(){
    const flame = this.props.fireRef.child('todos'); // scoped firebase ref

    return(
      <View style={styles.layoutManager}>

        <View style={styles.header}>
          <Text>Todos</Text>
        </View>

        <View style={styles.body}>
          <Fire fireRef={flame} remoteActions={this.props.remoteActions}>
            {this.renderBody()}
          </Fire>
        </View>

        <View style={styles.footer}>
          <NewTodoForm onSubmit={this.props.todoActions.addTodo} />
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({

  backGroundImage: {
    height: 800,
    width: 800,
    flex: 1
  },

  row: {
    borderBottomWidth: 0.5,
    borderColor: '#d6d7da',
  },

  layoutManager: {
    flex: 1,
    alignItems: 'stretch',
    flexDirection: 'column',
    alignSelf: 'stretch',
  },

  header: {
    height: 60,
    justifyContent: 'center',
    flex: 0,
    alignItems: 'center',
    flexDirection: 'column',
    alignSelf: 'stretch',
  },

  footer: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    alignSelf: 'stretch',
  },

  body: {
    flex: 1,
    alignItems: 'stretch',
    flexDirection: 'column',
    alignSelf: 'stretch',
  },

  spinner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    // alignSelf: 'center',
  }
});


function mapStateToProps(state) {
  return {
    todos: state.get('todos'),
    fireRef: state.get('fireRef'),
    loading: state.get('loadingTodos'),
  };
}

function mapDispatchToProps(dispatch) {
  // const remoteActions {onAdd: _addTodo} = todoActionCreators;

  const remoteActions = {
    onAdd: todoActionCreators.remoteAddTodo,
    onInit: todoActionCreators.getTodos
  };

  return {
    remoteActions: bindActionCreators(remoteActions, dispatch),
    todoActions: bindActionCreators(todoActionCreators, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);