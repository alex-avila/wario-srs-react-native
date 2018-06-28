import React, { Component } from 'react'
import { Button, View, Text } from 'react-native'

class Other extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('otherParam', 'A Nested Details Screen'),
        };
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Other</Text>
                <Button
                    title="Go to Other... again"
                    onPress={() => this.props.navigation.push('Other')}
                />
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        )
    }
}

export default Other