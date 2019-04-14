---
title: Hexo博客搭建
date: 2017-05-16 20:24:23
categories: 技术向
tags: [Hexo,博客]
cover_img: https://i.loli.net/2019/04/14/5cb2fa0f650d9.jpg   # 在文章摘要上显示
feature_img:   # 在文章详细页面上置顶
description:   # 文章描述
keywords:      # 关键字
---

搭个博客给记录下生活琐事、笔记以及传说中的奋斗史。
<!--more-->


这里记录下搭建的过程（Windows）以及一些踩过的坑，不堪回首的血泪史啊~  (ŎдŎ；) 。


## 1.安装Git

点击[Git-Downloads](https://git-scm.com/downloads)下载，安装过程一路next，搭建过程中只是为了使用**Git指令**比较简单，Git作为目前最受欢迎的开源分布式版本控制系统，有兴趣的童鞋可以瞅瞅更具体的教程哈，附上链接[廖雪峰Git教程](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/)and[Gitbook](https://git-scm.com/book/zh/v2)。

## 2.安装nodejs

在[nodejs官网](https://nodejs.org/en/)上，下载安装包，安装路径自定义，其他一路next。Windows上安装nodejs后自带npm（node包管理和分发工具），Linux上需独立安装npm。

<br/>
安装完成后使用以下命令查看nodejs和npm版本：

```
$ node -v
$ npm -v
```
### 这里贴上npm常用命令：<br/>

```
$ npm install <name> [-g] [--save-dev] // 安装插件

$ npm uninstall <name> [-g] [--save-dev] // 卸载插件

$ npm update <name> [-g] [--save-dev] // 更新插件

$ npm update [--save-dev] // 更新全部插件

$ npm help // 查看npm帮助

$ npm list // 查看当前目录已安装插件

```
* name : node插件名称；
* -g : 全局安装，并写入系统环境变量；
* --save : 保存配置信息至package.json；
* -div : 保存至package.json的devDependencies节点；

### npm更换淘宝镜像源
这里有四种方法，window上推荐使用1和3，方法4需要看网络有时候会加载失败。
1. 通过config命令
```
$ npm config set registry http://registry.npm.taobao.org 
$ npm info underscore //如果上面配置正确这个命令会有字符串response
```
2. 命令行指定
```
$ npm --registry https://registry.npm.taobao.org info underscore 
```
3. 编辑 ~/.npmrc 文件增加
```
$ registry = https://registry.npm.taobao.org
```
4. 安装cnpm
```
$ npm install cnpm -g --registry=https://registry.npm.taobao.org //安装完后最好查看其版本号cnpm -v或关闭命令提示符重新打开，安装完直接使用有可能会出现错误
```
以上命令都是在**命令行**或**Git Bash终端窗口**上执行。

## 3. 安装及配置Hexo

英文较好的可以查看[Hexo官网](https://hexo.io/)的[官方文档](https://hexo.io/docs/)。

### 下载安装Hexo

这里使用Windows的童鞋需要注意下官网安装Hexo的指令是`npm install hexo-cli -g`，但是安装完成后有些童鞋会发现使用hexo命令提示不是内部命令，这里推荐使用以下指令进行安装（不要问我为什么我也不知道试了n多回才发现的 o(╥﹏╥)o）：
```
$ npm install -g hexo
```

### 初始化
```
$ hexo init yourblog // 建立并初始化博客文件夹

$ cd yourblog // 进入博客文件夹

$ npm install // 安装依赖包

$ hexo generate //或者hexo g ，生成静态文件会在当前目录下生成一个新的叫做public的文件夹

$ hexo server //或者hexo s ，启动本地web服务，可以在http://localhost:4000/ 查看
```
初始化完成后目录为（PS：不一定一模一样哈）：
```
.
├── _config.yml //网站的 配置 信息，可以在此配置大部分的参数。
├── package.json
├── public
├── scaffolds     //模版 文件夹。新建文章时，Hexo 会根据 scaffold 来建立文件。
├── source     //资源文件夹是存放用户资源的地方。
|   ├── _drafts //草稿
|   └── _posts //文章
└── themes     //主题 文件夹。Hexo 会根据主题来生成静态页面。
```
那么现在打开浏览器输入`localhost:4000`看看博客界面吧。

### Hexo常用命令
```
$ hexo g == hexo generate //生成静态文件

$ hexo s == hexo server //启动本地Web服务，用于预览

$ hexo d == hexo deploy //前提需要修改站点配置文件部署部分详情可查看配置博客，部署到远端平台（GitHub/coding等平台）

$ hexo new "postName"  //新建文章

$ hexo new page "pageName"  //新建页面
```
注意：每次预览`hexo s`或部署`hexo d`前需要使用`hexo g`渲染生成静态文件后再执行。

### 配置博客
在博客文件夹根目录下找到**站点配置文件**`_config.yml`,以下是我的配置文件内容及配置说明：
```
# Hexo Configuration Hexo配置文件
## Docs: https://hexo.io/docs/configuration.html
## Source: https://github.com/hexojs/hexo/


# 网站信息
#标题
title: 那年四月
#副标题
subtitle: 小桥 · 流水 · 人家
#网站描述
description: 吃饭睡觉打豆豆(づ｡◕‿‿◕｡)づ
#作者昵称
author: 吃兔子的小萝卜
#网站语言，设置简体汉语
language: zh-Hans

#时区，默认电脑时区
#timezone: 
timezone: Asia/Shanghai

# 网址设置
#如果网站是放在子目录中，将url设置成'http://yoursite.com/child'，将root设置成'/child/'
## If your site is put in a subdirectory, set url as 'http://yoursite.com/child' and root as '/child/'
#网址
url: http://wangyiting.win
#网站根目录。如果网站是放在子目录中，将root设置成'子目录名'
root: /
#文章链接地址格式 。即文章存放的目录。
permalink: :year/:month/:day/:title/
permalink_defaults:

# 目录设置
#资源文件夹，放在里面的文件会上传到github中
source_dir: source
#公共文件夹，存放生成的静态文件
public_dir: public
#标签文件夹，默认是tags。实际存放在source/tags中。
tag_dir: tags
#rss_dir: rss
#档案文件夹，默认是archives。
archive_dir: archives
#分类文件夹，默认是categories。实际存放在source/categories中。
category_dir: categories
#代码文件夹，默认是downloads/code
code_dir: downloads/code
#国际化文件夹，默认跟language相同
i18n_dir: :lang
#不需要渲染的文件夹或文件夹,放在[]中
# 例如百度和google的站长验证文件，不能渲染，否则会改变内容，不能验证过
skip_render: 

# 写作文章选项
# 新建博文（帖子）的默认名称
# File name of new posts
new_post_name: :title.md 
#默认布局模板是post，而不是draft和page
default_layout: post
#是否将标题转换成标题形式（首字母大写）
titlecase: false # Transform title into titlecase
#在新标签页面中打开网页
external_link: true # Open external links in new tab
filename_case: 0
#是否渲染草稿
render_drafts: false
#启动 Asset 文件夹
post_asset_folder: false
#把链接改为与根目录的相对位址
relative_link: false
#显示未来的文章
future: true
#代码块的设置
highlight:
  enable: true # 使用代码高亮
  line_number: true # 显示行号
  auto_detect: true  # 自动检测语言
  tab_replace:


# 分类和标签
# 默认分类
default_category: uncategorized
#分类别名
category_map:
#标签别名
tag_map:


# 日期和时间格式
#Hexo 使用 Moment.js 来解析和显示时间。
## You can customize the date format as defined in
## http://momentjs.com/docs/#/displaying/format/
date_format: YYYY-MM-DD
time_format: HH:mm:ss


# 分页配置
#每页显示的文章量 
per_page: 8
#分页路径，在public中可以看到
#pagination_dir: page


# Extensions 拓展插件配置
## Plugins: https://hexo.io/plugins/
plugins: 
baidusitemap: 
  path: baidusitemap.xml

#search 站内搜索
# 需要安装插件：
# npm install hexo-generator-search --save
# npm install hexo-generator-searchdb --save
search:
  path: search.xml
  field: post
  format: html
  limit: 10000


# 主题配置
## Themes: https://hexo.io/themes/
#theme: false #禁用主题
#theme: landscape
theme: next


# Deployment  部署配置
## Docs: https://hexo.io/docs/deployment.html
deploy:
  type: git
  repo:
    # 部署到github，取消注释，可同时部署
    # github: git@github.com:erbiduo/wyt.github.io.git,master
    # 部署到coding.net
    coding: git@git.coding.net:erduo/blog.git,master
```
注意：其中`theme`主题配置默认为`landscape`，本站为`next`。

## 4. next主题下载&配置

满血复活 go on !!! ┗( ▔, ▔ )┛ 很好下一步美化下博客，想要查看详细的修改配置，可以参考[NexT官方文档](http://theme-next.iissnan.com/getting-started.html)，是中文版哦。<br/>

### 下载next主题
定位到Hexo站点目录（如e:hexo\yourblog\）下，使用git指令下载主题文件：
```
$ git clone https://github.com/iissnan/hexo-theme-next themes/next
```
### 启用主题
在博客文件夹根目录下找到**站点配置文件**`_config.yml`，修改如下：
```
# 主题配置
## Themes: https://hexo.io/themes/
#theme: false #禁用主题
#theme: landscape
theme: next
```
### 配置主题
在next主题文件夹`yourblog\themes\next`下，找到**主题配置文件**`_config.yml`，进行配置信息修改，以下为主题修改部分内容：

1. 主题样式选择
next有三种主题可供选择，修改next主题下`_config.yml`的`scheme`字段：
```
# Schemes 样式选择
#scheme: Muse
#scheme: Mist
scheme: Pisces
```

2. 菜单设置
修改next主题下`_config.yml`的`menu`字段:
```
menu: #菜单设置
  home: /  #主页
  categories: /categories  #分类页
  archives: /archives  #归档页
  tags: /tags  #标签页
  about: /about  #关于页面
  #sitemap: /sitemap.xml #站点地图
  #commonweal: /404.html  #404页面
```

3. 头像设置
修改next主题下`_config.yml`的`avatar`字段:
```
avatar: http://img.hb.aicdn.com/4bb35e890d55e0ad33d33f01af51ee498440c11a6c3d7-3qnhjf_fw658
```
	链接是头像图片链接可以自己修改。

4. 文章代码主题设置
Next主题总共支持5种主题，默认主题是白色的`normal`。可以通过修改next主题下的`_config.yml`的`highlight`字段，来设置代码主题。
```
highlight_theme: normal
```

5. 社交链接设置
修改next主题下`_config.yml`的`social`字段:
```
social:
  #LinkLabel: Link
  #GitHub: 
  #Twitter: 
  Weibo:  http://weibo.com/
```
	链接同上自行修改。

6. 首页文章摘要设置
next默认首页文章显示所有内容，想要只显示摘要，修改next主题下`_config.yml`的`auto_excerpt`字段:
```
auto_excerpt:
  enable: true #启用
  length: 150 #显示摘要字数
```

7. 添加菜单页面
做完上一步会发现在首页点击菜单上的分类、归档等页面都会报错，提示没有该页面，所以需要添加各个菜单页面，定位到站点文件夹，在终端中执行新建页面指令：
```
$ hexo new page tags //添加标签页面

$ hexo new page categories //添加分类页面

$ hexo new page about  //添加关于我页面
```
	输入命令后会在`yourblog/source`下生成对应文件夹，可以进入对应文件夹修改`.md`文件

## 5. 添加站内搜索

### 安装插件
安装`hexo-generator-search`和`hexo-generator-searchdb`,在站点的根目录下执行命令：
```
$ npm install hexo-generator-search --save

$ npm install hexo-generator-searchdb --save
```

### 启用搜索
编辑根目录下**站点配置文件**`_config.yml`，新增以下内容到任意位置：
```
search:
  path: search.xml
  field: post
  format: html
  limit: 10000
```
下一步修改next主题下`_config.yml`的`local_search`字段:
```
# Local search
local_search:
  enable: true
```

## 6. 添加文章阅读数统计
阅读数统计采用[Leancloud](https://leancloud.cn/)，没有账号的童鞋可以注册一个。
### 新建应用

填写应用名后点击创建。

### 创建Class
在左侧菜单存储中创建一个Class命名为`Counter`。


### Key配置
将设置中应用Key复制。


对应修改next主题下`_config.yml`的`leancloud_visitors`字段:
```
leancloud_visitors:
  enable: true
  app_id:   #<app_id>
  app_key:   #<app_key>
```

### 添加 lean-analytics.swig 文件
在主题的`layout\_scripts`路径下，新建一个 lean-analytics.swig 文件，并向里面添加以下内容：
```
<!-- custom analytics part create by xiamo -->
<script src="https://cdn1.lncld.net/static/js/av-core-mini-0.6.1.js"></script>
<script>AV.initialize("{{theme.leancloud_visitors.app_id}}", "{{theme.leancloud_visitors.app_key}}");</script>
<script>
function showTime(Counter) {
	var query = new AV.Query(Counter);
	$(".leancloud_visitors").each(function() {
		var url = $(this).attr("id").trim();
		query.equalTo("url", url);
		query.find({
			success: function(results) {
				if (results.length == 0) {
					var content = $(document.getElementById(url)).text() + ': 0';
					$(document.getElementById(url)).text(content);
					return;
				}
				for (var i = 0; i < results.length; i++) {
					var object = results[i];
					var content = $(document.getElementById(url)).text() + ': ' + object.get('time');
					$(document.getElementById(url)).text(content);
				}
			},
			error: function(object, error) {
				console.log("Error: " + error.code + " " + error.message);
			}
		});

	});
}

function addCount(Counter) {
	var Counter = AV.Object.extend("Counter");
	url = $(".leancloud_visitors").attr('id').trim();
	title = $(".leancloud_visitors").attr('data-flag-title').trim();
	var query = new AV.Query(Counter);
	query.equalTo("url", url);
	query.find({
		success: function(results) {
			if (results.length > 0) {
				var counter = results[0];
				counter.fetchWhenSave(true);
				counter.increment("time");
				counter.save(null, {
					success: function(counter) {
						var content = $(document.getElementById(url)).text() + ': ' + counter.get('time');
						$(document.getElementById(url)).text(content);
					},
					error: function(counter, error) {
						console.log('Failed to save Visitor num, with error message: ' + error.message);
					}
				});
			} else {
				var newcounter = new Counter();
				newcounter.set("title", title);
				newcounter.set("url", url);
				newcounter.set("time", 1);
				newcounter.save(null, {
					success: function(newcounter) {
					    console.log("newcounter.get('time')="+newcounter.get('time'));
						var content = $(document.getElementById(url)).text() + ': ' + newcounter.get('time');
						$(document.getElementById(url)).text(content);
					},
					error: function(newcounter, error) {
						console.log('Failed to create');
					}
				});
			}
		},
		error: function(error) {
			console.log('Error:' + error.code + " " + error.message);
		}
	});
}
$(function() {
	var Counter = AV.Object.extend("Counter");
	if ($('.leancloud_visitors').length == 1) {
		addCount(Counter);
	} else if ($('.post-title-link').length > 1) {
		showTime(Counter);
	}
}); 
</script>
```
完成后开启预览见证一下奇迹吧。

## 7.部署上线
博客可以同时部署在**[Github](https://github.com/)**和**[Coding](https://coding.net/)**上，添加**SSH Key**和**项目创建**操作其实差不多，木有账号的童鞋可以去各自官网注册一个，这里就以Github为例。

### 创建SSH Key
打开`Git Bash`，输入命令：
```
$ ssh-keygen -t rsa -C "youremail@example.com"
```
邮件换成自己注册的邮件地址。完成后查看用户主目录下`.ssh`文件夹，目录下会有`id_rsa`和`id_rsa.pub`这两个文件，这两个就是SSH Key的秘钥对,id_rsa是私钥，id_rsa.pub是公钥。

### 添加SSH Key
登陆GitHub，点击头像打开`Account settings`，`SSH Keys`页面，然后，点`Add SSH Key`，填上任意`Title`，在`Key`文本框里粘贴`id_rsa.pub`文件的内容：

### 创建项目
创建项目，输入项目名称`myblog`，选择公开`Public`。

### 设置pages服务
项目创建成功后，选择`Setting`下拉至`Github Pages`设置页面展示分支为`master branch`并保存。
注意：**站点配置文件**`_config.yml`中，网址设置：
```
url: https://erbiduo.github.io/
root: //myblog
```
* `url`为pages服务的页面网址`https://erbiduo.github.io/`。
* `root`需要改为项目名称即子目录名`/myblog`而不是`/`。

否则会出现加载页面之后没有样式的情况。自定义域名时修改回来即可。<br/>

### 配置deploy部署
修改站点目录下`_config.yml`的`deploy`字段，输入对应项目地址及分支:
```
deploy:
  type: git
  repo:
    # 部署到github
    # github: git@github.com:erbiduo/xxx.github.io.git,master
    # 部署到coding.net。取消注释，可同时部署
    coding: git@git.coding.net:erduo/blog.git,master
```

### 部署
定位到博客文件目录下执行命令：
```
$ git init //初始化本地仓库

$ hexo g  //生成静态页面

$ hexo s //预览

$ hexo d //部署
```
OK 至此全部搞定，个性化修改的话可以参考next主题[官方文档](http://theme-next.iissnan.com/getting-started.html)。

<!-- ![1](https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492357442325&di=416982fa22136fd517c1174baea0a114&imgtype=0&src=http%3A%2F%2Fi2.qhimg.com%2Ft0176245da8cf4fd621.jpg?imageMogr2/format/webp) -->