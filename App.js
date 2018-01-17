/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import HelloCompont from'./HelloCompont'
import Lifecycle from'./LifecycleComponent'
import {name,age,sum} from './HelloCompont'
import PropsTest from './PropsTest'
import StateTest from './StateTest'
import RefTest from './RefTest'
import Student from './Student'
import MingStudent from './MingStudent'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
    constructor(props){
        super(props);
        this.state=({
            remove:false,
            result:'',
            size:0
        })
        this.stu = new Student('小紅','男',18);
        this.ming = new MingStudent();
    }
    /**
    第一段为：导入导出数据
    第二段为：生命周期
    第三段为：props相关
    第4段为：State相关
    第5段为：ref相关  获取组件
    this.refs['reftest']或者this.refs.reftest
    <RefTest ref="reftest"/>
    var size = this.refs.reftest.getSize();
    第6段为：类相关的
    **/
  render() {
    var view = this.state.remove?null:<Lifecycle/>;
    var text = this.state.remove?"让他复活":"干掉他"
    var params = { name:"小明",age:18};
    var {name} = params;
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text>导入导出数据</Text>

          <Text style={{fontSize:20}}
            onPress={()=>{
              this.setState({
                result:sum(2,3)
              })
            }}
          >{name},{age},2+3={this.state.result}</Text>
          <Text>-------------------------------------------</Text>
          <Text>生命周期</Text>

          <Text style={{fontSize:20}}
            onPress={()=>{
              this.setState({
                remove:!this.state.remove
              })
          }}>{text}</Text>
          <Text>-------------------------------------------</Text>
          <Text>props相关</Text>

          <PropsTest name={params.name}></PropsTest>
          <PropsTest {...params}></PropsTest>
          <PropsTest name={name}></PropsTest>

          <Text>-------------------------------------------</Text>
          <Text>State相关</Text>

          <StateTest ></StateTest>
          <Text>-------------------------------------------</Text>
          <Text>ref相关  获取组件
          this.refs['reftest']或者this.refs.reftest
          </Text>
          <Text
            style={{fontSize:20}}
            onPress={()=>{
              var size = this.reftest.getSize();
              this.setState({
                size:size,
            })
          }}
          >获取气球大小:{this.state.size}</Text>
          <RefTest ref={reftest=>this.reftest=reftest}/>

          <Text>-------------------------------------------</Text>
          <Text>类相关的</Text>
          <Text>{this.stu.getDesc()}</Text>
          <Text>{this.ming.getDesc()}</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
