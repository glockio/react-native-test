import {bindActionCreators} from 'redux';
import {connect} from 'react-redux/native';
import React from 'react-native';
import * as counterActions from "../actions/count.actions";
import Firebase from 'firebase';

const firebaseUrl = "https://fiery-heat-567.firebaseio.com/";
const rootFireRef =  new Firebase(firebaseUrl);
const countRef = rootFireRef.child('count');

const {View, Text, ActivityIndicatorIOS, StyleSheet, TouchableHighlight} = React;

// Containers:
 // 1. Connect to store
//  2. Function as composers of dumb components

// Containers have everything they need to render themselves.
// They are entry points into sections of the app

class CountComponent extends React.Component {


  constructor(props) {
    super(props);
    console.log("Here");
    console.log(this.props);
  }

  componentWillMount() {


    this.props.fetchCount();

    countRef.on('value', (snapshot) => {
      count = snapshot.val();

      this.props.setCount(count);
    })
  }

  render() {
    const {count, loading} = this.props;
    return(
      <View style={styles.container}>
        <TouchableHighlight onPress={this.props.onUpdate.bind(this)}>
          <View style={styles.header}>
             <Text> UpdateCount </Text>
          </View>
        </TouchableHighlight>
        <View style={styles.body}>
          <Text>{count}</Text>
          <Text>{loading ? "I AM LOADING" : "False"} </Text>
        </View>
      </View>
    );
  }
}


function mapStateToProps(reduxStore) {
  return {
    loading: reduxStore.get('loading'),
    count: reduxStore.get('count')
  };
}

function mapDispatchToProps(dispatch) {
  // const remoteActions {onAdd: _addTodo} = todoActionCreators;

  return {
    fetchCount:  bindActionCreators(counterActions.fetchCount, dispatch),
    onUpdate: bindActionCreators(counterActions.updateCount, dispatch),
    setCount: bindActionCreators(counterActions.setCount, dispatch),
    // updateCount: bindActionCreators(remoteActions, dispatch),
    // todoActions: bindActionCreators(todoActionCreators, dispatch),
  };
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: "red",
    flex: 1,
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
    backgroundColor: "green",
    alignItems: 'stretch',
    flexDirection: 'column',
    alignSelf: 'stretch',
  },


});

export default connect(mapStateToProps, mapDispatchToProps)(CountComponent);




