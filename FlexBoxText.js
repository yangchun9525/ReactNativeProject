/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

/**
 父视图属性：表明这些属性在父视图中设置才有效
 row: 从左向右依次排列
 row-reverse: 从右向左依次排列
 column(default): 默认的排列方式，从上向下排列
 column-reverse: 从下向上排列

 flexWrap:'wrap'设置可换行显示
 默认为不换行

 justifyContent enum('flex-start', 'flex-end', 'center', 'space-between', 'space-around')
 x轴排列方式
 flex-start(default) 从行首开始排列。每行第一个弹性元素与行首对齐，同时所有后续的弹性元素与前一个对齐。
 flex-end 从行尾开始排列。每行最后一个弹性元素与行尾对齐，其他元素将与后一个对齐。
 center 伸缩元素向每行中点排列。每行第一个元素到行首的距离将与每行最后一个元素到行尾的距离相同。
 space-between 在每行上均匀分配弹性元素。相邻元素间距离相同。每行第一个元素与行首对齐，每行最后一个元素与行尾对齐。
 space-around 在每行上均匀分配弹性元素。相邻元素间距离相同。每行第一个元素到行首的距离和每行最后一个元素到行尾的距离将会是相邻元素之间距离的一半。

 alignItems enum('flex-start', 'flex-end', 'center', 'stretch')
 y轴排列方式
 flex-start 元素向侧轴起点对齐。
 flex-end 元素向侧轴终点对齐。
 center 元素在侧轴居中。如果元素在侧轴上的高度高于其容器，那么在两个方向上溢出距离相同。
 stretch 弹性元素被在侧轴方向被拉伸到与容器相同的高度或宽度。
 -------------------------------------------------------------------------------------------
 子视图属性:表明这些属性在子视图中设置才有效
 alignSelf enum('auto', 'flex-start', 'flex-end', 'center', 'stretch')
 auto(default) 元素继承了它的父容器的 align-items 属性。如果没有父容器则为 “stretch”。
 stretch    元素被拉伸以适应容器。
 center    元素位于容器的中心。
 flex-start    元素位于容器的开头。
 flex-end    元素位于容器的结尾。

 flex number
 flex 属性定义了一个可伸缩元素的能力，默认为0。
 --------------------------------------------------------------
 其他属性
 borderBottomWidth number 底部边框宽度
 borderLeftWidth number 左边框宽度
 borderRightWidth number 右边框宽度
 borderTopWidth number 顶部边框宽度
 borderWidth number 边框宽度
 border<Bottom    Left    Right    Top>Color 个方向边框的颜色
 borderColor 边框颜色

 margin number 外边距
 marginBottom number 下外边距
 marginHorizontal number 左右外边距
 marginLeft number 左外边距
 marginRight number 右外边距
 marginTop number 上外边距
 marginVertical number 上下外边距

 padding number 内边距
 paddingBottom number 下内边距
 paddingHorizontal number 左右内边距
 paddingLeft number 做内边距
 paddingRight number 右内边距
 paddingTop number 上内边距
 paddingVertical number 上下内边距

 left number 属性规定元素的左边缘。该属性定义了定位元素左外边距边界与其包含块左边界之间的偏移。
 right number 属性规定元素的右边缘。该属性定义了定位元素右外边距边界与其包含块右边界之间的偏移
 top number 属性规定元素的顶部边缘。该属性定义了一个定位元素的上外边距边界与其包含块上边界之间的偏移。
 bottom number 属性规定元素的底部边缘。该属性定义了一个定位元素的下外边距边界与其包含块下边界之间的偏移。

 position enum(‘absolute’, ‘relative’)属性设置元素的定位方式，为将要定位的元素定义定位规则。
 absolute：生成绝对定位的元素，元素的位置通过 “left”, “top”, “right” 以及 “bottom” 属性进行规定。
 relative：生成相对定位的元素，相对于其正常位置进行定位。因此，”left:20” 会向元素的 LEFT 位置添加 20 像素。
 */
