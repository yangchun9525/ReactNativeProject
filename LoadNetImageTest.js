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
/**
  图片填充属性：
      cover默认
      contain
      stretch
      repeat只在ios上有效
      center

      加载网络图片必须指定宽高
      http://img04.sogoucdn.com/app/a/100520024/9c10ac349b8c2a1281511265f636381f

      加载原生资源

      使用文件系統中的图片？？
        storage/sdcard/Download/2.jpg

**/
export default class LoadNetImageTest extends Component{

    render(){
        return(
        <View>
        <Text>22112111</Text>
          <Image
            style={{width:250,height:350,borderWidth:1}}
            source={{uri:'http://img04.sogoucdn.com/app/a/100520024/9c10ac349b8c2a1281511265f636381f'}}/>

          <Image
            style={{width:250,height:250,borderWidth:1}}
            source={{uri:'file:///storage/sdcard/Download/2.jpg'}}/>
        </View>)
    }
}
