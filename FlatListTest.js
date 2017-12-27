import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Text,
    Button,
    TextInput,
    TouchableOpacity,
} from 'react-native';

export default class FlatListTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this._sourceData,
      refreshing: false, //初始化不刷新
      text: ''//跳转的行
    };
  }

  _header = function () {
    return (
      <Text style={{fontWeight: 'bold', fontSize: 20}}>热门电影</Text>
    );
  }

  _footer = () => (
    <Text style={{fontSize: 14, alignSelf: 'center'}}>到底啦，没有啦！</Text>
  )

  createEmptyView() {
    return (
      <Text style={{fontSize: 40, alignSelf: 'center'}}>还没有数据哦！</Text>
    );
  }

  //此函数用于为给定的item生成一个不重复的key
  //若不指定此函数，则默认抽取item.key作为key值。若item.key也不存在，则使用数组下标index。
  _keyExtractor = (item, index) => index;

  itemClick(item, index) {
    alert('点击了第' + index + '项，电影名称为：' + item.name);
  }

  _renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={this.itemClick.bind(this, item, index)}>
        <Text style={flatListStyles.item}>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  //点击按钮跳转
  onButtonPress() {
    //viewPosition参数：0表示顶部，0.5表示中部，1表示底部
    console.log(typeof(parseInt(this.state.text)));
    console.log(typeof(this.state.text));
    var index = parseInt(this.state.text);
    this._flatList.scrollToIndex({viewPosition: 0, index: parseInt(this.state.text)});
    // this._flatList.scrollToOffset({ animated: true, offset: 2000 });
  };

  onBtnPress2Botton() {
    this._flatList.scrollToEnd();
  }

  _sourceData = [
    {name: '大护法'},
    {name: '绣春刀II：修罗战场'},
    {name: '神偷奶爸3'},
    {name: '神奇女侠'},
    {name: '摔跤吧，爸爸'},
    {name: '悟空传'},
    {name: '闪光少女'},
    {name: '攻壳机动队'},
    {name: '速度与激情8'},
    {name: '蝙蝠侠大战超人'},
    {name: '攻壳机动队'},
    {name: '速度与激情8'},
    {name: '蝙蝠侠大战超人'}
  ]

  _newData = [{name: '我是新添加的数据1'},
    {name: '我是新添加的数据2'},
    {name: '我是新添加的数据3'}]

  render() {
    return (
      <View style={flatListStyles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <TextInput
            style={{flex: 1}}
            placeholder="请输入要跳转的行号"
            onChangeText={(text) => this.setState({text})}
          />
          <Button title="跳转到行" onPress={this.onButtonPress.bind(this)} color={'skyblue'}/>
          <Button title="跳转到底部" onPress={this.onBtnPress2Botton.bind(this)} color={'green'}/>

        </View>
        <FlatList
          data={this.state.data}
          //使用 ref 可以获取到相应的组件
          ref={(flatList) => this._flatList = flatList}
          ListHeaderComponent={this._header}//header头部组件
          ListFooterComponent={this._footer}//footer尾部组件
          ItemSeparatorComponent={ItemDivideComponent}//分割线组件
          //空数据视图,可以是React Component,也可以是一个render函数，或者渲染好的element。
          ListEmptyComponent={this.createEmptyView()}
          keyExtractor={this._keyExtractor}
          //是一个可选的优化，用于避免动态测量内容尺寸的开销，不过前提是你可以提前知道内容的高度。
          //如果你的行高是固定的，getItemLayout用起来就既高效又简单.
          //注意如果你指定了SeparatorComponent，请把分隔线的尺寸也考虑到offset的计算之中
        //  getItemLayout={(data, index) => ( {length: 44, offset: (44 + 1) * index, index} )}
          //决定当距离内容最底部还有多远时触发onEndReached回调。
          //注意此参数是一个比值而非像素单位。比如，0.5表示距离内容最底部的距离为当前列表可见长度的一半时触发。
          onEndReachedThreshold={0.1}
          //当列表被滚动到距离内容最底部不足onEndReachedThreshold的距离时调用
          onEndReached={({distanceFromEnd}) => (
            setTimeout(() => {
              this.setState((state) => ({
                data: state.data.concat(this._newData),
              }));
            }, 3000)
          )}
          refreshing={this.state.refreshing}
          onRefresh={() => {
            this.setState({refreshing: true})//开始刷新
            //这里模拟请求网络，拿到数据，3s后停止刷新
            setTimeout(() => {
              alert('没有可刷新的内容！');
              this.setState({refreshing: false});
            }, 3000);
          }}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}
;

class ItemDivideComponent
  extends Component {
  render() {
    return (
      <View style={{height: 1, backgroundColor: 'skyblue'}}/>
    );
  }
}
;

const flatListStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
