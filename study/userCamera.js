'use strict';
import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    View
} from 'react-native';
// import { RNCamera } from 'react-native-camera';

export default class BadInstagramCloneApp extends Component {
    state={
        imagePath:"file:///data/user/0/com.project/cache/Camera/b118110b-aff4-4bf6-b344-ea5b2b1addf6.jpg",
    }

    render() {
        return (
            <View style={styles.container}>
                {/*<RNCamera*/}
                    {/*ref={ref => {*/}
                        {/*this.camera = ref;*/}
                    {/*}}*/}
                    {/*style = {styles.preview}*/}
                    {/*type={RNCamera.Constants.Type.back}*/}
                    {/*flashMode={RNCamera.Constants.FlashMode.on}*/}
                    {/*permissionDialogTitle={'Permission to use camera'}*/}
                    {/*permissionDialogMessage={'We need your permission to use your camera phone'}*/}
                {/*/>*/}

                <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
                    <Image style={{width: 100, height: 100, marginBottom: 20}} source={{uri: this.state.imagePath}}></Image>
                    <TouchableOpacity
                        onPress={this.takePicture.bind(this)}
                        style = {styles.capture}
                    >
                        <Text style={{fontSize: 14}}> SNAP </Text>
                    </TouchableOpacity>
                </View>

            </View>

        );
    }

    takePicture = async () => {
        try {
            const data = await this.camera.takePictureAsync();
            console.log('Path to image: ' + data.uri);
            alert("拍照成功！图片保存地址：\n"+data.uri)
            /*图片本地路径*/
            this.setState({
                imagePath: data.uri,
            });
        } catch (err) {
            // console.log('err: ', err);
        }
    };
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
        },
        preview: {
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center'
        },
        capture: {
            flex: 0,
            backgroundColor: '#fff',
            borderRadius: 5,
            color: '#000',
            padding: 10,
            margin: 40
        }
    });
