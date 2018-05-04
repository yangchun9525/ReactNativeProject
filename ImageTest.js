/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
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
 http://img04.sogoucdn.com/app/a/100520024/9c10ac349b8c2a1281511265f636381f
 **/
export default class ImageTest extends Component {

    render() {
        return (
            <View>
                <Image
                    resizeMode={'cover'}
                    style={{width: 450, height: 150, borderWidth: 1}}
                    source={require('./qiqiu.png')}/>

                <Image
                    resizeMode={'contain'}
                    style={{width: 450, height: 150, borderWidth: 1}}
                    source={require('./qiqiu.png')}/>

                <Image
                    resizeMode={'stretch'}
                    style={{width: 450, height: 150, borderWidth: 1}}
                    source={require('./qiqiu.png')}/>

                <Image
                    resizeMode={'center'}
                    style={{width: 450, height: 150, borderWidth: 1}}
                    source={require('./qiqiu.png')}/>
            </View>)
    }
}
