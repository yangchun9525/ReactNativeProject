import React, { Component } from 'react';
import { Text } from 'react-native';
import { Router, Scene,Modal,Stack,Tabs } from 'react-native-router-flux';//引入包

import RouterFluxFirstDemo from './RouterFluxFirstDemo'; //引入文件
import RouterFluxSecondDemo from './RouterFluxSecondDemo';//引入文件

/**
<Router>
  <Scene key="root">
    <Scene key="first"
      component={RouterFluxFirstDemo}
      title="First"
      initial
      />
    <Scene
      key="second"
      component={RouterFluxSecondDemo}
      title="Second"
      />
</Scene>
</Router>


**/
const TabIcon = ({ selected, title }) => {
  console.log("TabIcon:"+selected+","+title);
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
}
export default class RouterFluxDemo extends Component {

    render() {
      return (
        <Router>
            <Scene key="root">
            {/* Tab Container */}
              <Scene
                key="tabbar"
                tabs={true}         //是否底部有tab
                lazy={true}         // 是否默认渲染tabbar
                tabBarPosition="bottom" //tab所处位置
                headerMode='screen' // 页面切换方式
                wrap={true}         // 自动使用自己的导航栏包装每个场景
                hideNavBar={true}   //隐藏顶部栏
                showLabel={false}   // 显示文字
                swipeEnabled={true}// 是否可以滑动
                icon={TabIcon}      // 自定义Icon显示方式
                activeBackgroundColor='white'   // 选中tabbar的背景色
                inactiveBackgroundColor='#4ECBFC' // 未选中tabbar的背景色
                activeTintColor='#4ECBFC'       // 选中tabbar图标的颜色
                inactiveTintColor='#aaa'        // 未选中tabbar图标的颜色
                tabBarStyle={{ backgroundColor: '#fff444' }}>
                {/* Tab and it's scenes */}
                <Scene key="osu" title="OSU" icon={TabIcon}>
                  <Scene key="first"
                  hideNavBar
                    component={RouterFluxFirstDemo}
                    title="Scarlet"
                  />
                  <Scene
                    key="second"
                    hideNavBar
                    hideTabBar
                    component={RouterFluxSecondDemo}
                    title="Gray"
                  />
                </Scene>

                {/* Tab and it's scenes */}
                <Scene key="um" title="UM" icon={TabIcon}>
                  <Scene key="first"
                    component={RouterFluxFirstDemo}
                  />
                  <Scene
                    key="second"
                    component={RouterFluxSecondDemo}
                    title="Gray"
                  />
                </Scene>

                {/* Tab and it's scenes */}
                <Scene key="vu" title="VU" icon={TabIcon}>
                  <Scene key="first"
                    component={RouterFluxFirstDemo}

                  />
                  <Scene
                    key="second"
                    component={RouterFluxSecondDemo}
                    title="Gray"
                  />
                </Scene>
              </Scene>
            </Scene>
          </Router>
    );
  }
}
