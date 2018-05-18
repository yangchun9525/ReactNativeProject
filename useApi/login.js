import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    Platform,
    ToastAndroid,
    BackHandler
} from 'react-native';
import ScreenUtil from '../util/ScreenUtil.js'
import mainProduct from "./mainProduct";
import {NavigationActions} from 'react-navigation'
import BaseView from "./BaseView";

var prop;
export default class Login extends BaseView {

    constructor(props) {
        super(props);
        prop = props;
    }

    // onBackAndroid  () {
    //     console.log("44444")
    //     console.log(this.lastBackPressed && true)
    //     console.log(this.lastBackPressed + 2000 >= Date.now())
    //     console.log(this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now())
    //     if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
    //         console.log("login")
    //         prop.navigation.goBack();
    //         //最近2秒内按过back键，可以退出应用。
    //         return false;
    //     }
    //     this.lastBackPressed = Date.now();
    //     ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
    //     //到了主页了
    //
    //     return true;
    // }
    /**
     * this其实就是该界面的上下文，所以每次使用的时候数据会进行更新
     * 如果使用上一种方法时，不加bind(this)，则作用域仅仅是该方法的，如果使用了bind，则是使用该方法的控件的上下文，
     * 上面是es5写法，下面是es6写法，es6写法自动将上下文赋值
     * @returns {boolean}
     */
    onBackAndroid = (key) => {
        console.log("444442233")
        console.log(key)
        console.log(this.lastBackPressed && true)
        console.log(this.lastBackPressed + 2000 >= Date.now())
        console.log(this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now())
        if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
            console.log("login")
            prop.navigation.goBack();
            //最近2秒内按过back键，可以退出应用。
            return false;
        }
        this.lastBackPressed = Date.now();
        ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
        //到了主页了

        return true;
    }

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
                            placeholder="输入帐号"
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
                            placeholder="输入密码"
                            onChangeText={(text) => this.setState({text})}
                        />
                    </View>

                    <TouchableOpacity onPress={() => {
                        const {navigate} = this.props.navigation;

                        // navigate('MainProduct');
                        let resetActiom = NavigationActions.reset({
                            index: 0,//默认打开actions中的第几个页面
                            actions: [//actions是页面集合
                                //NavigationActions.navigate({ routeName: 'One' }),
                                //NavigationActions.navigate({ routeName: 'Tow' }),
                                NavigationActions.navigate({routeName: 'MainProduct'})//这里有几个就保留几个，点击完成后就会重构导航器
                            ]
                        })
                        this.props.navigation.dispatch(resetActiom)

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

