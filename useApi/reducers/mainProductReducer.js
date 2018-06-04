'use strict';

const initialState = {
    status: '获取',
    isSuccess: false,
    data: {

    },
    isShowLoadingImg:"none"
}

export default function main(state = initialState, action) {
    console.log(action.type)
    switch (action.type) {
        case "success":
            console.log("获取完成");
            console.log(action.data)
            console.log("---------------")
            return {
                ...state,
                status: '获取完成',
                isSuccess: true,
                data: action.data,
                isShowLoadingImg:"none"
            }
            break;
        case "fail":
            console.log("获取失败");
            console.log("---------------")
            return {
                ...state,
                status: '获取失败',
                isSuccess: false,
                data: action.data,
                isShowLoadingImg:"none"
            }
            break;
        case "getting":
            console.log("获取中");
            console.log("---------------")
            return {
                ...state,
                status: '获取中',
                isSuccess: false,
                user: action.data,
                isShowLoadingImg:"flex"
            }
            break;
        default:
            console.log("default");
            console.log( state);
            console.log("---------------")
            return state;
    }
}
