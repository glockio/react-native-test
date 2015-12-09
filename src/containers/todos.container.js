import {bindActionCreators} from 'redux';
import {connect} from 'react-redux/native';
import NewTodoForm from '../components/todos/todoForm.component';
import TodoList from '../components/todos/todosList.component';
import Fire from '../components/prometheus.component';
import * as todoActionCreators from '../actions/todo.actions'
import React from 'react-native';

const {View, Text, ActivityIndicatorIOS, StyleSheet, TouchableHighlight} = React;

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
        <TodoList onRowPress={this.onRowPress.bind(this)} todos={this.props.todos} todoActions={this.props.todoActions}/>
      );
    }
  }

  this.updateCount();

  onRowPress(selectedTodo) {
    const {nav, todoActions} = this.props;
    todoActions.selectTodo(selectedTodo.key);
    nav.push({name: 'todoItem'});
  }

  this.props.count;
  render(){
    const flame = this.props.fireRef.child('todos'); // scoped firebase ref

    return(
      <View style={styles.layoutManager}>

        <View style={styles.header}>
          <TouchableHighlight
              style={styles.button}
              underlayColor="#B5B5B5"
              onPress={() => true}>
              <Text style={styles.buttonText}>TODOS</Text>
          </TouchableHighlight>
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


function mapStateToProps(reduxStore) {
  return {
    count: reduxStore.get('count')
  };
}

function mapDispatchToProps(dispatch) {
  // const remoteActions {onAdd: _addTodo} = todoActionCreators;

  const remoteActions = {
    onAdd: todoActionCreators.remoteAddTodo,
    onInit: todoActionCreators.getTodos
  };

  return {
    updateCount: bindActionCreators(remoteActions, dispatch),
    todoActions: bindActionCreators(todoActionCreators, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);