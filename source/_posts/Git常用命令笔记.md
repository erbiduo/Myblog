---
title: Git常用命令笔记
date: 2017-10-15 11:46:44
categories: Git
tags: [Git,笔记]
---

<img class="full-image" src="http://oohkvf5b9.bkt.clouddn.com/A06_Gitnote.jpg?imageMogr2/format/webp">
由于各种原因，好久没有用，都忘的七七八八了，基础教程查看归纳比较累，还是整理了下笔记防止忘记吧！
<!--more-->

## Git设置

初次安装完成后需要进行**名字**和**Email**地址设置：

```
$ git config --global user.name "Your Name"

$ git config --global user.email "email@example.com"
```

## 版本库创建

```
$ git init //把当前目录变成Git可以管理的仓库
```

### 添加文件

```
$ git add <file> //添加文件到暂存区

$ git add . //添加所有新文件和编辑过的文件，但不包括删除的文件

$ git add -u //添加编辑或删除的文件，不包括新添加文件

$ git add -A . //添加所有改变的文件

$ git add -A //添加所有内容

$ git commit -m "describe" //提交文件到仓库
```

## 版本管理

```
$ git status //查看仓库当前状态

$ git diff <file> //查看文件修改内容
```

### 版本退回

```
$ git reset --hard HEAD //返回当前版本

$ git reset --hard HEAD^ //返回上个版本

$ git reset --hard HEAD~100 //返回上100个版本

$ git reset --hard commit_id //返回对应commit_id版本

$ git log //查看提交历史，以便确定要回退到哪个版本

$ git reflog //关闭终端后，查看提交历史，以便确定要回退到哪个版本
```

### 撤销修改

```
$ git checkout -- file //撤销工作区的修改

$ git reset HEAD file //撤销暂存区的修改,后用上面命令丢弃修改
```

### 删除文件

```
$ git rm <file> //删除一个文件，误删情况下可用 git checkout --file 恢复文件
```

## 远程仓库

### 添加远程库

```
$ git remote add origin git@server-name:path/repo-name.git //关联远程库

$ git push -u origin master //第一次推送master分支的所有内容

$ git push origin master //之后推送master分支的最新修改

$ git remote //查看远程库信息，添加 -v 显示详细信息
```

### 从远程库克隆

```
$ git clone https://github.com/yourname/repo-name.git //克隆远程库
```

## 分支管理

### 创建与合并

```
$ git branch //查看分支

$ git branch <name> //创建分支

$ git checkout <name> //切换分支

$ git checkout -b <name> //创建并切换分支

$ git merge <name> //合并某分支到当前分支

$ git log --graph //查看分支合并图

$ git branch -d <name> //删除分支

$ git branch -D <name> //强行删除

$ git merge --on-ff -m "describe" <name> //普通模式合并，合并后历史有分支，可以使用 git log 命令查看
```

### 工作区存储

当临时bug或者任务需要切换至其他分支进行工作时，可先存储当前工作现场，切换至其他分支完成工作后，返回分支恢复现场继续工作。

```
$ git stash //“储藏”当前工作现场

$ git stash list //查看“储藏”的工作现场

$ git stash apply //恢复，但不删除stash内容

$ git stash drop //删除stash内容

$ git stash pop //恢复同时删除stash内容
```

## 标签管理

### 创建标签

```
$ git tag <tagname> //创建标签

$ git tag <tagname> commit_id //在对应的历史提交上，创建标签

$ git tag -a <tagname> -m "describe" commit_id //在对应的历史提交上，创建带有说明的标签

$ git tag //查看所有标签

$ git show <tagname> //查看标签信息
```

### 操作标签

```
$ git tag -d <tagname> //删除本地标签

$ git push origin <tagname> //推送某个标签到远程库

$ git push origin --tags //推送所有未推送的标签到远程库

$ git push origin :refs/tags/<tagname> //删除一个远程标签，前提需要先删除本地标签
```

## 自定义Git

例如：

```
$ git config --global color.ui true //使Git适当地显示不同的颜色
```

### 配置别名

别名配置栗子：

```
$ git config --global alias.st status //用st替换status

$ git config --global alias.co checkout

$ git config --global alias.br branch

$ git config --global alias.last log -1 //最后一次提交log

$ git config --global alias.unstage 'reset HEAD' //把暂存区的修改撤销掉（unstage），重新放回工作区

$ git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit" //格式化显示log
```

配置Git的时候，加上`--global`是针对当前用户起作用的，如果不加，那只针对当前的仓库起作用。而当前用户的Git配置文件放在用户主目录下的一个隐藏文件`.gitconfig`中：

```
$ cat .gitconfig
[alias]
    co = checkout
    ci = commit
    br = branch
    st = status
[user]
    name = Your Name
    email = your@email.com
```
别名就在[alias]后面，要删除别名，直接把对应的行删掉即可。

每个仓库的Git配置文件都放在`.git/config`文件中，:

```
$ cat .git/config 
[core]
    repositoryformatversion = 0
    filemode = true
    bare = false
    logallrefupdates = true
    ignorecase = true
    precomposeunicode = true
[remote "origin"]
    url = git@github.com:yourname/repo-name.git
    fetch = +refs/heads/*:refs/remotes/origin/*
[branch "master"]
    remote = origin
    merge = refs/heads/master
[alias]
    last = log -1
```



