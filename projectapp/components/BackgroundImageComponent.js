import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity, ActivityIndicator, Image, Button, Text, View } from 'react-native';
import { ImagePicker } from 'expo';


export default class CameraRollComponent extends Component {

    static navigationOptions = {
        title: 'Select Background'
    };

    constructor() {
        super();
        this.state = {
            image: null,
        }
    }

    render() {
        let {image} = this.state;

        return (
            <View style={styles.container}>
            <TouchableOpacity onPress={this._pickImage}>
     		 <Image
            style={styles.button}
            source={require('../assets/laharl3.jpg')}
            />
  		  </TouchableOpacity>

            {!image && <ActivityIndicator />}
            {image &&
            <Image source={{
                uri: image
            }} style={{
                width: 400,
                height: 400
            }} />}
            </View>
        );
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [5, 5],
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({
                image: result.uri
            });
        }

    }
}

const styles = StyleSheet.create({
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
});
