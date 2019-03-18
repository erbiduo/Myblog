---
title: Parker插件破解
date: 2017-10-15 10:48:06
categories: 工具资源
tags: [PS插件]
cover_img:  https://i.loli.net/2019/03/17/5c8e6118a893b.jpg   # 在文章摘要上显示
feature_img:   # 在文章详细页面上置顶
description:   # 文章描述
keywords:      # 关键字
---
![img0](http://oohkvf5b9.bkt.clouddn.com/A04%20Parker.jpg?imageMogr2/format/webp)

Parker是PS的标注插件，可以有效提高UI标注图效率，当然个人认为Markman的操作会更加的便捷快速，看个人习惯了哈。<!--more-->

这里记录下`Parker`在`Windows`下`Photoshop CC2017`的破解过程。

## 1、打开注册器

快捷键`win+R`，运行`regedit`命令打开注册表编辑器。

![image0](http://oohkvf5b9.bkt.clouddn.com/A05-image0.png)

## 2、新建字符串值

打开注册器后，找到路径：

- CC 2015.5、CC 2017：`HKEY_CURRENT_USER/Software/Adobe/CSXS.7`
- CC 2015：`HKEY_CURRENT_USER/Software/Adobe/CSXS.6`
- CC、CC 2014：`HKEY_CURRENT_USER/Software/Adobe/CSXS.5`

添加`字符串值`项`PlayerDebugMode`，值为`1`。

![image1](http://oohkvf5b9.bkt.clouddn.com/A05-image1.gif)

**注：**跳过此步骤CC系列将会提示*插件未正确签署*报错。

## 3、修改试用时间

Windows下进入目录`C:\Users\XXX（用户）\AppData\Roaming\Adobe\CEP\extensions\parker\js`，打开`parker.js`文件，修改试用时间：

```
搜索：
if(now - trial_start > 30*24*3600*1000) { // 试用期30天

修改为：
if(now -trial_start > 30*24*3600*1000*10240) { // 试用期30*10240天
```



