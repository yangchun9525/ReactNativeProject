'use strict';

const url = "http://jbgw.troncell.com/api/v1/Sensingdevice/products?subkey=e1e949e8c3df4465be373589ae84bf1e";
// 后台请求到的数据
let productData = {
    page: 1,
    pageSize: 500,
    totalCount: 121,
    data:
        [{ id: 4137,
            itemId: '304 ',
            num: 0,
            groupId: 39,
            title: '魅惑心机眉粉笔',
            subTitle: '简单一只打造流行的自然柔和眉形。粉棒型眉笔',
            price: 108,
            prom_Price: 0,
            barcode: null,
            salesVolume: 0,
            keywords: null,
            picUrl: 'http://jbgw.troncell.com/uploads/Customer/39/Products/2018060306341248203478.png',
            likeCount: 0,
            description: null,
            orderNumber: 0,
            isFromBrand: true,
            sellerId: null,
            outerId: null,
            fromType: 'Platform',
            groupQrCodeInfo: null,
            hasRealSkus: true,
            propImgs:
                [ { propertyName: '110:1957:色号:自然棕',
                    imageUrl: 'uploads/Customer/39/Products/2018060307164157585816.png' },
                    { propertyName: '110:1958:色号:粉棕',
                        imageUrl: 'uploads/Customer/39/Products/2018060307182521647412.png' },
                    { propertyName: '110:1959:色号:橄榄棕',
                        imageUrl: 'uploads/Customer/39/Products/2018060307195013831438.png' } ],
            categoryIds: [ 212, 221, 323 ],
            propValueIds: [],
            tags: [],
            skus:
                [ { id: 6356,
                    itemId: '304 ',
                    skuId: '569',
                    quantity: 0,
                    barcode: null,
                    auditStatus: 3,
                    propsName: '105:1270:含量（中文）:2g;106:1970:商品名称（大）:魅惑心机眉粉笔;110:1957:色号:自然棕;113:1233:原産国（中文）:日本',
                    propValueIds: null,
                    title: '魅惑心机眉粉笔',
                    price: 108,
                    prom_Price: 0,
                    salesVolume: 0,
                    likeCount: 0,
                    keywords: null,
                    picUrl: 'http://jbgw.troncell.com/uploads/Customer/39/Products/2018060307164157585816.png',
                    description: '柔软笔头，兼具眉笔的易上手和眉粉的自然妆感，仅用一支即可简单实现。\r\n眉粉笔，贴合的刷毛长度，打造浓淡适宜的自然柔和眉型。\r\n不易脱妆的服贴配方，密集且持续维持眉型。',
                    outerId: '4932554045311 ',
                    orderNumber: 0,
                    tags: [],
                    fromType: 'Platform',
                    colorName: null,
                    deleted: false,
                    onlineStoreInfos:
                        [ { id: 7454,
                            skuId: 6356,
                            storeId: null,
                            type: 0,
                            onlineStoreType: 'MyStore',
                            pid: null,
                            price: null,
                            inventory: null,
                            qrcode: 'http://japan-beauty-gateway.com/zst/product/xiangqing.html?id=304&storeid=11100111' } ],
                    ageScope: null,
                    gender: null,
                    rfidCode: null,
                    price2: null }]}]
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
                // console.log( responseData.data.data);
                dispatch(getDataSuccess("success", responseData.data))
            })
            .catch((error) => {
                console.log("fail")
                console.log(error)
                // setTimeout(->{})
                dispatch(getDataFail("fail"))
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