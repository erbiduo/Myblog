---
title: Hexo常用命令笔记
date: 2017-10-14 14:08:56
categories: 技术向
tags: [Hexo,笔记]
cover_img:  https://i.loli.net/2019/04/14/5cb2fa1035bb5.jpg    # 在文章摘要上显示
feature_img:   # 在文章详细页面上置顶
description:   # 文章描述
keywords:      # 关键字
---



Hexo常用命令学习笔记♥(๑> ₃ <)♥ ~ ~
<!--more-->

## Hexo

```
$ npm install hexo -g //安装  
$ npm update hexo -g //升级  
$ hexo init //初始化
```

## 简写

```
$ hexo n "我的博客" == hexo new "我的博客" //新建文章
$ hexo p == hexo publish
$ hexo g == hexo generate //生成
$ hexo s == hexo server //启动服务预览
$ hexo d == hexo deploy //部署
```

## 服务器

```
$ hexo server //Hexo 会监视文件变动并自动更新，您无须重启服务器。
$ hexo server -s //静态模式
$ hexo server -p 5000 //更改端口
$ hexo server -i 192.168.1.1 //自定义 IP

$ hexo clean //清除缓存 网页正常情况下可以忽略此条命令
$ hexo g //生成静态网页
$ hexo d //开始部署
```

## 监视文件变动

```
$ hexo generate //使用 Hexo 生成静态文件快速而且简单
$ hexo generate --watch //监视文件变动
```

## 完成后部署

```
//两个命令的作用是相同的
$ hexo generate --deploy
$ hexo deploy --generate

//简写：
$ hexo deploy -g
$ hexo server -g
```

## 草稿

```
$ hexo publish [layout] <title>
```

## hexo命令模版

```
eg:

$ hexo new "postName" //新建文章
$ hexo new page "pageName" //新建页面
$ hexo generate //生成静态页面至public目录
$ hexo server //开启预览访问端口（默认端口4000，'ctrl + c'关闭server）
$ hexo deploy //将.deploy目录部署到GitHub

$ hexo new [layout] <title>
$ hexo new photo "My Gallery"
$ hexo new "Hello World" --lang tw
```

## 文章模板

```
	---	
	title: 使用Hexo搭建个人博客
	layout: post
	date: 2014-03-03 19:07:43
	comments: true
	categories: Blog
	tags: [Hexo]
	keywords: Hexo, Blog
	---

	以上是文章摘要 <!--more--> 以下是余下全文 
```

## 推送到服务器上

```
$ hexo n //写文章
$ hexo g //生成
$ hexo d //部署 #可与hexo g合并为 hexo d -g
```

## 报错相关

### 1.找不到git部署

```
	ERROR Deployer not found: git
```
解决方法：
```
$ npm install hexo-deployer-git --save
```

### 2.xcodebuild

```
xcode-select: error: tool 'xcodebuild' requires Xcode, but active developer directory '/Library/Developer/CommandLineTools' is a command line tools instance
```
解决方法：
```
$ npm install bcrypt
```

### 3. RSS不显示

安装RSS插件

```
$ npm install hexo-generator-feed --save
```

开启RSS功能，编辑`hexo/_config.yml`，添加如下代码：

```
rss: /atom.xml #rss地址  默认即可
```

