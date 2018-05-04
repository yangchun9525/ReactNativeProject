import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

// import NavigatorFirst from './NavigatorFirst';

export default class NavigatorSecond extends Component {
    render() {
        return (
            <Text onPress={() => {
                const {navigate} = this.props.navigation;
                navigate('NavigatorDetail');
            }}>Second 点击跳转</Text>
        );
    }
}
