import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    FlatList,
    Image
} from 'react-native';
import ScreenUtil from '../util/ScreenUtil.js'
import ProgressBar from "react-native-progress/Bar";
//http://jbgw.troncell.com/api/v1/Sensingdevice/products?subkey=3786d29681cb41fc8ccf708e74666f44
var url = "http://jbgw.troncell.com/api/v1/Sensingdevice/products?subkey=3786d29681cb41fc8ccf708e74666f44";
export default class MainProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            refreshing: false, //初始化不刷新
            //网络请求状态
            error: false,
            errorInfo: ""
        };
    }

    //rn的生命周期，初始化的时候会执行
    componentDidMount() {
        //请求数据
        this.fetchData();
    }

    fetchData() {
        //这个是js的访问网络的方法
        fetch(url, {
            method: "GET"
        })
            .then((response) => response.json())
            .then((responseData) => {
                // console.log( responseData.data.data);
                this.setState({
                    //复制数据源
                    data: responseData.data.data
                });
            })
            .catch((error) => {
                console.log("error:" + error);
                this.setState({
                    error: true,
                    errorInfo: error
                })
            })
            .done();
    }

    render() {
        // var data = [];
        // for (var i = 0; i < 10; i++) {
        //     data.push({key: i, title: i + ''});
        //     console.log(data[i]);
        // }
        return (
            <View style={styles.container}>
                <FlatList
                    ref={(flatList) => this._flatList = flatList}
                    ListHeaderComponent={this._header}
                    ListFooterComponent={this._footer}
                    ItemSeparatorComponent={this._separator}
                    renderItem={this._renderItem}
                    onRefresh={this.refreshing}
                    keyExtractor={this._keyExtractor}
                    refreshing={false}
                    onEndReachedThreshold={0}
                    onEndReached={
                        this._onload
                    }
                    numColumns={3}
                    columnWrapperStyle={{borderWidth: 2, borderColor: 'black', paddingLeft: 20}}

                    //horizontal={true}

                    getItemLayout={(data, index) => (
                        {length: 100, offset: (100 + 2) * index, index}
                    )}
                    // data={data}
                    data={this.state.data}
                >
                </FlatList>

            </View>
        )
    }

    //此函数用于为给定的item生成一个不重复的key
    //若不指定此函数，则默认抽取item.key作为key值。若item.key也不存在，则使用数组下标index。
    _keyExtractor = (item, index) => index;

    _renderItem = (item) => {
        console.log(item);
        var txt = item.item.title;
        var bgColor = item.index % 2 == 0 ? 'red' : 'blue';
        return (
            <View>
                <Image
                    style={{width: 200, height: 100}}
                    source={{uri: item.item.picUrl}}
                    resizeMode={'center'}
                    indicator={ProgressBar}
                ></Image>
                <Text style={[{width: 200, height: 100, backgroundColor: bgColor}, styles.txt]}>{txt}</Text>
            </View>
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