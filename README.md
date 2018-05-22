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
[出现错误1：name: PropTypes.string.isRequired](#错误1)<br>
[出现错误2：Could not find com.github.react-native-community:cameraview:df60b07573](#错误2)<br>
[出现错误3：打包的时候出现Failed to execute aapt](#错误3)<br>
[出现错误4：打包的时候出现Could not find com.android.tools.build:gradle:3.0.0](#错误4)<br>
[出现错误5：运行时出现<br>
                  React Native version mismatch<br>
                  JavaScript version: 0.50.1<br>
                  Native version: 0.49.3](#错误5)


生成apk
---
[如何生成apk](#apk)

现有app集成Rn
---------
[集成Rn](#addrn)

Redux相关 
------- 
查看![Redux总结](https://github.com/yangchun9525/ReactNativeProject/blob/master/picture/redux.jpg)


# 错误1：
修改方式：将

        import React, { Component, PropTypes} from 'react'

修改为

           import PropTypes from 'prop-types'，
 并且安装prop-types库

        npm install prop-types --save

# 错误2：
修改方式：在android工程的project的build.gradle中，新增

        maven {
            url "https://jitpack.io"
        }
# 错误3：
修改方式：修改android/gradle.properties文件在最后面加上

        android.enableAapt2=false
# 错误4：
修改方式：在android项目的build.gradle中的repositories，和allprojects的repositories中加入

        google()
# 错误5：
修改方式：安装相应的版本，使js的版本和rn的版本一致

        npm install react-native@0.49

# apk：
1.使用android studio生成jks文件,并将jks文件放入app的目录下<br>
2.在项目的gradle.properties文件中添加如下配置<br>

        MYAPP_RELEASE_STORE_FILE=rnproject.jks
        MYAPP_RELEASE_KEY_ALIAS=key0
        MYAPP_RELEASE_STORE_PASSWORD=123456
        MYAPP_RELEASE_KEY_PASSWORD=123456

3.android\app\build.gradle文件添加如下配置<br>

     signingConfigs {
        release {
            storeFile file(MYAPP_RELEASE_STORE_FILE)
            storePassword MYAPP_RELEASE_STORE_PASSWORD
            keyAlias MYAPP_RELEASE_KEY_ALIAS
            keyPassword MYAPP_RELEASE_KEY_PASSWORD
        }
    }
buildTypes下添加

        signingConfig signingConfigs.release

4.旧版本中如果asset文件夹下存在index.android.bundle文件，则在android目录下执行

        gradlew assembleRelease
不存在则执行

        react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

 然后在android目录下执行

     gradlew assembleRelease

新版本直接执行

        gradlew assembleRelease
5.到android\app\build\outputs\apk\release目录下找到apk <br>

# AddRn:
集成方式可参考该链接：https://reactnative.cn/docs/0.51/integration-with-existing-apps.html#content <br>
但其中有几点需要注意：<br>
1.新建的Rn activity中，应该是setJSMainModulePath("index")，新建的文件也是index.js,而不是index.android<br>
2.如果文件是index.js，则执行的命令为

        react-native bundle --platform android --dev false
        --entry-file index.js
        --bundle-output android/com/your-company-name/app-package-name/src/main/assets/index.android.bundle
        --assets-dest android/com/your-company-name/app-package-name/src/main/res/
3.打包出来的程序需要在app的build.gradle中加入关于ndk的配置，否则进入rn的activity会报错def<br>
在最外层加入

        def enableSeparateBuildPerCPUArchitecture = false
        def enableProguardInReleaseBuilds = false
在defaultConfig中加入

        ndk {
                    abiFilters "armeabi-v7a", "x86"
                }
 在android下加入

        splits {
                abi {
                    reset()
                    enable enableSeparateBuildPerCPUArchitecture
                    universalApk false  // If true, also generate a universal APK
                    include "armeabi-v7a", "x86"
                }
            }
 在buildTypes的release中修改minifyEnabled为

      minifyEnabled enableProguardInReleaseBuilds


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
一个可github上查看代码的插件:sourcegraph <br>
