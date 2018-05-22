import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    FlatList,
    Image,
    Platform,
    ToastAndroid,
    BackHandler
} from 'react-native';
import {connect} from 'react-redux'; // 引入connect函数
import ScreenUtil from '../util/ScreenUtil.js'
import ProgressBar from "react-native-progress/Bar";
import BaseView from "./BaseView";
import * as mainAction from "./actions/mainAction";

//http://jbgw.troncell.com/api/v1/Sensingdevice/products?subkey=3786d29681cb41fc8ccf708e74666f44
var url = "http://jbgw.troncell.com/api/v1/Sensingdevice/products?subkey=e1e949e8c3df4465be373589ae84bf1e";


class MainProduct extends BaseView {

    constructor(props) {
        super(props);
        // this.state = {
        //     data: [],
        //     refreshing: true, //初始化不刷新
        //     isShowLoadingImg: "flex",
        //     //网络请求状态
        //     error: false,
        //     errorInfo: ""
        // };
        const {mainProduct} = this.props;
        mainProduct();
    }

    //rn的生命周期，初始化的时候会执行
    componentDidMount() {
        //请求数据
        // this.fetchData();
    }

    onBackAndroid = () => {
        //到了主页了
        if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
            console.log("main")
            this.props.navigation.goBack();
            //最近2秒内按过back键，可以退出应用。
            return false;
        }
        this.lastBackPressed = Date.now();
        ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
        return true;
    };

    render() {

        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                width: "100%"
            }}>

                {/*<TouchableWithoutFeedback*/}
                {/*onPress={() => {*/}
                {/*this.props.navigation.goBack();*/}
                {/*}}>*/}
                {/*<Image*/}
                {/*resizeMode={'contain'}*/}
                {/*style={{*/}
                {/*width: ScreenUtil.scaleSize(68),*/}
                {/*height: ScreenUtil.scaleSize(68),*/}
                {/*marginTop: ScreenUtil.scaleSize(50),*/}
                {/*marginLeft: ScreenUtil.scaleSize(60)*/}
                {/*}}*/}
                {/*source={require('../picture/back_btn_gray.png')}/>*/}
                {/*</TouchableWithoutFeedback>*/}

                <Image
                    resizeMode={'contain'}
                    style={{
                        alignSelf: 'center',
                        alignItems: 'center',
                        flex: 1,
                        justifyContent: 'center',
                        width: ScreenUtil.scaleSize(200),
                        height: ScreenUtil.scaleSize(100),
                        marginTop: ScreenUtil.scaleSize(50),
                        marginLeft: ScreenUtil.scaleSize(60),
                        // display: this.state.isShowLoadingImg
                        display: this.props.isShowLoadingImg
                    }}
                    source={require('../picture/loading.gif')}/>

                {/*<Image*/}
                {/*resizeMode={'contain'}*/}
                {/*style={{*/}
                {/*width: ScreenUtil.scaleSize(68),*/}
                {/*height: ScreenUtil.scaleSize(68),*/}
                {/*marginTop: ScreenUtil.scaleSize(50),*/}
                {/*marginLeft: ScreenUtil.scaleSize(60),*/}
                {/*display: this.state.refreshing*/}
                {/*}}*/}
                {/*source={require('../picture/login_img.png')}/>*/}

                <View style={{
                    alignSelf: 'center',
                    alignItems: 'center',
                    flex: 1,
                    justifyContent: 'center',
                    width: "100%"
                }}>
                    <FlatList
                        style={{
                            paddingLeft: ScreenUtil.scaleSize(70),
                            paddingRight: ScreenUtil.scaleSize(70),
                            width: "100%",
                            alignSelf: 'center',
                        }}
                        ref={(flatList) => this._flatList = flatList}
                        // ListHeaderComponent={this._header}                    //头部布局
                        // ListFooterComponent={this._footer}                //底部布局
                        // ItemSeparatorComponent={this._separator}         //分割线的布局
                        showsVerticalScrollIndicator={false}        //是否显示滚动条
                        renderItem={this._renderItem}                  //每一个item的布局
                        onRefresh={this.refreshing}            //如果设置了此选项，则会在列表头部添加一个标准的RefreshControl控件，以便实现“下拉刷新”的功能。同时你需要正确设置refreshing属性。
                        keyExtractor={this._keyExtractor}            //每一行的key
                        refreshing={true}                      //在等待加载新数据时将此属性设为true，列表就会显示出一个正在加载的符号。
                        //决定当距离内容最底部还有多远时触发onEndReached回调。注意此参数是一个比值而非像素单位。比如，0.5表示距离内容最底部的距离为当前列表可见长度的一半时触发。
                        onEndReachedThreshold={0}
                        onEndReached={
                            this._onload
                        }
                        numColumns={4}
                        //每一行外层的布局
                        // columnWrapperStyle={{borderWidth: 2, borderColor: 'black'}}
                        //是否垂直
                        horizontal={false}
                        //getItemLayout是一个可选的优化，用于避免动态测量内容尺寸的开销，不过前提是你可以提前知道内容的高度。如果你的行高是固定的，getItemLayout用起来就既高效又简单，类似下面这样：
                        getItemLayout={(data, index) => (
                            {length: 100, offset: (100 + 2) * index, index}
                        )}
                        // data={data}
                        // data={this.state.data}
                        data={this.props.data.data}
                    >
                    </FlatList>
                </View>
            </View>
        )
    }

    //此函数用于为给定的item生成一个不重复的key
    //若不指定此函数，则默认抽取item.key作为key值。若item.key也不存在，则使用数组下标index。
    _keyExtractor = (item, index) => index;

    _renderItem = (item) => {
        // console.log(item);
        var txt = item.item.title;
        var bgColor = item.index % 2 == 0 ? 'red' : 'blue';
        return (
            <TouchableOpacity style={{
                width: ScreenUtil.scaleSize(480),
                marginTop: ScreenUtil.scaleSize(50),

            }} onPress={() => {
                const {navigate} = this.props.navigation;

                navigate('ProductDetail', {
                    detailData: item,
                    id: item.item.id
                });
            }}>
                <Image
                    style={{
                        alignSelf: 'center',
                        justifyContent: 'center',
                        width: ScreenUtil.scaleSize(450),
                        height: ScreenUtil.scaleSize(450),
                        // backgroundColor: 'gray'
                    }}
                    source={{uri: item.item.picUrl}}
                    resizeMode={'center'}
                    indicator={ProgressBar}
                ></Image>
                <View style={{
                    // backgroundColor: bgColor,
                    alignSelf: 'center',
                    alignItems: 'center',
                    flex: 1,
                    justifyContent: 'center'
                }}>
                    <Text>{txt}</Text>
                </View>
            </TouchableOpacity>
        )
        // <Text style={[{width: 200, height: 100, backgroundColor: bgColor}, styles.txt]}>{txt}</Text>
    }

    _header = () => {
        return <Text style={[styles.txt, {backgroundColor: 'green'}]}>这是头部</Text>;
    }

    _footer = () => {
        return <Text style={[styles.txt, {backgroundColor: 'green'}]}>这是尾部</Text>;
    }

    _separator = () => {
        return <View style={{height: 2, backgroundColor: 'yellow'}}/>;
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
});

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(
    (state) => ({
        type: state.mainProd.type,
        data: state.mainProd.data,
        isShowLoadingImg: state.mainProd.isShowLoadingImg
    }),
    (dispatch) => ({
        mainProduct: () => dispatch(mainAction.getProductData())
    })
)(MainProduct)