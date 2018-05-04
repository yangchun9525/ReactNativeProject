import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    ListView,
    FlatList
} from 'react-native';

var REQUEST_URL = 'https://api.github.com/search/repositories?q=javascript&sort=stars';

export default class LoadNetData extends Component {
    //js组件的构造函数，js的生命周期
    constructor(props) {
        super(props);
        this.state = {
            //listView数据源
            dataSource: new ListView.DataSource({
                rowHasChanged: function (row1, row2) {
                    return row1 !== row2
                },
                sectionHeaderHasChanged: function (s1, s2) {
                    return s1 !== s2
                },
            }),
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

    //返回当前显示的view
    render() {
        //第一次加载等待的view
        if (!this.state.dataSource && !this.state.error) {
            return this.renderLoadingView();
        } else if (this.state.error) {
            //请求失败view
            return this.renderErrorView(this.state.errorInfo);
        }
        //加载数据

        return this.renderData();
    }

    //加载等待的view
    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                    Loading start...
                </Text>
            </View>
        );
    }

    //加载失败view
    renderErrorView(error) {

        return (
            <View style={styles.container}>
                <Text>
                    Fail: {error}
                </Text>
            </View>
        );
    }

    //获取到数据加载到控件上
    /**
     *       <ListView dataSource={this.state.dataSource}
     renderRow={this.renderItemView}/>
     */
    renderData() {
        return (
            <ScrollView style={
                {
                    paddingTop: 22,
                    paddingLeft: 5,
                    paddingBottom: 5,
                    paddingRight: 5
                }}>
                <Text style={{fontSize: 20}}>data111:</Text>
                <ListView dataSource={this.state.dataSource}
                          renderRow={this.renderItemView}/>
            </ScrollView>
        );
    }

    //返回itemView
    renderItemView(item) {
        return (
            <View>
                <Text style={{fontSize: 15, color: 'blue'}}>name: {item.name} ({item.stargazers_count} stars)</Text>
                <Text style={{fontSize: 13, color: 'black'}}>description: {item.description}</Text>
            </View>
        );
    }

    fetchData() {
        //这个是js的访问网络的方法
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    //复制数据源
                    dataSource: this.state.dataSource.cloneWithRows(responseData.items)
                });
            })
            .catch((error) => {
                this.setState({
                    error: true,
                    errorInfo: error
                })
            })
            .done();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

});
