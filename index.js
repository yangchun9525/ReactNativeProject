import {
  AppRegistry
} from 'react-native';
import App from './App';
import StateTest from './StateTest';//状态的demo
import FlexBoxText from './FlexBoxText';//FlexBox的demo
import TouchableTest from './TouchableTest';//点击事件的demo
import ImageTest from './ImageTest';//加载图片的demo，包含本地图片
import LoadNetImageTest from './LoadNetImageTest';//加载网络图片的demo
import LoadNetData from './LoadNetData';//加载网络数据的demo
import SectionListBasics from './SectionListBasics';//SectionList的demo
import FlatListTest from './FlatListTest';//flatlist的demo
import FlatListDemo from './FlatListDemo';//flatlist的demo
import LoadBuDeJieData from './LoadBuDeJieData';//加载百思不得姐数据，但显示长图时有的图片不能显示
import NavigatorTest from './NavigatorTest';//react-native-navigator跳转
import PropsTest from './PropsTest';//属性的demo
import RouterFluxDemo from './RouterFluxDemo'; //react-native-RouterFlux跳转

import RouterFluxFirstDemo from './RouterFluxFirstDemo'; //引入文件

import RootRedux from './redux/Root'; //引入文件
AppRegistry.registerComponent('project', () => RootRedux);
