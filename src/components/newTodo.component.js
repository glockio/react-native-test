import React from 'react-native';
const {Text, View, StyleSheet, TextInput, TouchableHighlight} = React;

class NewTodo extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      todoName: ""
    };
  }

  _onChangeText(text) {
    this.setState({
      todoName: text
    });
  }

  _saveNewTodo() {
    this.props.onSubmit(this.state.todoName);
    this.setState({
      todoName: ''
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <TextInput style={styles.input} value={this.state.todoName} onChangeText={this._onChangeText.bind(this)}
        />
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
    // alignSelf: 'center',
    flexDirection: 'row',
    alignSelf: 'stretch',
  },

  submit: {
    flex: 1,
  },

  input: {
    flex: 1,
    height: 50,
    alignSelf: 'center',
    backgroundColor: 'green',
    borderColor: 'gray', borderWidth: 1
  },

});

// NewTodo.propTypes = {

// };

export default NewTodo;