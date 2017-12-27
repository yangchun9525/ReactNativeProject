/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component,PropTypes } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class PropsTest extends Component{
  //默认属性
    static defaultProps={
      name:'小红',
      age:'16'
    }
    //这里判断属性类型不行？？
    // static propTypes={
    //   name:PropTypes.string
    // }
    render(){
        return <Text style={{fontSize:20,backgroundColor:'red'}}>Hello.{this.props.name},age:{this.props.age}</Text>;
    }
}
