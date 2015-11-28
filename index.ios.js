import React from 'react-native';
import {createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux/native';
import rootReducer from './src/reducers/root.reducer';
import App from './src/containers/app.container';
import * as todoActions from './src/actions/todo.actions'
import * as firebaseActions from './src/actions/firebase.actions'
import Firebase from 'firebase';
import firebaseUrl from './firebaseUrl';
import thunk from 'redux-thunk';

const {AppRegistry, Component} = React; // React Must be defined;

// Init redux store with reducer

// create a store that has redux-thunk middleware enabled
const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);


// Init Store with root reducer
const store = createStoreWithMiddleware(rootReducer);

// Connect to firebase
const ref = new Firebase(firebaseUrl);

// Set firebase ref in store;
store.dispatch(firebaseActions.setRef(ref));


// View Store State In Console
console.log(store.getState().toJS());


class reactNativeTest extends Component {

  constructor(props){
    super(props);
  }

  // Injects redux store to all children
  render(){
    return(
      <Provider store={store}>
        { () => <App/> }
      </Provider>
    );
  }
}

AppRegistry.registerComponent('reactNativeTest', () => reactNativeTest);
