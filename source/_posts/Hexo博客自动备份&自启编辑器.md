---
title: Hexo自动备份及自启编辑器
date: 2017-10-15 15:15:59
categories: 技术向
tags: [Hexo,博客]
cover_img: https://i.loli.net/2019/04/14/5cb2fa110b274.jpg    # 在文章摘要上显示
feature_img:   # 在文章详细页面上置顶
description:   # 文章描述
keywords:      # 关键字
---

偷懒使人明智，Hexo博客自动备份方案~
<!--more-->

#### 安装`shelljs`模块

```
$ npm install --save shelljs 
```

#### 编写自动备份脚本

模块安装完成之后，在Hexo根目录下`scripts`文件夹下（*没有就新建*），新建`backup.js`文件。
写入以下内容：

```
require('shelljs/global');
try {
	hexo.on('deployAfter', function() {//当deploy完成后执行备份
		run();
	});
} catch (e) {
	console.log("产生了一个错误<(￣3￣)> !，错误详情为：" + e.toString());
}
function run() {
	if (!which('git')) {
		echo('Sorry, this script requires git');
		exit(1);
	} else {
		echo("======================Auto Backup Begin===========================");
		cd('H:\My_project\myBlog');  //此处修改为Hexo根目录路径
		if (exec('git add --all').code !== 0) {
			echo('Error: Git add failed');
			exit(1);
		}
		if (exec('git commit -am "Form auto backup script\'s commit"').code !== 0) {
			echo('Error: Git commit failed');
			exit(1);
		}
		if (exec('git push origin master').code !== 0) {  //此处修改为自己的远程仓库名和分支名
			echo('Error: Git push failed');
			exit(1);
		}
		echo("==================Auto Backup Complete============================")
	}
}
```

保存后，执行`hexo deploy`命令，发布的同时就会进行备份了。

#### 编写自动开启编辑器脚本

在Hexo根目录下`scripts`文件夹下，新建`sublime.js`（*可自定义*）文件。
如果你是windows平台的Hexo用户，则将下列内容写入你的脚本：

```
var spawn = require('child_process').exec;
// Hexo 2.x 用户复制这段
hexo.on('new', function(path){
  exec('start  "markdown编辑器绝对路径.exe" ' + path);
});
// Hexo 3 用户复制这段
hexo.on('new', function(data){
  exec('start  "markdown编辑器绝对路径.exe" ' + data.path);
});
```

如果你是Mac平台Hexo用户，则将下列内容写入你的脚本：

```
var exec = require('child_process').exec;
// Hexo 2.x 用户复制这段
hexo.on('new', function(path){
    exec('open -a "markdown编辑器绝对路径.app" ' + path);
});
// Hexo 3 用户复制这段
hexo.on('new', function(data){
    exec('open -a "markdown编辑器绝对路径.app" ' + data.path);
});
```

KO!