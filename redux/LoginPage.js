import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import {connect} from 'react-redux'; // 引入connect函数
import *as loginAction from './actions/loginAction';// 导入action方法
import {NavigationActions} from 'react-navigation';

// const resetAction = NavigationActions.reset({
//     index: 0,
//     actions: [
//         NavigationActions.navigate({routeName: 'Main'})
//     ]
// })

class LoginPage extends Component {
    // static navigationOptions = {
    //     title: 'LoginPage',
    // };

    // shouldComponentUpdate(nextProps, nextState) {
    //     // 登录完成,切成功登录
    //     if (nextProps.status === '登陆成功' && nextProps.isSuccess) {
    //         // this.props.navigation.dispatch(resetAction)
    //         return false;
    //     }
    //     return true;
    // }

    render() {
        const {login22} = this.props;
        return (
            <View style={styles.container}>
                <Text>状态: {this.props.status}
                </Text>
                <TouchableOpacity onPress={() => login22()} style={{marginTop: 50}}>
                    <View style={styles.loginBtn}>
                        <Text>登录:{this.props.status}++{this.props.isSuccess == true ? "true":"false"}++{this.props.user.name}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF'
    },
    loginBtn: {
        borderWidth: 1,
        padding: 5,
    }
});

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(
    (state) => ({
        status: state.loginIn3.status,
        isSuccess: state.loginIn3.isSuccess,
        user: state.loginIn3.user,
    }),
    (dispatch) => ({
        login22: () => dispatch(loginAction.login()),
    })
)(LoginPage)
