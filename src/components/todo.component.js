import React from 'react-native';

const {
  View,
  Text,
  StyleSheet,
  propTypes,
  Image
} = React;

class Todo extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.completed}>
          <View style={this.props.completed ? styles.completedIcon : styles.uncompletedIcon}/>
        </View>
        <Text style={styles.name} >{this.props.name}</Text>
      </View>
    );
  }
};

styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#eee',
    opacity: 0.75,
  },
  completedIcon: {
    height: 30,
    width: 30,
    alignSelf: 'center',
    borderWidth: 0.5,
    borderRadius: (() => {console.log(this); return (30/2)} )(), // just because I can
    backgroundColor: 'green',
  },

  uncompletedIcon: {
    height: 30,
    width: 30,
    borderWidth: 0.5,
    alignSelf: 'center',
    borderRadius: (() => {console.log(this); return (30/2)} )(), // just because I can
  },

  completed: {
    flex: 2,
    alignSelf: 'center',
  },

  name: {
    flex: 10,
    padding: 50,
  },

  backGroundImage: {
    height: 50,
    width: 50,
  },

});




export default Todo;