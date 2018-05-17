import React from 'react';
// 初始化StackNavigator
import {
    StackNavigator,
} from 'react-navigation';

import login from "../useApi/login";
import mainProduct from "../useApi/mainProduct";
import productDetail from "../useApi/productDetail";

export default MyApp = StackNavigator({
    // 将TabNavigator包裹在StackNavigator里面可以保证跳转页面的时候隐藏tabbar
    Login: {
        screen: login,
        navigationOptions:({navigation,screenProps}) => ({
            header:null,
        }),
    },
    // 将需要跳转的页面注册在这里，全局才可以跳转
    MainProduct: {
        screen: mainProduct,
        navigationOptions:({navigation,screenProps}) => ({
            header:null,
        })
    },
    // 将需要跳转的页面注册在这里，全局才可以跳转
    ProductDetail: {
        screen: productDetail,
        navigationOptions:({navigation,screenProps}) => ({
            header:null,
        })
    },
}, {});
