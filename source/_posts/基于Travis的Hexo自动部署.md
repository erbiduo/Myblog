---
title: 基于Travis的Hexo自动部署
date: 2019-3-19 19:57:04
categories: 技术向
tags: [Hexo,笔记,Travis,转载]
cover_img:  https://ws1.sinaimg.cn/large/0069qIgcgy1g188wocu1fj30jg09qtaw.jpg   # 在文章摘要上显示
feature_img:   # 在文章详细页面上置顶
description:   # 文章描述
keywords:      # 关键字
---

Hexo迁移博客太麻烦了，我懒~哈哈~此文[转载](https://kchen.cc/2016/11/12/hexo-instructions/#Travis-%E5%92%8C-Hexo)记下防忘记。（PS:最好在mac上处理，windows各种坑... ...）

<!--more-->

## 注册Travis

上[官网](https://travis-ci.org/)会发现有 Sign in with GitHub（使用GitHUb登录）和 Sign Up（注册），其实这俩做的事情都一样，就是用 GitHub 账号登录。登录后界面会显示你的 GitHub Repository，默认全部全部没有勾选，选择你的博客的 Repository 后完成第一步，如图

![](https://ws1.sinaimg.cn/large/0069qIgcgy1g188ep1vvkj30qo0dwq4s.jpg)

如果你没有看到自己的项目，请点击右上角的 Sync with Github。

##  安装 Travis CML

在进行下面的步骤之前，我们需要先安装 Travis 的 CML，因为后面的部署需要我们加密的自己的 SSH 私钥和 Github、Coding.net 通信。安装过程请看 [Travis CML Installation](https://github.com/travis-ci/travis.rb#installation)：

首先必须有 [Ruby](http://www.ruby-lang.org/en/downloads/) 1.9.3 以上，检查了版本之后，安装 Travis，检查版本即可：

```
ruby -v
gem install travis -v 1.8.4 --no-rdoc --no-ri
travis version
```

如上，如果出现 1.8.2 这样的版本信息，则说明 Travis CI Command Line Client 安装成功。之后进行登录，执行：

```
travis login
```

按照提示登录就好了。

## 配置 Travis

在博客根目录下添加 Travis CI 所需要的配置文件 `.travis.yml`，配置文件内容和一些说明如下：

```
language: node_js
node_js: stable

# assign build branches
branches:
  only:
    - blog-source

# cache this directory
cache:
  directories:
    - node_modules

# S: Build Lifecycle
before_install:
  - openssl aes-256-cbc -K $encrypted_a0b7f0848317_key -iv $encrypted_a0b7f0848317_iv -in ./.travis/id_rsa.enc -out ~/.ssh/id_rsa -d
  - chmod 600 ~/.ssh/id_rsa
  - eval $(ssh-agent)
  - ssh-add ~/.ssh/id_rsa
  - cp .travis/ssh_config ~/.ssh/config
  - npm install -g hexo-cli # 安装 hexo
  - git clone -b mod https://github.com/quentin-chen/hexo-theme-even.git themes/even

install:
  - npm install # 安装 package.json 中的插件

script:
  - hexo generate

after_success:
  - git config --global user.name "Quentin_Chen"
  - git config --global user.email "quentin.chen@foxmail.com"
  - sed -i'' "/^ *repo/s~github\.com~${githubToken}@github.com~" _config.yml
  - hexo deploy
# E: Build LifeCycle
```

我逐步来讲解一下每一个配置项的意思。

```
language: node_js
node_js: stable

# assign build branches
branches:
  only:
    - blog-source

# cache this directory
cache:
  directories:
    - node_modules
```

这里指定了构建的环境是 Node.js，版本是当前稳定版本。设置的 WebHook 钩子只检测 `blog-source` 分支的 `push` 变动。另外我们把 `node_modules` 文件夹放入缓存，这样可以大大节约每次构建的时间（2min -> 30s）。

```
before_install:
  - openssl aes-256-cbc -K <you_key> -iv <your_iv> -in ./.travis/id_rsa.enc -out ~/.ssh/id_rsa -d
  - chmod 600 ~/.ssh/id_rsa
  - eval $(ssh-agent)
  - ssh-add ~/.ssh/id_rsa
  - cp .travis/ssh_config ~/.ssh/config
  - npm install -g hexo-cli # 安装 hexo
  - git clone <theme_repo> themes/<theme>
```

其实每次 Travis 构建的时候，相当于创建了一个干净的虚拟机，除了 Git 等必须的工具，甚至连 Node.js 的环境都是现安装的。所以我们在构建自己的博客之前，需要做一些环境的准备。

其中 2-6 行是用来配置 SSH 私钥的，这样才能让 Github 和 Coding.net 知道你的身份。这一部分我们后面再说。

第 7 行是在 Travis 中安装 Hexo 环境，第 8 行是安装主题。

> 关于主题这里，如果你对自己的主题做了修改（包括配置文件），那么应该把自己修改过的主题托管到 Github，这里填的 `<theme_repo>` 应是你自己地址。

```
install:
  - npm install # 安装 package.json 中的插件

script:
  - hexo generate

after_success:
  - git config --global user.name "<You Name>"
  - git config --global user.email "<email>"
  - hexo deploy
```

这一部分，就是在 Travis 上模拟部署过程。因为要使用 Git，所以要提前配置好 Committer 的信息。

#### 生成私钥加密文件

> 什么是私钥？

私钥就是密钥对（密钥对指一对公钥和私钥），我们在使用 Github 的时候，首先需要在 Github 上配置公钥，这是最基础的。那么，存在我们本地的私钥就是你的个人身份标示，如果你的项目 git 地址配置的是 [git@github.com](mailto:git@github.com):username/projectname.git（相对的还有 [https://github.com/username/projectname.git），](https://github.com/username/projectname.git%EF%BC%89%EF%BC%8C) 当你在对 Repository 在一些操作（比如 `push` 等），则需要私钥进行身份验证了（这是自动验证的，如果是使用 https 的配置，则需要提供用户名和密码）。

我们在 Travis CI 上自动部署代码，就牵扯到了 `push` 操作，那么就需要提供私钥了。

> 为什么生成私钥加密文件？

将私钥直接放在项目里，那么人人都能看到。私钥的泄露将会发生一系列的问题，比如有坏人拿你的私钥直接操作你的 git 项目，你能干啥他也能干啥（原理上面讲了），这咋整？我们需要对私钥进行加密。

Travis 提供了加密文件的支持，什么意思呢？我们可以对文件（这里指私钥）在本地进行加密，然后把加密过后的文件放在项目里，那么别人就无法获取里面的真实内容。然后我们在让 Travis 执行脚本的时候，在读取加密文件之前对文件进行解密（使用的解密密码提前在 Travis 上配置好了），这样就可以达到不将文件内容暴露，并且让 Travis 获取到真实内容的目的了，大概的时序图如下：

![](https://ws1.sinaimg.cn/large/0069qIgcgy1g188kvbtcaj30qo0kmdi6.jpg)

开始吧，我们首先把自己的在博客的根目录下建立 `.travis` 文件夹来存放相关的资料：

```
mkdir .travis && cd .travis
```

把本地的私钥复制一份过来，用 Travis 加密，然后删除（**切记加密完了一定要删除原始密钥！！！**）：

```
cp ~/.ssh/id_rsa .
travis encrypt-file id_rsa
rm id_rsa
```

现在 `ls` 命令查看一下 `.travis` 目录应该只有 `id_rsa.enc` 这一个文件才对。然后我们再在当前目录下新建一个 `ssh_config` 用来配置 Travis 上的 SSH Client。

```
Host *
  User git
  StrictHostKeyChecking no
  IdentityFile ~/.ssh/id_rsa
  IdentitiesOnly yes
```

现在，我们在 Travis 网站，博客项目的设置（项目右上角）里可以看到两个用于解密私钥的环境变量：

![](https://ws1.sinaimg.cn/large/0069qIgcgy1g188ltumjfj30qo0lktc2.jpg)

把这两个环境变量名复制到上面的 `.travis.yaml` 文件里替换相应部分：

```
before_install:
  - openssl aes-256-cbc -K <you_key> -iv <your_iv> -in ./.travis/id_rsa.enc -out ~/.ssh/id_rsa -d
```

这样，全部的配置就完成了。

## 完成工作流

在进行工作流之前我们来检查一下我们现在工作目录和所有必须的东西：

```
.
├── .travis*
│   ├── id_rsa.enc
│   └── ssh_config
├── _config.yml*
├── db.json*
├── node_modules
├── package.json*
├── scaffolds*
├── source*
│   ├── CNAME*
│   ├── _posts
│   ├── about
│   ├── categories
│   ├── img
│   ├── media
│   └── tags
└── themes
```

我用星号标记的文件和文件夹都是十分重要的，确保 Git 覆盖了这些文件和目录，然后我们把目录 `push` 到 `github/blog-source` 仓库分支。Travis WebHook 立马就会检测到 `push`，然后开始构建了：

![](https://ws1.sinaimg.cn/large/0069qIgcgy1g188npaz7tj30qo0f00vd.jpg)

