'use strict';

const url = "http://jbgw.troncell.com/api/v1/Sensingdevice/products?subkey=e1e949e8c3df4465be373589ae84bf1e";
let productData = {
    page: 1,
    pageSize: 500,
    totalCount: 121,
    data:
        []
}

// 访问登录接口 根据返回结果来划分action属于哪个type,然后返回对象,给reducer处理
export function getProductData() {
    console.log('获取产品数据');
    // return dispatch =>{
    //     getData();
    // }

    return dispatch => {
        dispatch(isGettingData());

        fetch(url, {
            method: "GET"
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log("success")
                // dispatch(getDataSuccess("success", productData))
                dispatch(getDataSuccess("success", responseData.data.data))
            })
            .catch((error) => {
                console.log("fail")
                console.log(error)
                setTimeout(() => {
                    dispatch(getDataFail("fail"))
                }, 1000)
            }).done()
    }

}

function isGettingData() {
    console.log("isGettingData")
    return {
        type: "getting",
        data: "isGettingData",
        isShowLoadingImg: "flex"
    }
}

function getDataSuccess(isSuccess, data) {
    console.log("getDataSuccess")
    return {
        type: isSuccess,
        data: data,
        isShowLoadingImg: "none"
    }
}

function getDataFail(isSuccess) {
    console.log("getDataFail")
    return {
        type: isSuccess,
        data: productData,
        isShowLoadingImg: "none"
    }
}