import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

export default class MainGame extends Component {
	static navigationOptions = {
		title: 'In Game'
	};
	render() {
		return(

			<View>
				<Text>Hello, and welcome</Text>
			</View>
		);
	}
}