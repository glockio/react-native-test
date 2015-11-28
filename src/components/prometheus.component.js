import React from 'react-native';
const { View } = React;

class Prometheus extends React.Component {

  constructor(props){
    super(props);
    this.attachRemoteEvents();
  }

  attachRemoteEvents(){
    const {fireRef: ref, remoteActions} = this.props;

    if(remoteActions.onAdd) {
      ref.on('child_added', (snapShot) => {
        remoteActions.onAdd(snapShot.val());
      });
    }

    // if(remoteActions.onChange) {
    //   ref.on('child_changed', (snapShot) => {
    //     remoteActions.onChange(snapShot.val());
    //   });
    // }

    // if(remoteActions.onRemove) {
    //   ref.on('child_removed', (snapShot) =>
    //     remoteActions.onRemove(snapShot.val());
    //   });
    // }

    // if(remoteActions.onRemove) {
    //   ref.on('value', (snapShot) =>
    //     remoteActions.onValue(snapShot.val());
    //   });
    // }

  }

  render(){
    return(
      <View>{this.props.children}</View>
    );
  }
}

export default Prometheus;