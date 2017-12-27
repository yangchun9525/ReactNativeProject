# ReactNativeProject
个人学习Rn的project
关于 RN的一些学习记录：
====  
安裝
------- 
1.nodejs<br>
2.as<br>
3.npm install -g react-native-cli<br>

添加淘宝镜像
------- 
F:\nodejs\node_modules\npm\npmrc 中加入 registry = https://registry.npm.taobao.org<br>

创建
------- 
react-native init appname<br>

运行 
------- 
cmd到项目目录下<br>
react-native start<br>
保持packager开启，另外打开一个命令行窗口，然后在工程目录下运行<br>
react-native run-android<br>
或者直接使用as運行<br>
配置ndk及設置android_home
http://blog.csdn.net/jdh99/article/details/51765441<br>
 
调试 
------- 
双击r刷新界面，查看修改<br>
ctrl+m 彈出开发者菜单<br>
动态加载 	ctrl+m 选中enable live reload(会刷新所有的)<br>
热加载 		ctrl+m 选中enable hou reload(只会刷新你修改了的)<br>
远程调试 	ctrl+m 选中debug js Remotely(使用浏览器调试)<br>
