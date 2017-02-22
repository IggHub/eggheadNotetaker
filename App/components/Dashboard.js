import React from 'react';

import {
  Text,
  View,
  StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});

class Dashboard extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>Hello from Dashboard</Text>
      </View>
    )
  }
};

export default Dashboard;
