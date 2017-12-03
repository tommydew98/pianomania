import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, ActivityIndicator, Image, Text, View, Button, TouchableHighlight, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Expo, { Audio } from 'expo';
import { ImagePicker } from 'expo';



export default class LiquidSnake extends Component {
    static navigationOptions = {
        title: 'Liquid Snake, Snake??',
        headerStyle: {
            backgroundColor: '#AAA'
        }
    };

    constructor() {
        super();
        this.state = {
            image: 'https://media.giphy.com/media/I6sQM3YnBizgQ/giphy.gif'
        }
    }



    playA() {

        Expo.Audio.setIsEnabledAsync(true)
        const soundA = new Expo.Audio.Sound();

        const play_soundA = (async () => {

            await soundA.loadAsync(require('../assets/pianoA.mp3'));
            await soundA.playAsync();

        })();

    }
    playB() {

        Expo.Audio.setIsEnabledAsync(true)
        const soundB = new Expo.Audio.Sound();

        const play_soundB = (async () => {

            await soundB.loadAsync(require('../assets/pianoB.mp3'));
            await soundB.playAsync();

        })();

    }
    playC() {

        Expo.Audio.setIsEnabledAsync(true)
        const soundC = new Expo.Audio.Sound();

        const play_soundC = (async () => {

            await soundC.loadAsync(require('../assets/pianoC.mp3'));
            await soundC.playAsync();

        })();

    }
    playD() {

        Expo.Audio.setIsEnabledAsync(true)
        const soundD = new Expo.Audio.Sound();

        const play_soundD = (async () => {

            await soundD.loadAsync(require('../assets/pianoD.mp3'));
            await soundD.playAsync();

        })();

    }
    playE() {

        Expo.Audio.setIsEnabledAsync(true)
        const soundE = new Expo.Audio.Sound();

        const play_soundE = (async () => {

            await soundE.loadAsync(require('../assets/pianoE.mp3'));
            await soundE.playAsync();

        })();

    }
    playF() {

        Expo.Audio.setIsEnabledAsync(true)
        const soundF = new Expo.Audio.Sound();

        const play_soundF = (async () => {

            await soundF.loadAsync(require('../assets/pianoF.mp3'));
            await soundF.playAsync();

        })();

    }
    playG() {

        Expo.Audio.setIsEnabledAsync(true)
        const soundG = new Expo.Audio.Sound();

        const play_soundG = (async () => {

            await soundG.loadAsync(require('../assets/pianoG.mp3'));
            await soundG.playAsync();

        })();

    }


    render() {

        let {image} = this.state;

        return (
            <View>
            


                <Image source={{
                    uri: image
                }} style={{
                    width: 420,
                    height: 490
                }} />

				<TouchableHighlight style={styles.keyC} onPress={this.playA}>
					<Text style={styles.pianoText}>A</Text>				
                </TouchableHighlight>
				<TouchableHighlight style={styles.keyD} onPress={this.playB}>
					<Text style={styles.pianoText}>B</Text>
				</TouchableHighlight>
				<TouchableHighlight style={styles.keyE} onPress={this.playC}>
					<Text style={styles.pianoText}>C</Text>
				</TouchableHighlight>
				<TouchableHighlight style={styles.keyF} onPress={this.playD}>
					<Text style={styles.pianoText}>D</Text>
				</TouchableHighlight>
				<TouchableHighlight style={styles.keyG} onPress={this.playE}>
					<Text style={styles.pianoText}>E</Text>
				</TouchableHighlight>
				<TouchableHighlight style={styles.keyA} onPress={this.playF}>
					<Text style={styles.pianoText}>F</Text>
				</TouchableHighlight>
				<TouchableHighlight style={styles.keyB} onPress={this.playG}>
					<Text style={styles.pianoText}>G</Text>
				</TouchableHighlight>
			</View>
        );
    }
}

const styles = StyleSheet.create({
    keyC: {
        width: 60,
        height: 200,
        top: 480,
        position: 'absolute',
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
    },
    keyD: {
        width: 60,
        height: 200,
        top: 480,
        left: 60,
        position: 'absolute',
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
    },
    keyE: {
        width: 60,
        height: 200,
        top: 480,
        left: 120,
        position: 'absolute',
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
    },
    keyF: {
        width: 60,
        height: 200,
        top: 480,
        left: 180,
        position: 'absolute',
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
    },
    keyG: {
        width: 60,
        height: 200,
        top: 480,
        left: 240,
        position: 'absolute',
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
    },
    keyA: {
        width: 60,
        height: 200,
        top: 480,
        left: 300,
        position: 'absolute',
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
    },
    keyB: {
        width: 60,
        height: 200,
        top: 480,
        left: 360,
        position: 'absolute',
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
    },
    container: {
        right: 10,
        top: 10,
        position: "absolute",
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: 50,
        height: 50
    },
    pianoText: {
        fontSize: 30,
        textAlign: 'center',
        paddingTop: 160

    }


});
