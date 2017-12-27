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
  View,
  Image
} from 'react-native';

export default class RefTest extends Component{
    state={
      size:40,
    }
    constructor(props){
      super(props);
      //默认state
      // this.state = {
      //   size:80,
      // }
    }
    getSize(){
      return this.state.size;
    }
    render(){
        return <View>
          <Text
            style={{fontSize:20}}
            onPress={()=>{
              this.setState({
                size:this.state.size+10
              })
            }}
          >吹啊吹啊</Text>

          <Text
            style={{fontSize:20}}
            onPress={()=>{
              this.setState({
                size:this.state.size-10
              })
            }}
          >放气</Text>
          <Image
            style={{width:this.state.size,height:this.state.size}}
            source={require('./qiqiu.png')}/>
        </View>;
    }
}
