import React, {Component} from 'react';
import {Text} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';//引入包

export default class RouterFluxSecondDemo extends Component {
    //默认属性
    static defaultProps = {
        dataName: '小红',
        dataAge: '161'
    }

    render() {
        console.log(this.props);
        return (
            <Text style={{
                fontSize: 20,
                backgroundColor: 'red',
                marginTop: 64
            }}>姓名: {this.props.dataName},年龄:{this.props.dataAge}</Text>
        );
    }
}
