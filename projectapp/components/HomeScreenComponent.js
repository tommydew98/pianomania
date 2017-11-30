import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Button, AppRegistry, StyleSheet, Animated, Image, Easing } from 'react-native';

export default class HomeScreenComponent extends Component {
    static navigationOptions = {
        title: 'Piano Mania'
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

    render() {
        const {navigate} = this.props.navigation;
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });
        return (

            <View style={styles.container}>
                <Animated.Text
                    style={{
                    width: 90,
                    height: 50,
                    transform: [{rotate: spin}],
                    textAlign: 'center',
                    fontSize: 45,
                    justifyContent:  'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.0)',
                    marginBottom: 50

                }}
                onPress={() => navigate('Game')}>
                Play
                </Animated.Text>

				<Button
            onPress={() => navigate('BackgroundImage')}
            title="Select Background"
            />
			</View>
        );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})