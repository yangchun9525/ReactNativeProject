import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    TouchableWithoutFeedback
} from 'react-native';
import ScreenUtil from '../util/ScreenUtil.js'
import ProgressBar from "react-native-progress/Bar";

var detailData, prop;
export default class Login extends Component {
    // state = {
    //     user: "",
    // }

    constructor(props) {
        super(props);
        prop = props;
        detailData = props.navigation.state.params.detailData.item;
        console.log("constructor");
        console.log(detailData)
    }

    render() {

        return (
            <View>

                <Image
                    style={{
                        width: ScreenUtil.scaleSize(780),
                        height: ScreenUtil.scaleSize(1200),
                        position: "absolute"
                    }}
                    // source={require('../picture/login_img.png')}
                    source={{uri: detailData.picUrl}}
                    resizeMode={'contain'}
                ></Image>

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
                        marginTop:ScreenUtil.scaleSize(168),
                        marginLeft:ScreenUtil.scaleSize(168)
                    }}>{detailData.title}</Text>

                    <Text style={{
                        marginTop:ScreenUtil.scaleSize(68),
                        marginLeft:ScreenUtil.scaleSize(168),
                        marginRight:ScreenUtil.scaleSize(168)
                    }}>{detailData.skus[0].description}</Text>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    rightLayout: {
        position: "absolute",
        marginLeft:ScreenUtil.scaleSize(780),
    }
});

