import Fire from './prometheus.component'; // Component that hooks up firebase
import Todos from './todos.component';
import TodoForm from './todoForm.component';
import React from 'react-native';

const {
  StyleSheet, Component, PropTypes,
  View, Image, Text, ActivityIndicatorIOS
} = React;


class TodosApp extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    const flame = this.props.fireRef.child('todos'); // scoped firebase ref
    return(
      <View style={styles.layoutManager}>

        <View style={styles.header}>
          <Text>Todos</Text>
        </View>

        <View style={styles.body}>
          <Fire fireRef={flame} remoteActions={this.props.remoteActions} >
            <Todos todos={this.props.todos} todoActions={this.props.todoActions}/>
          </Fire>
        </View>


        <View style={styles.footer}>
          <TodoForm onSubmit={this.props.todoActions.addTodo} />
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
});

export default TodosApp;