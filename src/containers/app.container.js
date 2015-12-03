import TodosContainer from './todos.container';
import React from 'react-native';

const {
 Navigator
} = React;

class AppContainer extends React.Component {

  renderScene(route, nav) {
    switch (route.name) {
      case 'todos':
        console.log("calling todos route")
        return <TodosContainer/>;
      default:
        return <TodosContainer/>;
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