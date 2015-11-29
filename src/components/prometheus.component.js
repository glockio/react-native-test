import React from 'react-native';
const { View } = React;

class Prometheus extends React.Component {


  constructor(props) {
    super(props);
    this.initFirebaseConnections();
  }

  initFirebaseConnections(){
    const onInit = this.props.remoteActions.onInit

    if(onInit) {
      onInit();
    }

    this.attachChildEvents();
  }



  attachChildEvents(){
    const {fireRef:remoteActions, ref} = this.props;

    if(remoteActions.onAdd) {
      ref.limitToLast(1).on('child_added', (snapShot) => {
        console.log("calling add...")
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
    return React.cloneElement(this.props.children, {testing: "INFUSED"});
  }
}

export default Prometheus;