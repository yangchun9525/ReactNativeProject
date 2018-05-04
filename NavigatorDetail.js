import React, {Component} from 'react';
import {Text} from 'react-native';

export default class NavigatorDetail extends Component {
    static navigationOptions = ({navigation, screenProps}) => ({
        // 这里面的属性和App.js的navigationOptions是一样的。
        headerTitle: navigation.state.params ? navigation.state.params.headerTitle : 'Detail1',
        headerRight: (
            <Text style={{color: 'red', marginRight: 20}}
                  onPress={() => navigation.state.params ? navigation.state.params.navigatePress() : null}>我的</Text>
        ),
        gestureResponseDistance: {horizontal: 300},

    });

    render() {
        return (
            <Text>NavigatorDetail 跳转过来的界面</Text>
        );
    }
}
