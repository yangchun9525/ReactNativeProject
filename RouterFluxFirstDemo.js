import React, { Component } from 'react';
import { Text,View,TouchableOpacity } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';//引入包

import { Actions } from 'react-native-router-flux'; // New code

import {NavigationBar} from 'teaset';

export default class RouterFluxFirstDemo extends Component {
  render() {
    return (
      <View>
      <NavigationBar title='test'
                           style={{height:64}}
                           statusBarStyle='default'
                           rightView={
                               <TouchableOpacity >
                                   <Text>关闭</Text>
                               </TouchableOpacity>
                           }
            />
        <Text style={{backgroundColor:'white',marginTop:64}} onPress={() => Actions.second({'dataName':'小明','dataAge':'18'})}>1111111 RouterFirstFluxDemo</Text>
      </View>
    );
  }
}
