import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreenComponent from './components/HomeScreenComponent';
import MainGame from './components/MainGame';

const PianoNavigation = StackNavigator({
  Home : {
    screen: HomeScreenComponent
  },
  Game: {
    screen: MainGame
  },
});

export default class App extends Component {
  render() {
    return (
      <PianoNavigation/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
