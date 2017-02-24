import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
  separator: {
    height: 1,
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: '#E4E4E4'
  }
})

class Separator extends React.Component {
  render(){
    return(
      <View style={styles.separator} />
    )
  }
}

export default Separator;
