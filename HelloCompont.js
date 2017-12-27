/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

var name = '小明';
var age = '22';
export{name,age};
//方式1：es6創建组件
export default class HelloCompont extends Component{
    render(){
        return <Text style={{fontSize:20,backgroundColor:'red'}}>Hellodas.{this.props.name}</Text>;
    }
}

export function sum(a,b){
    return a+b;
}
//方式2：es5創建组件
//var HelloCompont = React.createClass({
//    render(){
//            return <Text style={{fontSize:40,backgroundColor:'red'}}>HelloCompont</Text>;
//        }
//})
//module.exports = HelloCompont;

//方式3：函数。无状态，不能使用this
//function HelloCompont(props){
//     return <Text style={{fontSize:40,backgroundColor:'green'}}>Hello.{props.name}</Text>;
//}
//module.exports = HelloCompont;
