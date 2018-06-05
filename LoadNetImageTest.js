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
    Dimensions,
    ScrollView,
} from 'react-native';
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';

/**
 图片填充属性：
 cover默认  展示一部分，这展示的一部分是正常显示的
 contain    将图片进行压缩，然后展示图片的全部
 stretch    将图片不进行压缩，然后展示图片的全部
 repeat只在ios上有效
 center     展示居中

 加载网络图片必须指定宽高
 http://wimg.spriteapp.cn/ugc/2018/01/09/5a549188d56c3_1.jpg
 http://img04.sogoucdn.com/app/a/100520024/9c10ac349b8c2a1281511265f636381f
 http://wimg.spriteapp.cn/x/640x400/ugc/2017/10/20/59e92c2e514a7_1.jpg

 加载原生资源

 使用文件系統中的图片？？
 storage/sdcard/Download/2.jpg
 http://wimg.spriteapp.cn/ugc/2018/01/16/5a5da40fadc3c_1.jpg
 **/


let {width, height} = Dimensions.get('window');

export default class LoadNetImageTest extends Component {

    constructor(props) {
        super(props);
        console.log('屏幕高度' + height);
        console.log('屏幕宽度' + width);
    }

    render() {
        return (
            <ScrollView>
                <Text>22112111333</Text>

                <Image
                    style={{width: width - 20, height: height*2,backgroundColor:"#ffffff"}}
                    source={{uri: 'http://jbgw.troncell.com/uploads/Customer/39/Ads/resource2018032016005785602805.jpg'}}
                    resizeMode={'center'}
                    indicator={ProgressBar}
                >
                </Image>

                <Image
                    style={{width: 250, height: 350, borderWidth: 1}}
                    resizeMode={'contain'}
                    source={{uri: 'http://img04.sogoucdn.com/app/a/100520024/9c10ac349b8c2a1281511265f636381f'}}/>

                <Image
                    style={{width: 250, height: 250, borderWidth: 1}}
                    source={{uri: 'file:///storage/sdcard/Download/2.jpg'}}/>
            </ScrollView>)
    }
}
const styles = StyleSheet.create({
    imageViewStyle: {
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    longImageViewStyle: {
        position: 'absolute',
        bottom: 0,

        height: 40,
        width: width,
        backgroundColor: 'rgba(88, 87, 86, 0.3)',
    },
    longImageTextStyle: {
        fontSize: 18,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 10,
    },
});
