import React from 'react';
import {Image, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {connect} from 'react-redux'; // 引入connect函数
import ScreenUtil from '../util/ScreenUtil.js'
import BaseView from "./BaseView";

var detailData, prop, id;

class ProductDetail extends BaseView {
    // state = {
    //     user: "",
    // }

    constructor(props) {
        super(props);
        prop = props;
        // console.log(props.navigation.state.params.id)
        // detailData = props.navigation.state.params.detailData.item;
        id = props.navigation.state.params.id;

        var allData = this.props.data.data;
        for (var i = 0; i < allData.length; i++) {
            if (allData[i].id === id) {
                detailData = allData[i]
                break;
            }
        }
    }

    render() {

        return (
            <View>

                <View style={{
                    width: ScreenUtil.scaleSize(780),
                    height: ScreenUtil.scaleSize(1200),
                    position: "absolute",
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Image
                        style={{
                            width: ScreenUtil.scaleSize(520),
                            height: ScreenUtil.scaleSize(650),
                        }}
                        // source={require('../picture/login_img.png')}
                        source={{uri: detailData.picUrl}}
                        resizeMode={'contain'}
                    ></Image>

                </View>
                <TouchableWithoutFeedback
                    onPress={() => {
                        prop.navigation.goBack();
                    }}>
                    <Image
                        resizeMode={'contain'}
                        style={{
                            width: ScreenUtil.scaleSize(68),
                            height: ScreenUtil.scaleSize(68),
                            marginTop: ScreenUtil.scaleSize(50),
                            marginLeft: ScreenUtil.scaleSize(60),
                            position: "absolute",
                        }}
                        source={require('../picture/back_btn_gray.png')}/>
                </TouchableWithoutFeedback>

                <View style={styles.rightLayout}>
                    <Text style={{
                        marginTop: ScreenUtil.scaleSize(168),
                        marginLeft: ScreenUtil.scaleSize(168)
                    }}>{detailData.title}</Text>

                    <Text style={{
                        marginTop: ScreenUtil.scaleSize(68),
                        marginLeft: ScreenUtil.scaleSize(168),
                        marginRight: ScreenUtil.scaleSize(168)
                    }}>{detailData.skus[0].description}</Text>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    rightLayout: {
        position: "absolute",
        marginLeft: ScreenUtil.scaleSize(780),
    }
});

export default connect(
    (state) => ({
        data: state.mainProd.data
    })
)(ProductDetail)
