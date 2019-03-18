---
title: Hexo添加Gitalk
date: 2017-10-28 19:47:47
categories: 技术向
tags: [Hexo]
cover_img: https://i.loli.net/2019/03/17/5c8e61a42e0b8.jpg    # 在文章摘要上显示
feature_img:   # 在文章详细页面上置顶
description:   # 文章描述
keywords:      # 关键字
---

特殊时段，好多“红杏“类软件都扑街了，而且disqus在国内的加载速度那个惨啊，搞个Gitalk试试喽～
<!--more-->

## 1.安装

[Gitalk](https://github.com/gitalk/gitalk)提供了两种方式：

1. 直接引入

```
<link rel="stylesheet" href="https://unpkg.com/gitalk/dist/gitalk.css">
  
<script src="https://unpkg.com/gitalk/dist/gitalk.min.js"></script>
```

2. npm安装

```
npm i --save gitalk

import 'gitalk/dist/gitalk.css'

import Gitalk from 'gitalk'
```

鉴于我懒的程度直接选择第一种了TAT。

## 2.使用

### 新建仓库

1. Github上新建一个仓库，命名随便只要记得住，这里就不赘述了,详细操作查看[Hexo博客搭建](https://www.wangyiting.win/2017/05/16/hexo%E5%8D%9A%E5%AE%A2%E6%90%AD%E5%BB%BA.html)。

2. 创建`OAuth Application`，没有的小伙伴[请戳我](https://github.com/settings/applications/new)。 

完成后会生成相应的`clientID`and`clientSecret`。


### 修改主题文件

1. 这里以next主题为例，不同的主题目录和模板引擎不同，可以自己修改哈,修改next主题配置文件`_config.yml`，于`dikqus`上方，添加字段：

```
# Gitalk
gitalk: 
  enable: true    #用来做启用判断可以不用
  clientID: 'your clientID'    #上面生成的往这里怼
  clientSecret: 'your clientSecret'   #同上
  repo: Blog_comments    #仓库名称
  owner: erbiduo    #github用户名
  admin: erbiduo
  distractionFreeMode: true
```

2. 找到`next/layout/_third-party/comments`文件夹，新建`gitalk.swig`文件，代码如下：

```
{% if not (theme.duoshuo and theme.duoshuo.shortname) and not theme.duoshuo_shortname %}
  
  {% if theme.gitalk.enable %}  //_config.yml文件若没有添加enable: true可删除该判断

    {% if theme.gitalk.distractionFreeMode  %}      
      <link rel='stylesheet' href="https://yiyeti.cc/usr/themes/veryse/css/gitalk.css">
      <script src="https://yiyeti.cc/usr/themes/veryse/css/gitalk.min.js"></script>
      <script type="text/javascript">
          var gitalk = new Gitalk({
            clientID:  '{{theme.gitalk.clientID}}', 
            clientSecret: '{{theme.gitalk.clientSecret}}',
            id: window.location.pathname,
            repo: '{{theme.gitalk.repo}}', 
            owner: '{{theme.gitalk.owner}}', 
            admin: '{{theme.gitalk.admin}}', 
            distractionFreeMode: '{{theme.gitalk.distractionFreeMode}}',
          })
          gitalk.render('gitalk-container')
      </script>
    {% endif %}

  {% endif %}
{% endif %}
```

3. 同目录下在`index.swig`文件末尾添加：

```
{% include 'gitalk.swig' %}
```

4. 下步搞起，`next/layout/_partials`文件夹下，找到`comments.swig`文件，添加代码：

```
{% elseif theme.gitalk.distractionFreeMode %}  
  <div id="gitalk-container"></div>
{% endif %}
```

哦了，不过Gitalk在移动端属于隐形状态。