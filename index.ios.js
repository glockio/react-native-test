import React from 'react-native';
import {createStore } from 'redux';
import {Provider} from 'react-redux/native';
import rootReducer from './src/reducers/root.reducer';
import App from './src/containers/app.container';

const {AppRegistry, Component} = React; // React Must be defined;

var TODOS = [
  {completed: false, name: "GO Pick up some beer"},
  {completed: false, name: "Finish react Native Example"},
  {completed: true, name: "Eat dinner"},
]

// Init redux store with reducer
const store = createStore(rootReducer);

// Demo store.dispatch
store.dispatch({type: "SET_TODOS", todos: TODOS })

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
