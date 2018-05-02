# ReactNativeProject
关于RN的一些学习记录：
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
npm install<br>
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


常见错误 
------- 
出现错误1：name: PropTypes.string.isRequired<br>
修改方式：将import React, { Component, PropTypes} from 'react'修改为import PropTypes from 'prop-types'，安装prop-types库  npm install prop-types --save<br>

出现错误2：Could not find com.github.react-native-community:cameraview:df60b07573<br>
修改方式：在android工程的project的build.gradle中，新增maven { url "https://jitpack.io" }<br>

出现错误3：打包的时候出现Failed to execute aapt<br>
修改方式：修改android/gradle.properties文件在最后面加上android.enableAapt2=false<br>

出现错误4：打包的时候出现Could not find com.android.tools.build:gradle:3.0.0<br>
修改方式：在android项目的build.gradle中的repositories，和allprojects的repositories中加入google()<br>


Redux相关 
------- 
查看![Redux总结](https://github.com/yangchun9525/ReactNativeProject/blob/master/picture/20180416_180138.jpg)


生成 apk文件
------- 
1.使用android studio生成jks文件<br>
2.android\app\build.gradle文件添加如下配置<br>
signingConfigs { <br>
  release { <br>
    storeFile file('../test.jks')//签名文件路径 <br>
        storePassword "test" <br>
        keyAlias "test" <br>
        keyPassword "test"  //签名密码 <br>
    } <br>
} <br>
buildTypes下添加
signingConfig signingConfigs.release<br>
3.如果asset文件夹下存在index.android.bundle文件，则在android目录下执行gradlew assembleRelease <br>
不存在则执行react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res，然后在android目录下执行gradlew assembleRelease <br>
4.到android\app\build\outputs\apk\release目录下找到apk <br>

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
