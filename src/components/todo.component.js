import React from 'react-native';

const {
  View,
  Text,
  StyleSheet,
  propTypes,
} = React;

class Todo extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    return(
      <View>
        <Text> {this.props.name}  {this.props.completed}</Text>
      </View>
    );
  }
};

// Todo.propTypes = {
//   name:  PropTypes.string.isRequired,
//   completed:  PropTypes.bool.isRequired,
// };

export default Todo;