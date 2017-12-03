import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, Text, View, Button, AppRegistry, StyleSheet, Animated, Image, Easing } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class HomeScreenComponent extends Component {
    static navigationOptions = {
        title: 'Piano Mania',
        headerStyle: {
            backgroundColor: '#AAA'
        }
    };

    constructor() {
        super()
        this.spinValue = new Animated.Value(0)
    }
    componentDidMount() {
        this.spin()
    }
    spin() {
        this.spinValue.setValue(0)
        Animated.timing(
            this.spinValue,
            {
                toValue: 2,
                duration: 4000,
                easing: Easing.linear
            }
        ).start(() => this.spin())
    }
    console() {
        console.log("test");
    }

    render() {
        const {navigate} = this.props.navigation;
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });
        return (
            
            <View style={styles.container}>
            <Image style={styles.imageBack} source={{uri:'https://media.giphy.com/media/izCrPHHduwpcQ/giphy.gif'}}/>
                <Animated.Text
            style={{
                width: 90,
                height: 50,
                transform: [{
                    rotate: spin
                }],
                textAlign: 'center',
                fontSize: 45,
                justifyContent: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.0)',
                marginBottom: 50,
                color: '#aaa',
            }}
            onPress={() => navigate('Game')}>
                Play
                </Animated.Text>

                <Icon
            style={styles.button}
            name="tint"
            backgroundColor="#111">
                </Icon>
                <Icon
            style={styles.button}
            name="dropbox"
            ></Icon>
            <View style={styles.snake}>
            <Icon.Button name="inbox" backgroundColor='#AAA' onPress={() => navigate('Liquid')}>
            Liquid Snake
            </Icon.Button>
            </View>
        

			</View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    touche: {
        width: 150,
        height: 10,
        backgroundColor: "black"
    },
    imageBack: {
        position: 'absolute',
        width: 420,
        height: 700,

    },
    snake: {
        position: 'absolute' ,
        bottom: 5,
        right: 5,

    }

})