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

//方式1：es6創建组件
export default class LifecycleComponent extends Component{
    constructor(props){
        super(props);
        console.log("constructor");
        this.state={
            count:0,
        }
    }
    //组件将被加载
    componentWillMount(){
        console.log("componentWillMount");
    }
    //组件完成加载
    componentDidMount(){
        console.log("componentDidMount");
    }
    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps");
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate");
        return true;
    }
    componentWillUpdate(nextProps,nextState){
          console.log("componentWillUpdate");
    }

    componentDidUpdate(prevProps,prevState){
        console.log("componentDidUpdate");
     }
     componentWillUnmount(){
        console.log("componentWillUnmount");
     }
    render(){
        return <View>
        <Text
            style={{fontSize:20,backgroundColor:'red'}}
            onPress={()=>{
                this.setState({
                    count:this.state.count+1,
                })
            }}
        >Hellodas.{this.state.count}</Text>

        </View>;
    }
}
