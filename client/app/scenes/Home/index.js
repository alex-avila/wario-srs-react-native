import React, { Component } from 'react'
import { Button, View, Text } from 'react-native'

class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home</Text>
                <Button
                    title="Go to Other"
                    onPress={() => this.props.navigation.navigate('Other')}
                />
            </View>
        )
    }
}

export default Home