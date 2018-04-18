'use strict';
import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    View
} from 'react-native';
import Communications from 'react-native-communications';

export default class useCommunications extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{height:40,marginTop:40}}
                                  onPress={()=>{
                                      Communications.phonecall('10086', false);

                                  }}>

                    <Text>调用系统打电话功能</Text>

                </TouchableOpacity><TouchableOpacity style={{height:40,marginTop:40}}
                                                     onPress={()=>{

                                                         Communications.text('10086','要发送的内容');
                                                         Communications.textWithoutEncoding('10086','要发送的内容encoding');//这种方法需要将内容encoding



                                                     }}>

                <Text>调用系统发短信功能</Text>

            </TouchableOpacity><TouchableOpacity style={{height:40,marginTop:40}}
                                                 onPress={()=>{
                                                     Communications.email(['emailAddress1', 'emailAddress2'],null,null,'My Subject','My body text')
                                                 }}>

                <Text>调用系统发邮件功能</Text>

            </TouchableOpacity><TouchableOpacity style={{height:40,marginTop:40}}
                                                 onPress={()=>{
                                                     Communications.web('https://github.com/facebook/react-native')
                                                 }}>

                <Text>调用系统打开网页功能</Text>

            </TouchableOpacity>


            </View>
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

});
