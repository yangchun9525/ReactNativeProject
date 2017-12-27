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
  Alert,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableNativeFeedback
} from 'react-native';

export default class TouchableTest extends Component{
    constructor(props){
      super(props);
      this.state={
        count:0,
        waiting:false,
        text: '',
        startTime: 0,
        countLong: 0
      }
    }
    render(){
        return(
        <View style={styles.container}>
          <TouchableWithoutFeedback
            onPress={()=> {
              this.setState({count: this.state.count+1})
            }}
            onLongPress={()=>{
              Alert.alert('提示','确认删除吗',[
                {text:'取消',style:'cancle',onPress:()=>{

                }},
                {text:'确定',onPress:()=>{

                }}
              ]);
            }}
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>
                  我是TouchableWithoutFeedback,单击我
                </Text>
              </View>
          </TouchableWithoutFeedback>
          <Text style={styles.text}>您单击了:{this.state.count}次</Text>

          <TouchableWithoutFeedback
            disabled={this.state.waiting}
            onPress={()=> {
              this.setState({text:'正在登录...',waiting:true})
              setTimeout(()=>{
                this.setState({text:'网络不流畅',waiting:false})
              },2000);
            }}
            >
            <View style={styles.button}>
              <Text style={styles.buttonText}>
                登录
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <Text style={styles.text}>{this.state.text}</Text>

          <TouchableWithoutFeedback
            onPressIn={()=> {
              this.setState({text:'触摸开始',startTime:new Date().getTime()})
            }}
            onPressOut={()=>{
              this.setState({text:'触摸结束,持续时间:'+(new Date().getTime()-this.state.startTime)+'毫秒'})
            }}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>
                点我
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <Text style={styles.text}>{this.state.text}</Text>

          <TouchableHighlight
            style={{marginTop: 20}}
            activeOpacity={0.3}
            underlayColor='green'
            onHideUnderlay={()=> {
              this.setState({text: '衬底被隐藏'})
            }}
            onShowUnderlay={()=> {
              this.setState({text: '衬底显示'})
            }}
            onPress={()=> {

            }}
          >
          <View style={styles.button}>
              <Text style={styles.buttonText}>
                  TouchableHighlight
              </Text>
          </View>
        </TouchableHighlight>


        <TouchableNativeFeedback
          onPress={()=>{
            this.setState({count: this.state.count + 1})
          }}
          onLongPress={()=>{
            this.setState({countLong: this.state.countLong + 1})
          }}
          background={TouchableNativeFeedback.SelectableBackground()}
          >
          <View style={{width: 150, height: 100, backgroundColor: 'red'}}>
              <Text style={{margin: 30}}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>
        <Text style={styles.text}>{this.state.text}</Text>
        <Text style={styles.text}>您单击了:{this.state.count}次</Text>
        <Text style={styles.text}>您长按了:{this.state.countLong}次</Text>
      </View>);
    }
}
const styles=StyleSheet.create({
  container: {
        flex: 1,
        marginTop: 50
    },
  button:{
    borderWidth:1
  },
  buttonText:{
    fontSize:18
  },
  text:{
    fontSize:20
  },
  cancle:{
    fontSize:25,
    backgroundColor:'red'
  }
})
