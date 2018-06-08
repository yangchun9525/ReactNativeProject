import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

var detailData, prop, id;

const url1 = "http://192.168.1.141:8080/testJson";
const url2 = "http://192.168.1.141:8080/testRequestBody";

export default class test extends Component {

    render() {

        return (
            <View>
                <TouchableOpacity onPress={() => {
                    this.stringFun();
                }}>
                    <View >
                        <Text>参数为string</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    this.jsonFun();
                }}>
                    <View >
                        <Text>参数为jsonObject</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    stringFun(){
        let params = {"name":"stringFun","age":"stringFun"};
        let parameters = new FormData();
        parameters.append("name", "stringFun");
        parameters.append("age", "stringFun");
        fetch(url1, {
            method: 'POST',
            body: parameters
        }).then((response) => response.json())
            .then((responseData) => {
                console.log("success")
                console.log(responseData)
            })
            .catch((error) => {
                console.log("fail")
                console.log(error)

            }).done()
    }

    jsonFun(){
        let params = {"name":"jsonFun","age":"jsonFun"};
        console.log(JSON.stringify(params))
        fetch(url2, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        }).then((response) => response.json())
            .then((responseData) => {
                console.log("success")
                console.log(responseData)
            })
            .catch((error) => {
                console.log("fail")
                console.log(error)

            }).done()
    }
}


