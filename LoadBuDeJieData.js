import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Text,
    Button,
    TextInput,

    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';
import PropTypes from 'prop-types';

//?showapi_appid=17899&showapi_sign=9208b4bf256a46c0b9f51f653ab6e8ae&type=10
var REQUEST_URL = "https://route.showapi.com/255-1";
var APPID="17899";
var SIGN="9208b4bf256a46c0b9f51f653ab6e8ae";
var TYPE="10";

var imageurl=[
          "https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/image/w%3D500/sign=f80c24515ee736d158138c08ab514ffc/b2de9c82d158ccbf2c83dfb713d8bc3eb135417b.jpg",
          "https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/image/w%3D500/sign=69cd4948eafe9925cb0c695004aa5ee4/c83d70cf3bc79f3dab38b5bdb0a1cd11738b2965.jpg",
          "https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/image/w%3D500/sign=0f77b3df8f35e5dd902ca5df46c7a7f5/bd3eb13533fa828be6abce6ef71f4134960a5ab6.jpg",
          "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=951013877,3865349977&fm=58",
          "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3609205980,2357523875&fm=58&bpow=299&bpoh=400&u_exp_0=3422226876,2040756742&fm_exp_0=86",
          "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3054622180,1502256378&fm=58",
          "https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/w%3D500/sign=20ecb184bc003af34dbadc60052bc619/37d12f2eb9389b5059fdb1df8f35e5dde7116e38.jpg",
          "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3198774589,3122507183&fm=58",
          "https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=177888513,359841577&fm=85&s=79A43472534377415D4A567C0300706C",
          "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=369627572,4280785759&fm=58",
          "https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=77ad8b336d061d957d46303e43cf6dec/d009b3de9c82d1581213abba830a19d8bc3e422c.jpg",
          "https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=163e64f77fd98d1076d40b371904df33/8326cffc1e178a8281e28dabf503738da877e8db.jpg",
          "https://img01.sogoucdn.com/net/a/04/link?url=http%3A%2F%2Fi02.pictn.sogoucdn.com%2F208b1aabfbd85c7e&appid=122",
          "https://img04.sogoucdn.com/net/a/04/link?url=http%3A%2F%2Fi02.pictn.sogoucdn.com%2F7e5afd8c6583d79c&appid=122",
          "https://img04.sogoucdn.com/net/a/04/link?url=http%3A%2F%2Fi02.pictn.sogoucdn.com%2F495b92e0a953a827&appid=122",
          "https://img01.sogoucdn.com/net/a/04/link?url=http%3A%2F%2Fi03.pictn.sogoucdn.com%2F189b23d998d4bb64&appid=122",
          "https://img01.sogoucdn.com/net/a/04/link?url=http%3A%2F%2Fi02.pictn.sogoucdn.com%2F728dbefcc7db109a&appid=122",
          "https://img02.sogoucdn.com/net/a/04/link?url=http%3A%2F%2Fi03.pictn.sogoucdn.com%2Fc86570085b61fa18&appid=122",
          "https://img03.sogoucdn.com/net/a/04/link?url=http%3A%2F%2Fi03.pictn.sogoucdn.com%2Fd4572671dda5c7cf&appid=122",
          "https://img03.sogoucdn.com/net/a/04/link?url=http%3A%2F%2Fi03.pictn.sogoucdn.com%2F617e86a24aaddaca&appid=122"];
export default class LoadBuDeJieData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this._sourceData,
      refreshing: false, //初始化不刷新
      //网络请求状态
      error: false,
      errorInfo: ""
    };
  }

  //rn的生命周期，初始化的时候会执行
  componentDidMount() {
      let formData = new Map();
      formData.set("showapi_appid",APPID);
      formData.set("showapi_sign",SIGN);
      formData.set("type",TYPE);
      //请求数据
      this.fetchData(formData);
  }

  fetchData(params) {
      if (params) {
        let paramsArray = []
        for(var item of params.entries()){
          paramsArray.push(item[0]+'='+encodeURIComponent(item[1]));
        }

        if (REQUEST_URL.search(/\?/) === -1) {//拼接url
            REQUEST_URL += '?' + paramsArray.join('&')
        } else {
            REQUEST_URL += '&' + paramsArray.join('&')
        }
      }
      console.log(REQUEST_URL);
      //这个是js的访问网络的方法
      fetch(REQUEST_URL,{
        method:"GET"
      })
      .then((response) => response.json())
      .then((responseData) => {
        console.log("responseData:"+responseData.showapi_res_body.pagebean.contentlist);
        this.setState({
          //复制数据源
          data: responseData.showapi_res_body.pagebean.contentlist
        });
      })
      .catch((error) => {
        console.log("error:":error);
        this.setState({
          error: true,
          errorInfo: error
        })
      })
      .done();
  }

  _header = function () {
    return (
      <Text style={{fontWeight: 'bold', fontSize: 20}}>不得姐数据1111</Text>
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
        <Text
          onPress={()=>{
            alert('点击了Text');
          }}>{item.text}</Text>

          <TouchableWithoutFeedback
            onPress={()=>{
              alert('点击了');
            }}>
            <Image
              style={{width:350,height:550,borderWidth:1}}
              resizeMode={'contain'}
              indicator={ProgressBar}
              source={{uri:item.cdn_img}}/>
          </TouchableWithoutFeedback>
      </TouchableOpacity>
    );
  }

  //点击按钮跳转
  onButtonPress() {
    //viewPosition参数：0表示顶部，0.5表示中部，1表示底部
    var index = parseInt(this.state.text);
    this._flatList.scrollToIndex({viewPosition: 0, index: parseInt(this.state.text)});
    // this._flatList.scrollToOffset({ animated: true, offset: 2000 });
  };

  onBtnPress2Botton() {
    this._flatList.scrollToEnd();
  }

  _newData = [{name: '我是新添加的数据1'},
    {name: '我是新添加的数据2'},
    {name: '我是新添加的数据3'}]

  render() {
    return (
      <View style={flatListStyles.container}>
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
         // getItemLayout={(data, index) => ( {length: 44, offset: (44 + 30) * index, index} )}
          //决定当距离内容最底部还有多远时触发onEndReached回调。
          //注意此参数是一个比值而非像素单位。比如，0.5表示距离内容最底部的距离为当前列表可见长度的一半时触发。
          onEndReachedThreshold={0.1}
          //当列表被滚动到距离内容最底部不足onEndReachedThreshold的距离时调用
          onEndReached={({distanceFromEnd}) => (
            setTimeout(() => {
              // this.setState((state) => ({
              //   data: state.data.concat(this._newData),
              // }));
              alert('没有加载的内容！');
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
