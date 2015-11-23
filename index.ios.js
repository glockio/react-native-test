import React from 'react-native';
import {createStore } from 'redux';
import {Provider} from 'react-redux/native';
import rootReducer from './src/reducers/root.reducer';
import App from './src/containers/app.container';
import {Map} from 'immutable';



const {AppRegistry, Component} = React; // React Must be defined;

// Init redux store with reducer

const store = createStore(rootReducer);

// Demo store.dispatch

setTimeout(function(){
  store.dispatch({type: "SET_DEFAULT_TODOS"})
}, 3000);

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
