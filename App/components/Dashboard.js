import React from 'react';

import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight
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
  makeBackground(btn){
    var obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    }
    if(btn === 0){
      obj.backgroundColor = '#48BBEC';
    } else if (btn === 1){
      obj.backgroundColor = '#E77AAE';
    } else {
      obj.backgroundColor = '#758BF4';
    }
    return obj;
  }
  goToProfile(){
    console.log("Goin to profile page");
  }
  goToRepos(){
    console.log("Going to repos");
  }
  goToNotes(){
    console.log("Goin to Notes");
  }
  render(){

    return(
      <View style={styles.container}>
        <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image} />
        <TouchableHighlight onPress={this.goToProfile.bind(this)}underlay='#88D4F5' style={this.makeBackground(0)}>
          <Text style={styles.buttonText}>View Profile</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.goToRepos.bind(this)}underlay='#88D4F5' style={this.makeBackground(1)}>
          <Text style={styles.buttonText}>View Repos</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.goToNotes.bind(this)}underlay='#88D4F5' style={this.makeBackground(2)}>
          <Text style={styles.buttonText}>View Notes</Text>
        </TouchableHighlight>
        <Text>Hello from Dashboard</Text>
      </View>
    )
  }
};

export default Dashboard;
