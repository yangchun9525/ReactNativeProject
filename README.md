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
开启别的端口：react-native start --port 8088<br>
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

atom开发
------- 
atom-beautify Ctrl+Alt+b(格式化代码)<br>
安装atom-goto-definition  hyperclick ayom-vue-hyperclick  Ctrl+Alt+enter （搜索方法在哪使用）<br>

安装插件： cd ~/.atom/packages  (C:\Users\yc)<br>
git clone <你想安装的 Package 的仓库链接> # 比如：git clone https://atom.io/packages/emmet<br>
cd <Package 路径> # cd emmet-atom<br>
npm install<br>

搜索需要的 Package:https://atom.io/packages/emmet<br>
点击 Repo 得到链接。<br>
