import React from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const {
  View,
  Text,
  StyleSheet,
  propTypes,
  TouchableOpacity
} = React;


class Note extends React.Component {

  constructor(props){
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // This is what you can do when you use immutable
    return this.props.note !== nextProps.note;
  }

  render(){
    const {text} = this.props.note;
    return(
      <TouchableOpacity>
        <View style={styles.container}>
          <Text style={styles.name} >{text}</Text>
          <Icon name="ios-book-outline" size={30} color="#545FFF" style={styles.icon}/>
        </View>
      </TouchableOpacity>
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

  icon: {
    alignSelf: 'center',
    marginRight: 20,
  }

});


export default Note;