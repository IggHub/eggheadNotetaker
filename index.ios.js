/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View,
  ActivityIndicatorIOS
} from 'react-native';
import Main from './App/components/Main';

export default class eggheadNotetaker extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Egghead Notetaker Practice',
          component: Main,
          passProps: {myProps: 'foo'}
        }}
        />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  }
});

AppRegistry.registerComponent('eggheadNotetaker', () => eggheadNotetaker);
