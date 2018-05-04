import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';
import ScreenUtil from '../util/ScreenUtil.js'

export default class Login extends Component {

    render() {

        return (
            <View style={styles.container}>
                <Image
                    resizeMode={'cover'}
                    style={{width: "50%", height: "100%"}}
                    source={require('../picture/login_img.png')}/>

                <View style={styles.rightContainer}>
                    <Image
                        resizeMode={'contain'}
                        style={{width: ScreenUtil.scaleSize(280), height: ScreenUtil.scaleSize(118)}}
                        source={require('../picture/login_logo.png')}/>

                    <View style={styles.textInputViewStyle}>
                        <TextInput
                            style={styles.textInputStyle}
                            placeholder="输入帐号111"
                            maxLength={10}
                            multiline={true}
                            underlineColorAndroid='transparent'
                            onChangeText={(text) => this.setState({text})}
                        />
                    </View>

                    <View style={styles.textInputViewStyle}>
                        <TextInput
                            style={styles.textInputStyle}
                            maxLength={10}
                            secureTextEntry={true}
                            placeholder="输入密码1"
                            onChangeText={(text) => this.setState({text})}
                        />
                    </View>

                    <TouchableOpacity onPress={() => {
                        const {navigate} = this.props.navigation;

                        navigate('MainProduct');
                    }}>
                        <View style={styles.textLoginViewStyle}>
                            <Text style={styles.textLoginStyle}>登录</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF'
    },
    rightContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    //包裹输入框View样式
    textInputViewStyle: {
        //设置宽度减去30将其居中左右便有15的距离
        width: ScreenUtil.scaleSize(360),
        height: ScreenUtil.scaleSize(68),
        //设置圆角程度
        borderRadius: ScreenUtil.scaleSize(10),
        //设置边框的颜色
        borderColor: '#959595',
        //设置边框的宽度
        borderWidth: 1,
        //内边距
        paddingLeft: 10,
        paddingRight: 10,
        //外边距
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        //设置相对父控件居中
        alignSelf: 'center',


    },
    //输入框样式
    textInputStyle: {
        padding: 0,
        width: ScreenUtil.scaleSize(300),
        height: ScreenUtil.scaleSize(60),
        // paddingLeft: 8,
        backgroundColor: '#ffffff',
        // alignSelf: 'center',
        //根据不同平台进行适配
        // marginTop: Platform.OS === 'ios' ? 4 : 8,
    },
    //登录按钮View样式
    textLoginViewStyle: {
        width: ScreenUtil.scaleSize(360),
        height: ScreenUtil.scaleSize(68),
        backgroundColor: '#B61724',
        borderRadius: ScreenUtil.scaleSize(30),
        marginTop: ScreenUtil.scaleSize(30),
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    //登录Text文本样式
    textLoginStyle: {
        fontSize: ScreenUtil.setSpText(28),
        color: 'white',
    },
});

