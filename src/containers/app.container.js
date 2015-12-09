import TodosContainer from './todos.container';
import TodoItemContainer from './todoItem.container';
import React from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux/native';

const {
 Navigator, View, Text
} = React;

class AppContainer extends React.Component {

  renderScene(route, nav) {
    switch (route.name) {
      case 'todos':
        return <TodosContainer nav={nav}/>;
      case 'todoItem':
        return <TodoItemContainer nav={nav}/> ;
      default:
        return <TodosContainer nav={nav}/>;
    }
  }

  render(){
    return(
      <Navigator
       initialRoute={ { name: "todos"} }
       renderScene={this.renderScene.bind(this)}
       configureScene={ (route) => {
         if (route.sceneConfig) {
           return route.sceneConfig;
         }
         return Navigator.SceneConfigs.FloatFromRight;
       }}
      />
    );
  }
}

export default AppContainer;
