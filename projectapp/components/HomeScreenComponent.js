import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Button } from 'react-native';

export default class HomeScreenComponent extends Component {
	static navigationOptions = {
		title: 'Welcome'
	};
	render() {
		const {navigate} = this.props.navigation;
		return(

			<View>
				<Text>Hello, and welcome</Text>
				<Button
					onPress={() => navigate('Game')}
					title="Play"
				/>
			</View>
		);
	}
}