import {Text, View, StyleSheet, TextInput, TouchableHighlight} from 'react-native';

class NewTodo extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <TextInput value={this.props.todoName} style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={this.props.onChangeText}
      />
      <TouchableHighlight onPress={this.props.onSubmit}>
        <Text>Submit</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({

});

NewTodo.propTypes = {

};

export default NewTodo;