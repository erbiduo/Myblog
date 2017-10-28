[原地址](https://notes.wanghao.work/2015-07-06-%E8%87%AA%E5%8A%A8%E5%A4%87%E4%BB%BDHexo%E5%8D%9A%E5%AE%A2%E6%BA%90%E6%96%87%E4%BB%B6.html)

---------------------------backup为博客源文件自动备份脚本--------------------------

1.安装`shelljs`模块

$ npm install --save shelljs 

2.编写自动备份脚本

模块安装完成之后，再hexo根目录下`scripts`文件夹（*没有就新建*）新建backup.js文件。
写入一下内容：

require('shelljs/global');
try {
	hexo.on('deployAfter', function() {//当deploy完成后执行备份
		run();
	});
} catch (e) {
	console.log("产生了一个错误<(‾3‾)> !，错误详情为：" + e.toString());
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


其中，需要修改第17行的D:/hexo路径为Hexo的根目录路径。（脚本中的路径为博主的Hexo路径）

cd('D:/hexo');    //此处修改为Hexo根目录路径

如果你的Git远程仓库名称不为origin的话，还需要修改第28行执行的push命令，修改成自己的远程仓库名和相应的分支名。

if (exec('git push origin master').code !== 0) {


---------------------------sublime为添加文章自动打开编辑器脚本---------------------

如果你是windows平台的Hexo用户，则将下列内容写入你的脚本：


var spawn = require('child_process').exec;
// Hexo 2.x 用户复制这段
hexo.on('new', function(path){
  exec('start  "markdown编辑器绝对路径.exe" ' + path);
});
// Hexo 3 用户复制这段
hexo.on('new', function(data){
  exec('start  "markdown编辑器绝对路径.exe" ' + data.path);
});




如果你是Mac平台Hexo用户，则将下列内容写入你的脚本：


var exec = require('child_process').exec;
// Hexo 2.x 用户复制这段
hexo.on('new', function(path){
    exec('open -a "markdown编辑器绝对路径.app" ' + path);
});
// Hexo 3 用户复制这段
hexo.on('new', function(data){
    exec('open -a "markdown编辑器绝对路径.app" ' + data.path);
});