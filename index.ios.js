import React from 'react-native';
import {createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux/native';
import rootReducer from './src/reducers/root.reducer';
import * as counterActions from './src/actions/count.actions';

import CounterContainer from './src/containers/counter.container';
// import immutable from 'immutable';
import thunk from 'redux-thunk';

const {AppRegistry, Component, View, Text} = React; // React Must be defined;

// create a store that has redux-thunk middleware enabled

const createStoreWithMiddleware = applyMiddleware(
  thunk // thunk allows us to return functions from actions
)(createStore);

// Init Store with root reducer
const store = createStoreWithMiddleware(rootReducer);

console.log(store);
console.log(store.getState());
console.log(store.getState().toJS());


// Map, Record, List;

// console.log(store.toJS());


// updateIn(["some", "really", "long", "path"], 0, (currentVal) => currentVal + 1 )

// store.dispatch(counterActions.updateCount());

class reactNativeTest extends Component {

  render(){
    return(
      <Provider store={store}>
        { () => <CounterContainer/> }
      </Provider>
    );
  }
}

AppRegistry.registerComponent('reactNativeTest', () => reactNativeTest);
