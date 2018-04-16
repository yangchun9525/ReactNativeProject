'use strict';
import * as types from '../constants/loginTypes';

const initialState = {
    status: '点击登录',
    isSuccess: false,
    user: {
        name: 'lisi',
        age: 24,
    },
}

export default function loginIn(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_IN_DOING:
            console.log("正在登陆");
            console.log( state);
            console.log("---------------")
            return {
                ...state,
                status: '正在登陆',
                isSuccess: false,
                user: action.user,
            }
            break;
        case types.LOGIN_IN_DONE:
            console.log("登陆成功");
            console.log(state);
            console.log("---------------")
            return {
                ...state,
                status: '登陆成功',
                isSuccess: true,
                user: action.user,
            }
            break;
        case types.LOGIN_IN_ERROR:
            console.log("登录出错");
            console.log( state);
            console.log("---------------")
            return {
                ...state,
                status: '登录出错',
                isSuccess: true,
                user: action.user,
            }
            break;
        default:
            console.log("default");
            console.log( state);
            console.log("---------------")
            return state;
    }
}
