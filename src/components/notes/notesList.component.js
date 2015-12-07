import React from 'react-native';
import Immutable from 'immutable';
import NoteItem from './noteItem.component';

const {StyleSheet, Component,
  ListView, PropTypes, View, Text} = React;

class NotesList extends Component {

  componentWillMount(){
    this.initListViewDataSoruce();
  }

  initListViewDataSoruce() {
    this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  }

  render() {
    const notes = this.props.notes ? this.props.notes.toArray() : [];
    return(
      <ListView
        dataSource={this.dataSource.cloneWithRows(notes)}
        renderRow={ (note) => <View style={styles.row}><NoteItem note={note}/></View> } />
    );

  }
};


export default NotesList;