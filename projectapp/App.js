import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreenComponent from './components/HomeScreenComponent';
import MainGame from './components/MainGame';
import BackgroundImageComponent from './components/BackgroundImageComponent';
import LiquidSnake from './components/LiquidSnake';

const PianoNavigation = StackNavigator({
    Home: {
        screen: HomeScreenComponent
    },
    Game: {
        screen: MainGame
    },
    BackgroundImage: {
        screen: BackgroundImageComponent
    },
    Liquid: {
        screen: LiquidSnake
    }
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
