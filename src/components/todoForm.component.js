import React from 'react-native';
const {Text, View, StyleSheet, TextInput, TouchableHighlight} = React;

class TodoForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: ""
    };
  }

  _onChangeText(text) {


    this.setState({
      name: text
    });
  }
  _saveNewTodo() {
    let newTodo = { name: this.state.name, completed: false}
    this.props.onSubmit(newTodo);
    this.setState({
      name: ''
    })
  }

  render(){
    return(
      <View style={styles.container}>

        <View style={styles.test}>
          <TextInput  style={styles.input} value={this.state.name} onChangeText={this._onChangeText.bind(this)}
          />
        </View>

        <TouchableHighlight style={styles.submit} onPress={this._saveNewTodo.bind(this)}>
          <Text>Submit</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
    borderColor: '#ccc',
    borderTopWidth: 1,
  },

  submit: {
    flex: 1,
    alignItems: 'center',
    marginTop: 8,
    backgroundColor: 'ccc'
  },
  input: {
    flex: 1,
    height: 40,
    borderRadius: 6,
    padding: 10,
    margin: 5,
    borderColor: 'gray', borderWidth: 1
  },

});

export default TodoForm;