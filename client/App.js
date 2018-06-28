import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Home from './app/scenes/Home'
import Other from './app/scenes/Other'

const RootStack = createStackNavigator(
	{
		Home: Home,
		Other: Other
	},
	{
		initialRouteName: 'Home'
	}
)

class App extends Component {
	render() {
		return <RootStack />
	}
}

export default App
