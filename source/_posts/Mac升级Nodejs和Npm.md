---
title: Mac升级Nodejs和Npm
date: 2017-10-28 19:57:04
categories: 技术向
tags: [Mac,笔记]
cover_img:  https://i.loli.net/2019/03/17/5c8e61c962eda.jpg   # 在文章摘要上显示
feature_img:   # 在文章详细页面上置顶
description:   # 文章描述
keywords:      # 关键字
---

刚黑完苹果，记笔记～
<!--more-->

### 1.清除node.js的cache

```
$ sudo npm cache clean -f
```

### 2.安装 n 工具

这个工具是专门用来管理node.js版本

```
$ sudo npm install -g n
```

### 3.安装最新版本的node.js

```
$ sudo n stable
```

### 4.查看node.js版本

```
$ node -v
```

### 5.更新npm到最新版

```
$ sodu npm install npm@latest -g
```
