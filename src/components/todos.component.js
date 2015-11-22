
import React from 'react-native';
import Immutable from 'immutable';
import Todo from './todo.component';

const {StyleSheet, Component, ListView, PropTypes, View, Text} = React;

class Todos extends Component {

  constructor(props){
    super(props);
    this.initListViewDataSoruce();
  }

  initListViewDataSoruce(){
    this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  }

  render(){
    const todos = this.props.todos.toJS();
    var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return(
      <ListView
        style={styles.list}
        dataSource={dataSource.cloneWithRows(todos)}
        renderRow={ (todo) => <Todo style={styles.row} {...todo}/> } />
    );

  }
}

const styles = StyleSheet.create({
  todos: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee'
  },

  row: {
    padding: 50,
  }
});


Todos.propTypes = {
  todos: PropTypes.instanceOf(Immutable.List).isRequired
};



export default Todos;