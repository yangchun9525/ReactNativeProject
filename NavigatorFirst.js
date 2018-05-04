import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

// import NavigatorSecond from "./NavigatorSecond";

export default class NavigatorFirst extends Component {

    render() {
        return (
            <Text onPress={() => {
                const {navigate} = this.props.navigation;
                //使用routers.js中定义的NavigatorDetail进行跳转
                navigate('NavigatorDetail', {
                    headerTitle: '我是修改后的文字'
                });
            }}>First 点击跳转</Text>
        );
    }
}
