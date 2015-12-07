import {bindActionCreators} from 'redux';
import {connect} from 'react-redux/native';
import NotesList from '../components/notes/notesList.component';
import Fire from '../components/prometheus.component';
import React from 'react-native';
import * as notesActions from '../actions/notes.actions';

const {View, Text, ActivityIndicatorIOS, StyleSheet, TouchableHighlight} = React;

// Containers:
 // 1. Connect to store
//  2. Function as composers of dumb components

// Containers have everything they need to render themselves.
// They are entry points into sections of the app


class TodoItemContainer extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
    const {todo, notesActions} = this.props;
    notesActions.loadNotes(todo.key);
  }

  render(){
    const notes = this.props.notes;
    return(
      <View style={styles.layoutManager}>

        <View style={styles.header}>

          <TouchableHighlight
              style={styles.button}
              underlayColor="#B5B5B5"
              onPress={() => true}>
              <Text style={styles.buttonText}>TodoItem</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.body}>
          <Text>{this.props.todo.name}</Text>
            <NotesList notes={notes}/>
        </View>


          <TouchableHighlight
              style={styles.button}
              underlayColor="#B5B5B5"
              onPress={() => this.props.nav.pop()}>
              <View style={styles.footer}>
                <Text>Back</Text>
              </View>
          </TouchableHighlight>

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
    backgroundColor: '#ccc'
  },

  spinner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    // alignSelf: 'center',
  }
});


function mapStateToProps(state) {
  console.log(state.toJS());
  const todo = state.getIn(['_todos_', "selectedTodo"]);
  return {
    notes: state.getIn(['notesByTodoId', todo.key]),
    fireRef: state.get('fireRef'),
    todo
  }

}


function mapDispatchToProps(dispatch) {
  return {
    notesActions: bindActionCreators(notesActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItemContainer);