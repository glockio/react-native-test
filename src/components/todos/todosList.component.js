
import React from 'react-native';
import Immutable from 'immutable';
import Todo from './todoItem.component';

const {StyleSheet, Component,
  ListView, PropTypes, View, Text} = React;

class Todos extends Component {

  componentWillMount(){
    this.initListViewDataSoruce();
  }

  initListViewDataSoruce() {
    this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  }

  render(){
    const todos = this.props.todos ? this.props.todos.toArray() : [];
    const {onRowPress} = this.props;
    return(
      <ListView
        dataSource={this.dataSource.cloneWithRows(todos)}
        renderRow={ (todo) => <View style={styles.row}><Todo onPress={onRowPress} todo={todo}/></View> } />
    );

  }
};




// My Visualization of flex direction.

            // Column         // Row
//       |              |  |----------------------------
//       |    child 3   |  |
//       |    child 2   |  |  Child 1, Child 2, Child 3
//       |    child 1   |  |
//       ----------------  |----------------------------


// Keep Commented out styles for reference

const styles = StyleSheet.create({

  backGroundImage: {
    // height: 100,
    // width: 1000,
    // flex: 1,
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
    // backgroundColor: "#ccc",
    alignItems: 'stretch',
      // alignItems: 'flex-end',
      // alignItems: 'flex-start',
      // alignItems: 'center',
    flexDirection: 'column',
      // flexDirection: 'row',

    alignSelf: 'stretch', // center flex-end flex-start
      // alignSelf: 'flex-end',
      // alignSelf: 'flex-start',
      // alignSelf: 'center',

  },

  header: {

    height: 60,
    justifyContent: 'center',
    flex: 0, // same as Default
      // flex: 2,
      // flex: 3,
      // flex: 0,

    // backgroundColor: 'blue',

    // alignItems: 'stretch',
      // alignItems: 'flex-end',
      // alignItems: 'flex-start',
      alignItems: 'center',

    flexDirection: 'column',
      // flexDirection: 'row',

    alignSelf: 'stretch', // center flex-end flex-start
      // alignSelf: 'flex-end',
      // alignSelf: 'flex-start',
      // alignSelf: 'center',

  },

  footer: {
    backgroundColor: 'red',
    flex: 0,
    height: 100,

      // flex: 2,
      // flex: 3,
      // flex: 0,

    alignItems: 'center',
    justifyContent: 'center',
      // alignItems: 'flex-end',
      // alignItems: 'flex-start',
      // alignItems: 'center',


    flexDirection: 'column',
      // flexDirection: 'row',



    alignSelf: 'stretch', // center flex-end flex-start
      // alignSelf: 'flex-end',
      // alignSelf: 'flex-start',
      // alignSelf: 'center',


  },

  body: {
    // backgroundColor: 'pink',
    backgroundColor: 'none',
    flex: 1,
      // flex: 2,
      // flex: 3,
      // flex: 0,

    alignItems: 'stretch',
      // alignItems: 'flex-end',
      // alignItems: 'flex-start',
      // alignItems: 'center',

    flexDirection: 'column',
      // flexDirection: 'row',

    alignSelf: 'stretch', // center flex-end flex-start
      // alignSelf: 'flex-end',
      // alignSelf: 'flex-start',
      // alignSelf: 'center',
  },
});


// Todos.propTypes = {
//   todos: PropTypes.instanceOf(Immutable.List).isRequired
// };



export default Todos;