---
title: 黑苹果macOS 10.14 Mojave安装
date: 2019-4-14 19:32:04
categories: 技术向
tags: [黑苹果,笔记,转载]
cover_img:  https://i.loli.net/2019/04/25/5cc12cf918c09.jpg   # 在文章摘要上显示
feature_img:   # 在文章详细页面上置顶
description:   # 文章描述
keywords:      # 关键字
---


## 黑苹果macOS 10.14 Mojave安装

本文[转载](https://post.smzdm.com/p/az597lqo/)。
[VMware安装macOS教程](https://post.smzdm.com/p/ax08lz74/)

现在黑苹果越来越简单，工具和驱动都在不断丰富，只要你认真读懂了这篇文章，机器是近三代常规硬件（N卡不行），一般都可以实现黑果，难度很小，全文很多关于Clover的设置选项及功能都是我自己研究、尝试得出的资料，全部看懂可以省下你一两年的折腾。

## 黑苹果知识获取

- [tonymacx86.com](http://www.tonymacx86.com/)：这是国外的一个黑苹果论坛，上面有几位非常厉害的Clover和相关Kexts维护者，不收费有详细教程，首推论坛！
- [insanelyMac](http://www.insanelymac.com/)：国外一个比较早的一个黑苹果论坛，就是在上文中[osx86社区](http://www.osx86project.org/)衍生而来的论坛，人数也不少，但是我用的较少，了解不多，有时候下载的会到这边来。
- [github](http://www.github.com/)：Github也是一个非常好的黑果资源搜索器，首先大部分的Kexts开发者都把库放到了这里，其次很多现成现成的EFI也在上边，在这里我发现了最佳黑苹果笔记本——XPS 9360顶配。
- [远景论坛](http://bbs.pcbeta.com/)：算是国内最大的黑苹果论坛，最早我接触黑苹果的时候就是在威锋x86和远景，相对而言威锋x86很多资料都太老了，置顶的精华都是好几年前的，对现在根本没有帮助，所以国内论坛首选远景，国内比较知名的黑果开发者也在上面混，但是远景也有很多问题，首先貌似现在是不开放的状态，注册要邀请码，其次远景曾经有一年左右时间存在问题，域名解析或者[服务器](https://www.smzdm.com/fenlei/fuwuqi/)挂了，最最重要的是远景知识不成体系，很多时候大家都是做了个EFI分享出来完事儿，究竟怎么做的，重点在哪里，这个比较少，而且很多资源都是搬运国外的东西，个人建议你如果黑苹果水平还不错，闲来看看别人在玩啥可以，但别想着从这里学会东西。
- 诸多个人论坛：这个需要个人收集，国内的有国光、黑果小兵，国外的nickwoodhams等等，先不用急着看，个人建议先从tonymacx86看起。

## 前期准备



### 配置环境

macOS 10.14.3 Mojave

### 本机电脑配置

处理器：intel i7 6400T
主板：华擎Z170 OC Formula
内存：海盗船DDR4 3000 C15 8G
固态：[三星](https://pinpai.smzdm.com/257/)SM961 256G
显卡：蓝宝石RX 570超白金

### 准备工具

1. Clover Configuration
2. Clover v4658 or newer/newest Clover of RehabMan Build
3. 8G+U盘一只
4. 支持UEFI启动的目标电脑，CPU要求Ivy Bridge及更新的处理器，Sandy Bridge及更老处理器请自行研究



## 关于硬件的兼容性问题

在开始之前我要简单谈谈关于硬件的兼容性问题，
一般来说本文只要是Ivy Bridge之后的CPU都没什么问题，如果是SandyBridge处理器，由于Mojave不支持Sandy Bridge平台安装，请在Clover Boot arguments中添加 `-no-compat_check` 来跳过Mojave的兼容性检查。
固态方面：NVME固态包括但不限于建兴、海力士等部分型号和三星PM981，这些固态的主控macOS不认，所以安装根本找不到，SATA固态则没有这个问题。
显卡方面：目前只推荐Intel核显和AMD RX460/470/480/560/570/580和Vega 56/64，需要注意2048sp的RX 580是不能用的。

## 创建macOS Install USB Drive

从这篇文章起，我们就真正的开始进入安装黑苹果的阶段，现在我们已经知道，一台Intel处理器的电脑安装黑苹果，实际上是由BIOS Legacy或者UEFI引导第三方EFI启动器，例如Clover，来实现启动macOS。目前最主流的方案是UEFI+Clover创建、安装、引导macOS Mojave，所以我们首先需要创建macOS Mojave的安装U盘。

很多人不明白为什么我要在第一篇文章中使用U盘来安装虚拟机macOS Mojave，而不是使用vmdk硬盘镜像。事实上这种安装方法能节省我们创建U盘的时间，不需要再下载第二次macOS安装镜像文件。对于我们来说我们直接将U盘连接到虚拟机macOS中，然后在U盘的EFI分区中安装Clover即可。

但是为了让手头有Macbook Pro等设备而没进行第一篇安装虚拟机操作的人也能创建黑苹果安装U盘，我将会讲解一次从空白的U盘到创建U盘镜像的完整过程，**已经按照第一篇文章使用U盘安装虚拟机的可以跳过这个步骤。进入下一段！**

首先，我们下载最新版本的Mojave，这可以从App Store中下载



![App Store下载Mojave](https://i.loli.net/2019/04/14/5cb30c7642f2d.png)App Store下载Mojave





![勾选获取](https://i.loli.net/2019/04/14/5cb30c72af663.png)勾选获取



弹出偏好中的系统更新，然而不知道为什么下载失败，不清楚是否由于虚拟机环境造成，实体机应该不会有这样的现象。



![失败](https://i.loli.net/2019/04/14/5cb30c6d7bb6f.png)失败

故我只能剑走偏锋，经过google搜索how to reinstall mojave，我发现了一个小软件名为macOS Mojave Patcher。通过Patcher内置的Tools可以下载Mojave。





![macOS Mojave Patcher](https://i.loli.net/2019/04/14/5cb30c7486ec3.png)macOS Mojave Patcher





确认后即可开始下载。



**![Download macOS](https://i.loli.net/2019/04/14/5cb30c6f701a6.png)Download macOS**





总体来说下载速度并不慢



![下载过程](https://i.loli.net/2019/04/14/5cb30c6e65972.png)下载过程




下载完毕后在/Application目录下就可以找到Install macOS Mojave的安装器。我们既可以使用macOS Mojave Patcher创建U盘，也可以用命令行创建，我两种方法都演示一遍：

首先是macOS Mojave Patcher，点击左边的icon，跳出选择安装app，我们选择/Application/Install macOS Mojave，点击打开。





![在软件中可以直接烧录](https://i.loli.net/2019/04/14/5cb30c7061d71.png)在软件中可以直接烧录







**![选择Mojave安装文件](https://i.loli.net/2019/04/14/5cb30c716f29a.png)选择Mojave安装文件**




接着再点击右侧的Target Disk，选择U盘为目标磁盘，接下来点击Start Operation就开始烧录了。

![安装到对应磁盘](https://i.loli.net/2019/04/14/5cb30e2ee988f.png)安装到对应磁盘

第二种方法是使用Terminal创建，需要对命令行有一定的熟悉。

首先将U盘插入虚拟机或者MacBook Pro，打开macOS自带的Terminal终端，输入`diskutil list` ，输出如下图所示。



![查看磁盘分区](https://i.loli.net/2019/04/14/5cb30e2a53c77.png)查看磁盘分区

从图中可以看出，我的电脑有3个磁盘，disk0是真正的物理磁盘，分为两个分区，disk0s1是EFI引导分区，disk0s2则是APFS文件系统的容器，这个容器虚拟化成disk1，再在其中分为4个分区，分别为安装系统的Macintosh HD、不知道干什么用的Preboot、恢复使用的Recovery分区和最后描述APFS文件虚拟化的VM分区。而disk3则是我的U盘，所以现在我们已经知道了disk3是我们要操作的对象。

diskutil partitionDisk /dev/disk3 1 GPT HFS+J "install_osx" R

diskutil是磁盘管理命令，partitionDisk表示对目标磁盘进行格式化，/dev/disk3则是U盘对应的硬件名（因为在Unix下任何硬件都对应着一个文件），1表示除EFI分区外只留下一个分区，GPT意味着使用GUID分区图，HFS+J使用HFS分区文件系统，install_osx则是格式化后的分区名。输出结果如图所示：我们已经创建了一个200M+的EFI分区（苹果引导EFI区必须要大于200M）和一个15.7GB的分区。



![划分U盘分区](https://i.loli.net/2019/04/14/5cb30e2c1d7c6.png)划分U盘分区

接下来我们要使用命令创建安装U盘。输入以下命令：

sudo /Applications/Install macOS Mojave.app/Contents/Resources/createinstallmedia --volume  /Volumes/install_osx --nointeraction

sudo表示调用超级管理员权限，意味着等会儿执行命令需要输入账户密码，后面跟的/Applica->media则表示使用这个路径的命令，—volume后面的表示目标分区为U盘。执行命令后将会格式化U盘并COPY系统安装文件。



![烧录完成](https://i.loli.net/2019/04/14/5cb30e29821f6.png)烧录完成



# Create Clover EFI and Configuration

接下来我们需要对U盘的EFI分区安装Clover，这里既可以使用sourceforge上托管的Clover master branch，也可以使用其他人fork的Clover分支，我比较习惯使用RehabMan在Bitbucket上fork的CloverRM版，诸位可自行下载。打开Clover，点击继续，确认许可协议



![Clover-1](https://i.loli.net/2019/04/14/5cb30e2b48f5f.png)Clover-1





![Clover-2](https://i.loli.net/2019/04/14/5cb30e2e027ea.png)Clover-2

接下来我们选择更改安装位置，选择我们的U盘。



![修改安装位置](https://i.loli.net/2019/04/14/5cb30e27da14d.png)修改安装位置





![定位到U盘](https://i.loli.net/2019/04/14/5cb30e2d116ee.png)定位到U盘

点击继续重新回到上级界面，这次我们选择自定。



![选择自定安装](https://i.loli.net/2019/04/14/5cb30e28abc5b.png)选择自定安装

自定的内容非常多，我们需要详细讲解一下



![Clover自定安装](https://i.loli.net/2019/04/14/5cb30f250f25c.png)Clover自定安装

由于我们使用UEFI启动而非BIOS Legacy，所以勾选仅安装UEFI开启版本，与此同时安装Clover到EFI系统区也会自动勾选，Bootloader和CloverEFI则无法选中（因为这两项是跟BIOS Legacy启动有关，如果想BIOS引导安装请自行研究），勾选开机主题，这样我们的启动界面能设置各式各样的主题更换。勾选UEFI开机版本后，BIOS Drivers和FileVault 2 BIOS Drivers也会自动隐藏。



![配置主题](https://i.loli.net/2019/04/14/5cb30f260172a.png)配置主题

接下来就是最最重要的UEFI Drivers配置，点击左侧的三角箭头展开如下图所示：



![配置UEFI Drivers](https://i.loli.net/2019/04/14/5cb30f26df334.png)配置UEFI Drivers

- ApfsDriverLoader-64 & AppleImageLoader-64这两个是用来替代macOS原生APFS.efi，在High Sierra之后的版本，苹果公司将磁盘分区从HFS更换为了APFS，早期Clover不带这两个efi，所以需要使用macOS中提取的apfs.efi来引导apfs磁盘，但是原生apfs会出现代码，为了好看和方便，现在的Clover已经自带了apfs引导efi了。这两个驱动必须勾选。
- AptioMemoryFix-64是用于处理引导初始阶段的UEFI内存分配修正efi，同类efi还有OsxAptioFix3Drv-64.efi/OsxAptioFix2Drv-64.efi/OsxAptioFixDrv-64.efi/OsxLowMemFixDrv-64.efi，千万千万注意，一个Clover引导EFI中只能有一个MemFixDrv，不然会出现错误，如果说你使用AptioMemoryFix在初始分配内存时就出错，那么可以尝试考虑更换为后面几个（也要一个个替换，千万别一堆安装上去）。这个驱动也必须要勾选。
- DataHubDxe-64是macOS要求强制启动的协议，虽然大部分情况下都是启动的，但是有备无患，而且这个efi不会引起崩溃，大家都勾选即可。
- FSInject-64必须勾选，正常情况下，我们需要对黑苹果注入kernal kext，这个是必备efi。
- SMCHelper-64是和FakeSMC联动的efi，smc是苹果为了限制非Apple设备安装macOS的东西，所以这个必须勾选。
- CsmVideoDxe-64是在CSM开启情况下提供更多的分辨率的efi，由于我们是纯粹的UEFI启动，所以不装（这玩意儿装了可能会出错）。
- EmuVariableUefi-64是对某些UEFI启动无法调用NVRAM的机器提供的NVRAM模拟，部分Skylake架构的机器会需要这个efi（真的是很小一部分，我装过Skylake三台机器，都没有用过这个efi），我建议只有在出错告知你需要这玩意儿的时候再调整，虽然这玩意儿装了好像也不会导致崩溃，但是我不确认本来NVRAM正常的机器装上这个会不会就不调用硬件NVRAM了。所以我这里也不勾选。
- PartitionDxe-64主要用于处理macOS的Hybrid磁盘分区表，这个是Bootcamp中用到的，我们没啥用，不用勾选。

剩下的都没什么好讲的，基本用不到，很多都是历史遗留，原来有用，现在已经被macOS原生支持了，不需要再添加。点击安装：需要输入密码。



![安装Clover](https://i.loli.net/2019/04/14/5cb30f27cf55f.png)安装Clover

安装完毕。



![安装完毕](https://i.loli.net/2019/04/14/5cb30f242f391.png)安装完毕

与此同时，在桌面上我们也可以看到EFI分区已经被挂载。

![EFI分区出现](https://i.loli.net/2019/04/14/5cb30f29cb7e0.png)EFI分区出现

Clover文件结构如下图所示



![Clover EFI文件结构](https://i.loli.net/2019/04/14/5cb30f28c2dac.png)Clover EFI文件结构

BOOT[文件夹](https://www.smzdm.com/fenlei/wenjianjia/)下有BOOTX64.efi，UEFI首先引导这个文件，然后BOOTX64.efi再进一步引导CLOVER目录下的CLOVERX64.efi，进入CLOVER引导流程，接下来我们一一讲解各个文件夹作用：

- ACPI文件夹主要用于保存CLOVER引导时按F4提取的电脑ACPI表，保存在origin子目录下，我们进一步修改需要替换的DSDT和SSDT则需要保存在ACPI/patched目录下，目前我们用不到
- config.plist则是Clover引导最最重要的配置文件，默认安装Clover是空文件，我们需要尽量找已经配置好、配置相近的成品config.plist进行替换。
- doc文件夹下都是一些描述介绍Clover的用途和用法文件，可以整个删除
- drivers64文件夹下主要是BIOS Legacy引导时需要加载的driver，我们使用UEFI引导可以整个删除
- drivers64UEFI文件夹是UEFI引导时需要加载的driver，我们在接下来还需要修改。
- kexts文件夹下保存着需要注入macOS中的kernel kexts，非常重要，里面有10.6-10.14的子文件夹和other子文件夹，一般情况下，我们会删除10.6-10.14子文件夹 ，只保留other文件夹，所有的kext保存在other文件夹下。
- misc文件夹是保存preboot文件和vbios文件，一般情况下用不到，可以整个删掉。
- OEM文件夹也无用，可以整个删掉
- themes保存着Clover主题文件，例如我们现在就保存了BGM和Metal主题
- tools保存着efi shell，不做修改。

总结一下，这里面目前最重要的就是config.plist/kexts/drivers64UEFI这三位，接下来我们就需要找到一个相近的config.plist文件来替换现有的config.plist，因为自己研究config.plist的写法太繁琐太困难，我们只要找到类似的config.plist进行小小的修改更加方便。这就是为什么很多人推荐如果打算进行黑苹果，最好能找已经有人配置成功的类似配置进行组装DIY，因为别人成功表示你也大概率可以，而且它的config.plist你可以借鉴甚至直接拿来用，省心省事儿，像我更愿意有一位大牛在前面帮我做好引导，我只需要简单拿来用就好。

RehabMan的github上有OS-X-Clover-Laptop-Config库，诸位可以自行寻找相近配置进行替换，本机采用Intel io7 6400T处理器，内置HD 530核显，应该是比较容易驱动的，但是这次我用了一张RX570，故没核显什么事情，所以我选择了同为14nm架构的Skylake中选择config，最终选择了config_HD515_520_530_540.plist。复制到Clover文件夹中重命名为config.plist替换原有文件。

接下来我们需要安装Clover Configuration来对EFI中的Clover进一步配置。Clover Configuration界面如图所示：



![Clover Configuration](https://i.loli.net/2019/04/14/5cb30f2dc5cd5.png)Clover Configuration

打开EFI分区中的config.plist，如图所示



![ACPI](https://i.loli.net/2019/04/14/5cb30f2c698d6.png)ACPI

在左侧标签栏中选择Boot，Boot Argument保留-v dart=0和debug=0x100，Timeout改为-1，其他随意，Timeout是关于Clover引导时的等待时间，-1表示一直等待除非你选择某个启动。

![Boot](https://i.loli.net/2019/04/14/5cb30f2b10aff.png)Boot


这里也要详细说明下Boot Argument，你可以理解为启动参数，不同的启动参数用于开启不同的功能，有些kext也需要启动参数进行配置，右键可以添加。



![Argument](https://i.loli.net/2019/04/14/5cb30fe84c61f.png)Argument

- -v是调试模式，在加上这个参数后macOS启动和关机将不会是苹果LOGO+进度条，取而代之则是引导时各种信息提示和BUG提示。在安装的时候推荐勾选。
- -s是单用户模式，我也没用过
- -x是安全模式，没用过
- npci=0x2000/npci=0x3000是针对X99用户需要添加的参数，不然会卡PCI Configuration Begin
- -xcpm是使用XNU CPU PowerManagement
- cpus=1是强制只使用1个核心启动，避免由于CPU核心过多导致的引导错误
- dart=0是禁用vt-d，macOS不支持vt-d，所以需要在BIOS中关闭，但是本人玩esxi喜欢开着，所以就需要添加dart=0
- debug=0x100是在遇到panic时不要自动重启，这样我们能在调试状态下看到卡在哪个地方
- nvda_drv=1是加载Nvidia Web Driver，N卡用户在安装完Web Driver后需要启用，但是目前Web Driver卡在macOS 10.13.6，Mojave没有Web Driver Release，很有可能会一直停滞，因为Apple希望发展自己的Metal替代CUDA，所以目前安装黑苹果推荐要么核显要么RX4xx/5xx/Vega xx（RX 580 2048sp不可用）
- nv_disable=1在没有安装Web Driver之前，所有N卡用户必须要加上这条禁用macOS自带的Nvidia驱动。
- kext-dev-mode=1是早期遗留，在Sierra之前需要这条命令起到sudo的作用。
- rootless=0同上，也是历史遗留
- 下面的Lilu/AppleALC/CPUFriend等等都是需要配合相应的kext才能起作用，建议去github自行查询相应的用处。

在CPU选项卡中，如果是Skylake以上的处理器可以开启HWPEnable，勾选圈圈中的两个选项即可启动。



![CPU](https://i.loli.net/2019/04/14/5cb30ff0bb872.png)CPU

Disable Drivers选项卡中的设置则和之前的Driver64UEFI息息相关，如果在这里添加了某个Drivers，那么即使在前面那个文件夹中有efi，也不会被引导，RehabMan的配置文件中默认关闭VBoxHfs，因为太老了，性能较差，我们在接下来会下载HFSPlus-64替代。

![Disable Drivers](https://i.loli.net/2019/04/14/5cb30fe959d91.png)Disable Drivers


GUI选项卡一般不需要做大改动，如果要引导Linux，请勾选Scan下的Linux，在右侧可以配置主题，例如我们这里选择BGM作为主题，最右边还可以隐藏Volume，一般情况下我们隐藏Preboot和Recovery。



![GUI](https://i.loli.net/2019/04/14/5cb30fece5a34.png)GUI

在Graphics中我们可以对显卡进行ID注入，Intel核显用户请输入正确ig-platform-id并勾选inject Intel，具体ig-platform-id可以参考黑果小兵整理的Intel核显platform-id，由于我们是AMD RX 570 4G，除了要在kext包中添加WhateverGreen之外，还需要勾选RedeonDeInit，具体原因参照Tonymacx86-Post Install-Graphics-Radeon Compatibilty Guide As Follow:

> Many modern AMD GPUs are incorrectly initialized during boot phase, which will can lead to serious issues in OS X (e.g. boot to black screen or crash after sleep/wake). This was first solved by the WhateverGreen Lilu plugin. Extensive research has been done by Mieze, resulting in a DSDT patch. This knowledge has been incorporated into Clover (starting with rev. 4296) and can be enabled from the config.plist

Inject ATI和Inject NVidia一般都不用勾选，这是对老显卡的支持。



![Graphics](https://i.loli.net/2019/04/14/5cb30fea86c87.png)Graphics

Kernel and Kext Patches则是一些高手们定制出来的补丁，通过这种方式进行热修复，这里要说下比较关键的MSR 0xE2问题，在真实的Mac电脑上，OSX XCPM PowerManagement需要对BIOS中MSR 0xE2这块区域进行读写，然而，很多主板把这个区域锁了起来，不允许读取修改，ASUS主板印象中是全线都锁，所以这就导致了Kernel Panic，根本无法引导，以前很多人说技嘉的主板容易黑，那就是因为技嘉几乎全线都是Unlock的，所以我们经常会说到BIOS中的CFG Lock需要Disable。但很多主板BIOS中根本没有这个选项，

第一种方法是CodeRush开发的UEFIPatch可以让我们解锁MSR 0xE2选项，但是相对比较麻烦
第二种方法我们可以在KernelToPatch中添加由Pike R.Alpha的“xcpm_core_scope_msrs”补丁，并且勾选kernelPM，补丁如下：

Find: 31 d2 e8 91 fc ff ff Replace: 31 d2 90 90 90 90 90

![Kernel and Kexts to Patch](https://i.loli.net/2019/04/14/5cb3113c8a3e2.png)Kernel and Kexts to Patch

SMBIOS代表你这个机器的型号，点击圈圈内的按钮可以选择不同的机型，尽量选择同代CPU机型仿冒，这里我选择同为Skylake架构的iMac 17,1。



![SMBIOS](https://i.loli.net/2019/04/14/5cb30fee2d09d.png)SMBIOS

回到Rt Variables，我们点击Generate创建ROM



![RT Variable](https://i.loli.net/2019/04/14/5cb30fef6f4a2.png)RT Variable

最后在System Parameters中我们Generate UUID，在inject Kexts中选择Detect，这里Detect表示如果在/System/Library/Extensions或者/Library/Extensions文件夹中有同样的kext，clover就不会注入，如果没有，就会注入，个人觉得最好，而Yes表示无论如何都注入，No表示不注入kext。



![System Parameters](https://i.loli.net/2019/04/14/5cb30ff33f9cf.png)System Parameters

Clover Configuration的左下侧则是一些小工具，例如Mount EFI可以非常方便的挂载系统和U盘的EFI分区



![Mount EFI](https://i.loli.net/2019/04/14/5cb30ff1e6a55.png)Mount EFI

Install Drivers则可以非常方便下载EFI Drivers，我们这里就需要使用这个工具下载HFSPlus-64.efi，否则在Clover中我们根本看不到Install Mojave。



![Install Drivers](https://i.loli.net/2019/04/14/5cb30febb7b84.png)Install Drivers

kexts Installer中我们可以非常方便的下载一些必要的Kexts，需要注意，OS Version要选择Other，这样所有的kext都会被下载到Kexts/Other文件夹下。我们这里需要Lilu/WhateverGreen/FakeSMC/USBInjectAll：



![Kexts Installer](https://i.loli.net/2019/04/14/5cb311ee6c7a8.png)Kexts Installer

简单的说一下这些Kext各自的作用，为了大家能理解作用，请详细阅读下段文字，挑选自己需要的kext！

- Lilu是一个由acidanthera写的辅助性Kext，它本身没有什么作用，但是它能帮助其它kext注入，并且提供了一套独特的API，所以很多Kext需要它的存在才能发挥作用，依赖它的Kext有：AirportBrcmFixup/AppleALC/ATH9KFixup/BT4LEContiunityFixup/CPUFriend/DiskArbitrationFixup/HibernationFixup/NightShiftUnlocker/NoTouchID/NoVPAJpeg/VirtualSMC/WahteverGreen，所以这个驱动几乎是必备的。
- VirtualSMC是用来取代FakeSMC的新一代kext，也是由acidanthera写的，但是目前BUG较多，我基本是不用的
- WhateverGreen可以说是GPU kext的集大成制作，集合了CoreDisplayFixup/BrcmWLFixup/EnableLidWake/AppleBlacklightFixup/AzulPatcher4600/IntelGraphicsDVMTFixup/IntelGraphicsFixup/NvidiaGraphicsFixup/Shiki等kext，基本能解决除N卡Web Driver没有外所有的显卡问题。也是由acidanthera编写，必备驱动。如果你使用的是4K屏幕，请在Boot Argument中加入-cdfon。
- AppleALC同样由acidanthera编写，主要是为了对那些不支持的声卡进行修复，让其正常工作，之后的文章我们会对其深入讲解。
- AirportBrcmFixup则是针对无线网卡的驱动和Airport功能的修复。
- NoVPAJpeg是针对macOS 10.14下Preview和QuickLook存在问题而添加的。
- CPUFriend是开启动态CPU电源管理时需要用到
- FakeSMC是最最最最最最最重要的Kext，没有之一，RehabMan出品。因为macOS的安装需要SMC，这个kext的作用就是模拟SMC，让macOS安装可以正常进行，这个必须要有！此外FakeSMC还有一系列插件 （FakeSMC_ACPISensors.kext, FakeSMC_CPUSensors.kext, FakeSMC_LPCSensors.kext, FakeSMC_GPUSensors.kext），如果你要使用HWMonitor监测CPU数据，就需要安装这些插件。
- USBInjectAll是针对macOS有USB Port数量限制而设计出来的，RehabMan出品。在macOS10.11之后，USB特别多的主板，例如Z系列X系列要么破解USB Port Limit要么针对本机定制USBInjectAll，之后的文章我们会深入讲解。
- VoodooPS2Controlller：如果你是笔记本，请加入这个驱动，这个主要是为了提供PS2支持，因为[台式机](https://www.smzdm.com/fenlei/taishiji/)很少用到PS2，所以可以不加，但是笔记本的键盘、[触控板](https://www.smzdm.com/fenlei/chukongban/)大多数都是使用PS2端口，所以一定要加。
- NullCPUPowerManagement：如果你卡在了ApplePowerManagement说明CPU原生电源管理失败，就需要这个驱动来关闭CPU原生电源管理。
- ACPIBatteryManagement：笔记本电池管理需要用到，但是安装的时候不加没关系，之后的文章详细讲解笔记本电池ACPI修复的时候会讲解。
- FakePCIID：仿冒PCI设备的一些Kext依赖它，属于辅助性kext。驱动无线网卡的时候要用到，RehabMan出品。
- GenericUSBXHCI：其实我本不想描述这个Kext，因为这个Kext是针对Sandy Bridge架构及更早的处理器不支持USB3.0，所以主板自作聪明添加了第三方USB3，这时候就需要这个驱动来实现正常工作，对我们没啥用处。
- RealtekRTL8111/RealtekRTL8100/AppleIntelE1000e/IntelMausiEthernet/AtherosE2200Ethernet这些则是有线网卡驱动，可以根据自己的网卡型号挑选，无线网卡和蓝牙部分我们下次详细展开讲。

这块主板是Intel i219-V的网卡，所以还需要额外安装IntelMausiEthernet。这些都可以在tonymacx86上下载到。最终Kext文件夹如图所示，只要能安装就好，完善之后再做。



![驱动目录](https://i.loli.net/2019/04/14/5cb311ed37f85.png)驱动目录

Intel核显用户特别注意，Broadwell和Skylake处理器在macOS下都要求DVMT-Prealloc最起码在64M及以上，但是很多BIOS都不支持更改，所以config中一般默认添加了一个minStolenSize的patch，将macOS的要求从64M改为32M，它在config.plist/Devices/Properties/PciRoot(0)/Pci(0x02,0)中存在。



![image.png](https://i.loli.net/2019/04/14/5cb311efa7dbe.png)image.png



## 设置BIOS

- 关闭vt-d：但是由于本人讨厌关闭vt-d，所以在Boot Argument中已经添加dart=0，可以不关闭。

- 关闭secure boot：微软整出来的幺蛾子，要求启动的系统有签证才算secure，妥妥的要关掉。

- 关闭Legacy Boot/CSM：为了纯正的UEFI引导，我们要关闭避免干扰，如果你Windows不是UEFI启动，那也可以不关，但是请仔细选择引导（如果UEFI启动进入Clover卡住，请开启CSM，如果单屏正常，双屏启动黑屏，请开启CSM）。

- 关闭fast boot：有些主板Fast Boot会直接忽略USB引导。

- SATA Mode设置为AHCI，不要IDE，不要RAID

- 关闭TPM模块

- 关闭CFG-Lock，我真想不明白为什么主板厂喜欢Lock，默认Lock就算了，还不给改。

- 关闭IO Serial Port：这个就是所谓的COM口，一般正常人也用不到，有些搞硬件开发和单片机的用的比较多

- 开启XHCI Handoff EHCI Handoff

  # 启动macOS Mojave安装U盘

  开机按F11（因主板而异）进入启动选择菜单，选择Mojave安装U盘，前面都已经配置好了，这里直接回车，等待即可。虽然是这台电脑我根本没装过，但是根据我对常规平台的了解和前面详细的设置，个人觉得一次就能过。

果不其然，正常进入安装界面：



![第一次启动1](https://i.loli.net/2019/04/14/5cb311f3cb5c7.jpeg)第一次启动1

接下来首先选择语言为简体中文，下一步。

![第一次启动2](https://i.loli.net/2019/04/14/5cb3156bde647.jpeg)第一次启动2

在macOS实用工具这里首先选择磁盘工具，进行进一步的配置。



![第一次启动3](https://i.loli.net/2019/04/14/5cb3156730d4e.jpeg)第一次启动3

在磁盘工具里我们可以发现除了Windows下的两块SATA硬盘被标注为disk1s1（[机械硬盘](https://www.smzdm.com/fenlei/putongyingpan/)，disk1表示第一块硬盘，因为在插主板SATA口的时候更靠前，s1表示第二个分区，第一个分区为GPT格式默认有的EFI分区）和disk2s4（Windows所在磁盘分区）之外，还有一个SAMSUNG开头的大小为256G的PCI-E磁盘，这就是我们要安装的地方，选择最上方抹掉按钮。

![第一次启动4](https://i.loli.net/2019/04/14/5cb31570d062a.jpeg)第一次启动4

名称为Macintosh HD，macOS默认的名称，格式为APFS+GUID分区表。



![第一次启动5](https://i.loli.net/2019/04/14/5cb3156f2635b.jpeg)第一次启动5

格式化成功后关闭磁盘工具

![第一次启动6](https://i.loli.net/2019/04/14/5cb31572b0820.jpeg)第一次启动6

选择安装macOS。



![第一次启动7](https://i.loli.net/2019/04/14/5cb3156a2f28a.jpeg)第一次启动7

选择继续



![第一次启动8](https://i.loli.net/2019/04/14/5cb31568bb5a8.jpeg)第一次启动8

协议继续下一步



![第一次启动9](https://i.loli.net/2019/04/14/5cb3156d771dd.jpeg)第一次启动9

目标磁盘选择刚才格式化好的Macintosh HD分区

![第一次启动10](https://i.loli.net/2019/04/14/5cb3161a3066b.jpeg)第一次启动10

接下来进入漫长的等待



![第一次启动11](https://i.loli.net/2019/04/14/5cb31616b88e8.jpeg)第一次启动11

结束后会重启电脑，仍然按F11选择U盘EFI启动（因为这个时候我们只有U盘里有Clover Bootloader可以引导macOS），选择右下角是磁盘形状的macOS图标，并且名称应该为Install from Macintosh HD。这次引导会相对快一些，引导结束一会儿就会重启



![第二次启动](https://i.loli.net/2019/04/14/5cb3160f14ebb.jpeg)第二次启动

第二次重启后，就会开始将复制到Macintosh HD磁盘的系统文件解压展开并进行一系列的自动化设置。结束后仍然是重启。



![第三次启动](https://i.loli.net/2019/04/14/5cb316185a547.jpeg)第三次启动

这次重启后进入U盘引导，我们可以发现磁盘变成了四个，第一个就是Windows，第二个是U盘的macOS安装环境，第三个是macOS系统，第四个则是Recovery分区。我们选择第三个回车：

等待一段时间后我们就进入了macOS的设置界面，区域选择中国

![第四次启动1](https://i.loli.net/2019/04/14/5cb316109725a.jpeg)第四次启动1


键盘选择ABC英文键盘或者简体中文都行。



![第四次启动2](https://i.loli.net/2019/04/14/5cb316139403d.jpeg)第四次启动2

由于我实际上加入了WIFI驱动，所以是可以上网的

![第四次启动3](https://i.loli.net/2019/04/14/5cb31612117cb.jpeg)第四次启动3

如果是没有加入WIFI驱动并且没有网线连接有线网口是，出现的画面应该是这样的，我们需要选择“我的电脑不连接互联网”



![第四次启动4](https://i.loli.net/2019/04/14/5cb3161bd7cee.jpeg)第四次启动4

数据与隐私没啥好说的，继续



![第四次启动5](https://i.loli.net/2019/04/14/5cb3161db7684.jpeg)第四次启动5

不传输任何信息，继续



![第四次启动6](https://i.loli.net/2019/04/14/5cb316f7c6ca3.jpeg)第四次启动6

在登录Apple ID界面，个人建议无论你是否能上网，都选择稍后设置，因为很多朋友连SMBIOS的三码都没搞懂，贸然登录Apple ID是可能被锁账户的，到时候你哭都来不及。



![第四次启动7](https://i.loli.net/2019/04/14/5cb316f48cf97.jpeg)第四次启动7

条款与条件没啥好说的，继续



![第四次启动8](https://i.loli.net/2019/04/14/5cb316f980404.jpeg)第四次启动8

接下来创建本地账户，各位可自行设置



![第四次启动9](https://i.loli.net/2019/04/14/5cb316f6327e0.jpeg)第四次启动9

快捷设置选择自定设置



![第四次启动10](https://i.loli.net/2019/04/14/5cb316f307d0f.jpeg)第四次启动10

我们需要打开定位服务

![第四次启动11](https://i.loli.net/2019/04/14/5cb316ee08915.jpeg)第四次启动11

关闭数据共享



![第四次启动12](https://i.loli.net/2019/04/14/5cb316f157858.jpeg)第四次启动12

都上Mojave了，当然要选择更好看的Dark外观了。



![第四次启动13](https://i.loli.net/2019/04/14/5cb316ec70565.jpeg)第四次启动13

安装结束，一个完整的macOS系统就装完了。

至此，我们就获得了一个运行于非Apple硬件上macOS 10.14 Mojave系统，当然它还有很多地方没有完善，关于驱动完善部分，我们将会在接下来的文章中继续介绍，敬请期待。![在Intel电脑上安装macOS 10.14 Mojave](https://res.smzdm.com/images/emotions/36.png) （最近连折腾电脑带黑果，累坏了）

千万别把U盘扔了，下次我们进去macOS还得靠它呢。

## 有关Windows macOS双系统时间不同步问题

任何安装在计算机上的系统，其时间都是储存于BIOS中，Windows 10会把BIOS的时间当成本地时间，例如，现在东八区晚上八点，那么在BIOS中储存的也是8:00pm，但是Linux和macOS则会把BIOS中的时间当成UTC时间，即零时区的时间，故macOS在读到BIOS中为8:00pm，就会根据你所在的地点，例如中国，加上八个小时，所以如果macOS下没有进行时间同步，你看到的时间将会是4:00am。

解决方法有两个：

1. 在Windows下打开cmd，输入 `Reg add HKLMSYSTEMCurrentControlSetControlTimeZoneInformation /v RealTimeIsUniversal /t REG_DWORD /d 1` ，Windows就会跟Linux和macOS一样，把BIOS时间作为UTC时间，个人比较喜欢这种，这样在装三系统的时候就只要修改一个系统的设置即可。
2. 在macOS下安装一个叫Localtime-Toggle的补丁，可以让macOS将BIOS时间当做本地时间。