export default class FlexBoxText extends Component {
    render() {
        return (
            <View style={{borderColor: 'red', borderWidth: 10, backgroundColor: "darkgray", marginTop: 20}}>
                <View style={{
                    // flex: 1,
                    // alignItems: 'center',
                    // justifyContent: 'center',

                    height: 200,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    flexWrap: 'wrap',
                    backgroundColor: "white",
                    marginTop: 20
                }}>

                    <View style={{
                        width: 140,
                        height: 40,
                        backgroundColor: "blue",
                        alignSelf: 'center',        //对于自身，让自身在父控件中居中，
                        justifyContent: 'center',   //对于子控件，让子控件关于该View垂直居中
                        alignItems: 'center',       //对于子控件，让子控件关于该View水平居中
                    }}>
                        <Text style={{
                            fontSize: 16,
                            backgroundColor: 'red',
                        }}>dasda1</Text>
                    </View>

                    <View style={{width: 40, height: 40, backgroundColor: "darkcyan", margin: 5}}>
                        <Text style={{fontSize: 16}}>2</Text>
                    </View>

                    <View style={{width: 140, height: 40, backgroundColor: "darkcyan", margin: 5}}>
                        <Text style={{fontSize: 16}}>3</Text>
                    </View>

                    <View style={{width: 140, height: 40, backgroundColor: "darkcyan", margin: 5}}>
                        <Text style={{fontSize: 16}}>4</Text>
                    </View>
                </View>

                <View style={{flexDirection: 'row-reverse', backgroundColor: "darkgray", marginTop: 20}}>

                    <View style={{width: 40, height: 40, backgroundColor: "darkcyan", margin: 5}}>
                        <Text style={{fontSize: 16}}>145663</Text>
                    </View>

                    <View style={{width: 40, height: 40, backgroundColor: "darkcyan", margin: 5}}>
                        <Text style={{fontSize: 16}}>2</Text>
                    </View>

                    <View style={{width: 40, height: 40, backgroundColor: "darkcyan", margin: 5}}>
                        <Text style={{fontSize: 16}}>3</Text>
                    </View>

                    <View style={{flex: 1, width: 40, height: 40, backgroundColor: "darkcyan", margin: 5}}>
                        <Text style={{fontSize: 16}}>4</Text>
                    </View>
                </View>

                <View style={{
                    flexDirection: 'column-reverse',
                    backgroundColor: "darkgray",
                    marginTop: 20,
                    height: 200,
                    width: 400
                }}>

                    <View style={{flex: 1, backgroundColor: "darkcyan", margin: 5}}>
                        <Text style={{fontSize: 16}}>1</Text>
                    </View>

                    <View style={{width: 40, height: 40, backgroundColor: "darkcyan", margin: 5}}>
                        <Text style={{fontSize: 16}}>2</Text>
                    </View>

                    <View style={{width: 40, height: 40, backgroundColor: "darkcyan", margin: 5}}>
                        <Text style={{fontSize: 16}}>3</Text>
                    </View>

                    <View style={{width: 40, height: 40, backgroundColor: "darkcyan", margin: 5}}>
                        <Text style={{fontSize: 16}}>4</Text>
                    </View>
                </View>

                <View style={{flexDirection: 'column', backgroundColor: "darkgray", marginTop: 20}}>

                    <View style={{left: 20, width: 40, height: 40, backgroundColor: "darkcyan", margin: 5}}>
                        <Text style={{fontSize: 16}}>1</Text>
                    </View>

                    <View style={{width: 40, height: 40, backgroundColor: "darkcyan", margin: 5}}>
                        <Text style={{fontSize: 16}}>2</Text>
                    </View>

                    <View style={{width: 40, height: 40, backgroundColor: "darkcyan", margin: 5}}>
                        <Text style={{fontSize: 16}}>3</Text>
                    </View>

                    <View style={{width: 40, height: 40, backgroundColor: "darkcyan", margin: 5}}>
                        <Text style={{fontSize: 16}}>4</Text>
                    </View>
                </View>

                <View style={{
                    position: "absolute",
                    backgroundColor: "white"
                }}>

                    <Text style={{fontSize: 16}}>6666666666</Text>
                </View>

                <View style={{
                    width: 200,
                    position: "relative",
                    backgroundColor: "white"
                }}>

                    <Text style={{fontSize: 16}}>6666666666</Text>
                </View>

                <View style={{
                    width: 200,
                    top: 0,
                    left: 200,

                    backgroundColor: "blue"
                }}>

                    <Text style={{fontSize: 16}}>77777777</Text>
                </View>

            </View>

        );
    }
}
