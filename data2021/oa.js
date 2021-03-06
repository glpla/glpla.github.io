const oa = {
  title: ['计算机基础知识', '计算机硬件系统', '计算机软件系统', '数值与编码', '多媒体', '操作系统', '计算机网络', '信息安全与病毒防治'],
  quiz: {
    chap1: [{
      id: 100,
      desc: '以二进制和程序控制为基础的计算机结构是（）提出的。',
      options: ['布尔', '冯．诺依曼', '巴贝奇', '图灵'],
      answer: '冯．诺依曼',
    }, {
      id: 101,
      desc: '大数据一般是指规模在（）以上的数据量。',
      options: ['10PB', '10TB', '10GB', '10MB'],
      answer: '10TB',
    }, {
      id: 102,
      desc: '计算机自诞生以来，性能、价格等都发生了巨大变化，但其（）并没有发生改变。',
      options: ['运算速度', '体积', '体系结构', '耗电量'],
      answer: '体系结构',
    }, {
      id: 103,
      desc: '冯·诺伊曼体系结构的计算机工作原理是（）。',
      options: ['存储程序与自动控制', '高速度与高精度', '可靠性与可用性', '有记忆能力'],
      answer: '存储程序与自动控制',
    }, {
      id: 104,
      desc: '计算机自动化程度高、应用范围广是由于（）。',
      options: ['采用了大规模集成电路', '内部采用二进制', 'CPU 速度快，功能强', '采用程序控制工作方式'],
      answer: '采用程序控制工作方式',
    }, {
      id: 105,
      desc: '计算机的发展阶段通常是按计算机采用的（）来划分的。',
      options: ['内存容量', '电子器件', '程序设计语言', '操作系统'],
      answer: '电子器件',
    }, {
      id: 106,
      desc: '目前电子计算机已经发展到（）阶段。',
      options: ['晶体管电路', '集成电路', '大规模和超大规模集成电路', '电子管电路'],
      answer: '大规模和超大规模集成电路',
    }, {
      id: 107,
      desc: '从第一台计算机的诞生到现在的50多年中，按计算机所用的电子器件来划分，计算机的发展一共经历了（）个阶段。',
      options: ['7', '6', '4', '3'],
      answer: '4',
    }, {
      id: 108,
      desc: '计算机按信息的表示和处理方式可分为（）。',
      options: ['模拟计算机、数字计算机、数字模拟混合计算机', '笔记本电脑、台式机', '科学计算、数据处理和人工智能计算机', '巨型机、大型机、小型机和微机'],
      answer: '模拟计算机、数字计算机、数字模拟混合计算机',
    }, {
      id: 109,
      desc: '笔记本电脑属于（）计算机。',
      options: ['巨型', '微型', '小型', '中型'],
      answer: '微型',
    }, {
      id: 110,
      desc: '按信息表示及处理的方式划分，当前广泛使用的计算机属于（）计算机。',
      options: ['大型', '模拟', '混合', '数字'],
      answer: '数字',
    }, {
      id: 111,
      desc: '用计算机控制人造卫星和导弹的发射，按计算机应用的分类，它应属于（）。',
      options: ['科学计算', '辅助设计', '数据处理', '实时控制'],
      answer: '实时控制',
    }, {
      id: 112,
      desc: '机器人、语音识别、图像识别和专家系统属于计算机在（）方面的应用。',
      options: ['科学计算', '实时控制', '信息处理', '人工智能'],
      answer: '人工智能',
    }, {
      id: 113,
      desc: '英文缩写CAI的中文意思是（）。',
      options: ['计算机辅助教学', '计算机辅助制造', '计算机辅助设计', '计算机辅助管理'],
      answer: '计算机辅助教学',
    }, {
      id: 114,
      desc: '微机内部是以（）形式来传送、存储和加工处理数据的。',
      options: ['二进制', '八进制', '十进制', '十六进制'],
      answer: '二进制',
    }, {
      id: 115,
      desc: '计算机采用二进制数的主要理由是（）。',
      options: ['符合人的习惯', '数据输入输出方便', '易于用电子元件实现', '存储信息量大'],
      answer: '易于用电子元件实现',
    }, {
      id: 116,
      desc: '计算机中数据是指（）。',
      options: ['一批数字形式的信息', '一个数据分析', '程序、文稿、数字、图像、声音等信息', '程序及其有关的说明资料'],
      answer: '程序、文稿、数字、图像、声音等信息',
    }],
    chap2: [{
      id: 200,
      desc: '计算机系统由（）组成。',
      options: ['硬件系统和软件系统', '硬件系统和程序', '主机、显示器、鼠标和键盘', '系统软件和应用软件'],
      answer: '硬件系统和软件系统',
    }, {
      id: 201,
      desc: '计算机硬件系统的五大部分包括运算器、（）、存储器、输入设备、输出设备。',
      options: ['显示器', '控制器', '磁盘驱动器', '鼠标器'],
      answer: '控制器',
    }, {
      id: 202,
      desc: 'CPU的中文含义是（）。',
      options: ['中央处理器', '外存储器', '微机系统', '微处理器'],
      answer: '中央处理器',
    }, {
      id: 203,
      desc: '计算机控制器的基本功能是（）。',
      options: ['进行算术运算和逻辑运算', '存储各种控制信息', '保持各种控制状态', '命令指挥与控制计算机各个部件的工作'],
      answer: '命令指挥与控制计算机各个部件的工作',
    }, {
      id: 204,
      desc: '计算机存储器中，组成一个字节的二进制位数是（）。',
      options: ['4bits', '8bits', '16bits', '32bits'],
      answer: '8bits',
    }, {
      id: 205,
      desc: '容量为8.7G的光盘，能存储（）字节。',
      options: ["8.7×1024×1024", "8.7×1024×1024×1024", "8.7×1000×1000", "8.7×1000×1000×1000"],
      answer: '8.7×1024×1024×1024',
    }, {
      id: 206,
      desc: '计算机断电会导致（）的数据丢失。',
      options: ["U盘", "CD-ROM", "RAM", "硬盘"],
      answer: 'RAM',
    }, {
      id: 207,
      desc: '下列存储器中，（）是利用磁存储原理来存储数据的。',
      options: ["CMOS", "光盘", " DVD 光盘", "硬盘"],
      answer: '硬盘',
    }, {
      id: 208,
      desc: '下列描述中，正确的是。',
      options: ['1KB=1024*1024B', '1MB=1000*1000B', 'IKB=1024MB', '1MB=1024KB'],
      answer: '1MB=1024KB',
    }, {
      id: 209,
      desc: '微型计算机的主机由CPU与（）组成。',
      options: ['外部存储器', '主机板', '内部存储器', '输入输出设备'],
      answer: '内部存储器',
    }, {
      id: 210,
      desc: '微型计算机硬件系统中最核心的部件是（）。',
      options: ['硬盘', 'I/O设备', '内存储器', 'CPU'],
      answer: 'CPU',
    }, {
      id: 211,
      desc: 'CPU的两个重要性能指标是（）。',
      options: ['价格和字长', ' 价格和可靠性', ' 主频和内存', '字长和主频'],
      answer: '字长和主频',
    }, {
      id: 212,
      desc: '内存与外存的主要不同在于（）。',
      options: ['CPU可以直接处理内存中的信息,速度快､存储容量大;外存则相反', 'CPU可以直接处理内存中的信息,速度快､存储容量小;外存则相反', 'CPU不能直接处理内存中的信息,速度慢､存储容量大;外存则相反', 'CPU不能直接处理内存中的信息,速度慢､存储容量小;外存则相反'],
      answer: 'CPU可以直接处理内存中的信息,速度快､存储容量小;外存则相反',
    }, {
      id: 213,
      desc: '相对于外存而言,计算机的内存（）。',
      options: ['价格便宜且耐用', '存取速度更快', '存储容量更大', '存取速度更慢'],
      answer: '存取速度更快',
    }, {
      id: 214,
      desc: '计算机的硬盘､U 盘和光盘属于（）。',
      options: ['外部存储器', '内部存储器', '中央处理器', '数据通讯设备'],
      answer: '外部存储器',
    }, {
      id: 215,
      desc: '在使用计算机时,如果（）,可能会造成计算机频繁地读写硬盘。',
      options: ['内存的容量太小', '光盘的容量太小', '硬盘的容量太小', '硬盘的容量太大'],
      answer: '内存的容量太小',
    }, {
      id: 216,
      desc: '硬盘可以直接与（）进行数据交换。',
      options: ['显示器', '打印机', '扫描仪', '内存'],
      answer: '内存',
    }, {
      id: 217,
      desc: 'CPU调用硬盘中的数据需要通过（）。',
      options: ['键盘', '硬盘指示灯', '光盘', '内存'],
      answer: '内存',
    }, {
      id: 218,
      desc: '关于随机存储器RAM的特点,下面说法正确的是（）。',
      options: ['只能向 RAM 写入信息,且断电后信息丢失', '只能从 RAM 读出信息,不能写入信息', '既能向 RAM 写入信息又能从 RAM 读出信息,断电后信息也不丢失', '既能向 RAM 写入信息又能从 RAM 读出信息,但断电后信息会丢失'],
      answer: '既能向 RAM 写入信息又能从 RAM 读出信息,但断电后信息会丢失',
    }, {
      id: 219,
      desc: '下列有关存储器读写速度快慢排列顺序正确的是（）。',
      options: ['RAM>cache>硬盘>光盘', 'cache>RAM>硬盘>光盘', 'cache>硬盘>RAM>光盘', ' RAM>硬盘>光盘>cache'],
      answer: 'cache>RAM>硬盘>光盘',
    }, {
      id: 220,
      desc: '在计算机中配置高速缓冲存储器是为了解决（）。',
      options: ['内存与硬盘之间速度不匹配问题', 'CPU与硬盘之间速度不匹配问题', 'CPU与内存之间速度不匹配问题', '主机与外设之间速度不匹配问题'],
      answer: 'CPU与内存之间速度不匹配问题',
    }, {
      id: 221,
      desc: '倍速是光盘驱动器的一个重要指标,光驱的倍速越大,（）。',
      options: ['数据传输越快', '纠错能力越差', '所能读取光盘的容量越大', '数据传输越慢'],
      answer: '数据传输越快',
    }, {
      id: 222,
      desc: '显示器性能指标中的1024×768,通常是指（）。',
      options: ['分辨率', '色彩深度', '显示存储器容量', '颜色种类'],
      answer: '分辨率',
    }, {
      id: 223,
      desc: '计算机用来向使用者传递信息和处理结果的设备,称为（）。',
      options: ['显示设备', '打印设备', '外部设备', '输出设备'],
      answer: '输出设备',
    }, {
      id: 224,
      desc: '既可作为输入设备又可作为输出设备的是（）。',
      options: ['显示器', '磁盘驱动器', '键盘', '图形扫描仪'],
      answer: '磁盘驱动器',
    }, {
      id: 225,
      desc: '常用的输入设备有（）。',
      options: ['键盘､显示器､光盘驱动器', '键盘､鼠标､扫描仪', '键盘､鼠标､绘图仪', '键盘､麦克风､打印机'],
      answer: '键盘､鼠标､扫描仪',
    }, {
      id: 226,
      desc: '计算机进行数据处理时,一次存取､加工和传送的数据长度是（）。',
      options: ['位', '字节', '8 位二进制', '基本字长'],
      answer: '基本字长',
    }, {
      id: 227,
      desc: '位计算机中的"64"是指该计算机（）。',
      options: ['能同时处理64位二进制数', '能同时处理64位十进制数', '具有64条数据总线', '运算精度可达小数点后64位'],
      answer: '能同时处理64 位二进制数',
    }, {
      id: 228,
      desc: '下面计算机性能指标中,影响计算精度的是（）。',
      options: ['字长', '内存容量', '运算速度', '显示器的分辨率'],
      answer: '字长',
    }, {
      id: 229,
      desc: '在计算机使用过程中,关于"死机"现象的解释是（）。',
      options: ['未安装打印机', '因故障导致计算机无法正常工作', '显示器使用寿命到期', '未安装性能测试软件'],
      answer: '因故障导致计算机无法正常工作',
    }, {
      id: 230,
      desc: '关于计算机运算速度,不正确的说法是（）。',
      options: ['主频越高,运算速度越快', '内存越大,运算速度越快', '单位时间内CPU处理的数据位数越多,运算速度越快', '存取周期越长,运算速度越快'],
      answer: '存取周期越长,运算速度越快',
    }],
    chap3: [{
      id: 300,
      desc: '计算机软件系统包括（）。',
      options: ['管理软件和系统软件', '系统软件和应用软件', '管理软件和应用软件', '系统软件和编辑软件'],
      answer: '系统软件和应用软件',
    }, {
      id: 301,
      desc: '计算机最重要的系统软件是（），若缺少它，则计算机系统无法工作。',
      options: ['管理系统', '数据库系统', '语言处理程序', '操作系统'],
      answer: '操作系统',
    }, {
      id: 302,
      desc: '计算机的基本指令是由（）组成。',
      options: ['命令和操作数', '操作码和操作数地址码', '操作数和运算类型', '操作码和操作数'],
      answer: '操作码和操作数地址码',
    }, {
      id: 303,
      desc: '通常所说的裸机是指（）。',
      options: ['没有配备软件的计算机系统', '无键盘的计算机系统', '无机箱的计算机系统', '无硬盘的计算机系统'],
      answer: '没有配备软件的计算机系统',
    }, {
      id: 304,
      desc: '下列各组软件中，都属于应用软件的是（）。',
      options: ['图书管理软件、Windows XP、C／C++', 'Photoshop、Flash、QQ', 'Access、UNIX、QQ', 'Windows 7、Office2010、视频播放器软件'],
      answer: 'Photoshop、Flash、QQ',
    }, {
      id: 305,
      desc: '为解决某一特定问题而设计的指令序列称为（）。',
      options: ['文件', '语言', '程序', '文档'],
      answer: '程序',
    }, {
      id: 306,
      desc: '专门为学习英语而设计的软件属于（）。',
      options: ['编辑软件', '应用软件', '系统软件', '目标程序'],
      answer: '应用软件',
    }, {
      id: 307,
      desc: '计算机硬件能够直接识别和执行的语言是（）。',
      options: ['机器语言', '汇编语言', '高级语言', '低级语言'],
      answer: '机器语言',
    }, {
      id: 308,
      desc: 'C#属于（）。',
      options: ['机器语言', '汇编语言', '高级语言', '低级语言'],
      answer: '高级语言',
    }, {
      id: 309,
      desc: '按计算机语言的发展过程和应用级别，程序设计语言可分为（）。',
      options: ['简单语言、复杂语言、实用语言', '机器语言、汇编语言、高级语言', 'BASIC语言、PASCAL语言、C语言', '面向机器的语言、面向过程的语言、面向对象的语言'],
      answer: '机器语言、汇编语言、高级语言',
    }, {
      id: 310,
      desc: '语言处理程序的主要作用是（）。',
      options: ['将用户命令转换为机器能执行的命令', '对自然语言进行处理以便为机器所理解', '把高级语言写的源程序转换为机器语言程序', '根据设计要求自动生成源程序以减轻编程的负担'],
      answer: '把高级语言写的源程序转换为机器语言程序',
    }],
    chap4: [
      {
        id: 400,
        desc: '下面的数值中，肯定是十六进制数的是（）。',
        options: ['1011', 'DDF', '84EK', '125M'],
        answer: 'DDF',
      }, {
        id: 401,
        desc: '下列数字中不合法的是（）。',
        options: ['(12680)10', '(16FM)16', '(101101)2', '(75401)8'],
        answer: '(16FM)16',
      }, {
        id: 402,
        desc: '将二进制数1011010 转换成十进制数是（）。',
        options: ['132', '90', '5A', 'A5'],
        answer: '90',
      }, {
        id: 403,
        desc: '十进制整数95转换成二进制整数是（）。',
        options: ['01011111', '01100001', '01011011', '01100111'],
        answer: '01011111',
      }, {
        id: 404,
        desc: 'ASCII码是（）的简称。',
        options: ['国标码', '汉字编码', '十进制编码', '美国信息标准交换代码'],
        answer: '美国信息标准交换代码',
      }, {
        id: 405,
        desc: '英文字母存入计算机后，其编码的最高位是（）。',
        options: ['2', '1', '10', '0'],
        answer: '0',
      }, {
        id: 406,
        desc: '汉字在计算机内部的传输、处理和存储都是用汉字的（）。',
        options: ['字形码', '输入码', '机内码', '国标码'],
        answer: '机内码',
      }, {
        id: 407,
        desc: '关于汉字机内码在计算机中的表示方法，准确的描述应该是（）。',
        options: ['使用2 个字节，每个字节的最右边的一位是1', '使用2 个字节，每个字节的最左边的一位是1', '使用2 个字节，每个字节的最右边的一位是0', '使用2 个字节，每个字节的最左边的一位是0'],
        answer: '使用2 个字节，每个字节的最左边的一位是1',
      }
    ],
    chap5: [{
      id: 500,
      desc: '如下各项中，（）不是多媒体技术的特点。',
      options: ['集成性', '交互性', '实时性', '兼容性'],
      answer: '兼容性',
    }, {
      id: 501,
      desc: '多媒体处理的是（）。',
      options: ['模拟信号', '音频信号', '视频信号', '数字信号'],
      answer: '数字信号',
    }, {
      id: 502,
      desc: '计算机多媒体技术是指利用计算机技术把（）多种媒体信息综合一体化，使它们简历起逻辑关系，并能进行加工处理的技术。',
      options: ['中文、英文、日文和其他文字或者符号', '显示器、摄像机、麦克风、扫描仪和音响等', '拼音码、五笔字型、自然码和机内码等', '文字、图形和图像等静态媒体以及声音、动画和视频等动态媒体'],
      answer: '文字、图形和图像等静态媒体以及声音、动画和视频等动态媒体',
    }, {
      id: 503,
      desc: '多媒体计算机系统的两大组成部分是（）。',
      options: ['多媒体器件和多媒体主机', '多媒体输入设备和多媒体输出设备', '音响和声卡', '多媒体计算机硬件系统和多媒体计算机软件系统'],
      answer: '多媒体计算机硬件系统和多媒体计算机软件系统',
    }, {
      id: 504,
      desc: 'Windows10中使用录音机录制的声音文件格式是（）。',
      options: ['AVI', 'MP3', 'WMA', 'WAV'],
      answer: 'WMA',
    }, {
      id: 505,
      desc: '目前在网络中最流行的声音文件格式是（）。',
      options: ['MIDI文件', 'CD Audio文件', 'Real Audio 文件', 'MP3文件'],
      answer: 'MP3文件',
    }, {
      id: 506,
      desc: '存储一幅1024x768真彩色（24位）的图像，其文件大小约为（）。',
      options: ['2.25MB', '2.25KB', '18KB', '18MB'],
      answer: '2.25MB',
    }, {
      id: 507,
      desc: '常用于网络的图像格式是（），其传输速度快，可将多幅图像存在一个文件而形成动画效果。',
      options: ['BMP格式', 'GIF格式', 'JPEG格式', 'PSD格式'],
      answer: 'GIF格式',
    }, {
      id: 508,
      desc: 'Photoshop是一种专门处理（）的软件。',
      options: ['声音', '视频', '动画', '图像'],
      answer: '图像',
    }, {
      id: 509,
      desc: '以下哪一个不是"云计算"的关键特点（）。',
      options: ['获取路径为网络', '获取方式为付费', '获取方式为自助服务', '获取对象为IT资源'],
      answer: '获取方式为付费',
    }, {
      id: 510,
      desc: '（）不属于流媒体文件格式。',
      options: ['RMVB格式', 'ASF格式', 'WMV格式', 'AVI格式'],
      answer: 'AVI格式',
    }, {
      id: 511,
      desc: '关于流媒体技术，下列说法中错误的是（）。',
      options: ['流媒体技术可以实现边下载边播放', '流媒体文件全部下载完成后才可以播放', '流媒体可用于远程教育、在线直播等方面', '流媒体格式包括.asf、.rm、.ra等'],
      answer: '流媒体文件全部下载完成后才可以播放',
    }, {
      id: 512,
      desc: '剪映是一种专门处理（）的软件。',
      options: ['声音', '视频', '动画', '图像'],
      answer: '视频',
    }],
    chap6: [{
      id: 600,
      desc: '下面哪个文件名的命名是合法的（）。',
      options: ['8/.txt', '# $ %1.doc', 'a * ?.xls', 'a~ | 1.mdb'],
      answer: '# $ %1.doc',
    }, {
      id: 601,
      desc: '文件的扩展名(又称后缀)主要用来区分文件的（）。',
      options: ['大小', '名称', '类型', '属性'],
      answer: '类型',
    }, {
      id: 602,
      desc: '关于文件名 A? B * .EXE 的说法，错误的是（）。',
      options: ['表示文件基本名是以A 开头的', '文件的基本名长度至少是4 个字符', '指文件名为A? B*.EXE 的文件', '代表多个文件'],
      answer: '指文件名为A? B*.EXE 的文件',
    }, {
      id: 603,
      desc: '下面关于"复制"、"剪切"和"粘贴"操作的叙述，错误的是（）。',
      options: ['执行"复制"操作后，可以执行"粘贴"', '执行"剪切"操作后，可以执行"粘贴"', '"粘贴"是将"剪贴板"中的内容移动到指定的位置', '"粘贴"是将"剪贴板"中的内容复制到指定的位置'],
      answer: '"粘贴"是将"剪贴板"中的内容移动到指定的位置',
    }, {
      id: 604,
      desc: '在Windows 10系统中，剪贴板是（）中的一个区域，用来临时存放数据。',
      options: ['系统', '内存', '硬盘', '高速缓存'],
      answer: '内存',
    }, {
      id: 605,
      desc: '通过使用鼠标拖曳窗口的（）可以移动其位置。',
      options: ['标题栏', '菜单栏', '工具栏', '状态栏'],
      answer: '标题栏',
    }, {
      id: 606,
      desc: '下面关于Windows 10 快捷方式图标的说法中，正确的是（）。',
      options: ['快捷方式图标可以复制、删除和重命名', '快捷方式图标就是文件的备份', '删除快捷方式图标也将删除其指向的文件', '快捷方式图标就是文件本身'],
      answer: '快捷方式图标可以复制、删除和重命名',
    }, {
      id: 607,
      desc: '关于Windows 10 中的图标，下面说法正确的是（）。',
      options: ['一个图标代表一个对象', '只有程序和文件或文件夹才能有图标', '单击某图标可以启动该对象', '程序的图标和它的快捷方式图标是一样的'],
      answer: '一个图标代表一个对象',
    }, {
      id: 608,
      desc: '关于Windows 10 中的文件组织结构的说法，错误的是（）。',
      options: ['每个子文件夹都有一个"父文件夹"', '同一文件夹下文件不能重名', '不同文件夹下子文件夹不能重名', '每个文件夹都可以包含若干"子文件夹"和文件'],
      answer: '不同文件夹下子文件夹不能重名',
    }, {
      id: 609,
      desc: '如果要查找扩展名为".txt" 的文件，最快速且准确的搜索方式是（）。',
      options: ['按大小', '按名称', '按类型', '按日期'],
      answer: '按类型',
    }, {
      id: 610,
      desc: '下面关于文件的说法，错误的是（）。',
      options: ['文件是一组相关信息的集合文件的内容可有多样性', '文件最小可以没有内容，只有文件名', '文件名由主名和扩展名两部分组成', '每个文件不一定都要有文件名'],
      answer: '每个文件不一定都要有文件名',
    }, {
      id: 611,
      desc: '下列关于窗口、菜单和对话框的叙述，正确的是（）。',
      options: ['窗口既可以移动位置，也可以改变大小', '对话框不可以移动位置，也不能改变大小', '菜单可以移动位置，但不能改变大小', '对话框不可以移动位置，但可以改变大小'],
      answer: '窗口既可以移动位置，也可以改变大小',
    }, {
      id: 612,
      desc: '在某个文档窗口中进行多次剪切操作，该文档窗口被关闭后，剪贴板的内容是（）。',
      options: ['已被清除', '所有剪切进来的内容', '第一次剪切进来的内容', '最后一次剪切进来的内容'],
      answer: '最后一次剪切进来的内容',
    }, {
      id: 613,
      desc: '关于磁盘的格式化，正确的说法是（）。',
      options: ['只能格式化U盘', '格式化将清除磁盘中的所有文件', '只能格式化有数据的磁盘', '不能对有坏扇区的磁盘格式化'],
      answer: '格式化将清除磁盘中的所有文件',
    }, {
      id: 614,
      desc: '选定文件夹后，下列的（）操作不能删除该文件夹。',
      options: ['按键盘的Delete键', '按键盘的Shift+Delete键', '单击右键，在弹出的快捷菜单中选择"删除"命令', '单击右键，在弹出的快捷菜单中选择"剪切"命令'],
      answer: '单击右键，在弹出的快捷菜单中选择"剪切"命令',
    }],
    chap7: [{
      id: 700,
      desc: '世界上最早的计算机网络雏形出现在（）。',
      options: ['20 世纪 20 年代', '20 世纪 30 年代', '20 世纪 50 年代', '20 世纪 90 年代'],
      answer: '20 世纪 50 年代',
    }, {
      id: 701,
      desc: '建立计算机网络的主要目的是（）。',
      options: ['收发电子邮件和上网', '便于协同工作', '实现资源共享', '提供综合服务'],
      answer: '实现资源共享',
    }, {
      id: 702,
      desc: '根据覆盖范围大小，计算机网络可分成局域网、城域网和（）。',
      options: ['广域网', '电路交换网', '通信子网', '资源子网'],
      answer: '广域网',
    }, {
      id: 703,
      desc: '图书馆内部的一个计算机网络系统，属于（）。',
      options: ['局域网', '城域网', '广域网', '互联网'],
      answer: '局域网',
    }, {
      id: 704,
      desc: '按网络的功能和结构划分，计算机网络可分成（）。',
      options: ['资源子网与通信子网', '洲际网和全球网', '基带网和宽带网', '局域网、城域网和广域网'],
      answer: '资源子网与通信子网',
    }, {
      id: 705,
      desc: '按计算机网络覆盖的范围划分，Internet属于（）。',
      options: ['局域网', '城域网', '广域网', '校园网'],
      answer: '广域网',
    }, {
      id: 706,
      desc: '中国教育科研计算机网用（）表示。',
      options: ['CERNET', 'ISDN', 'CSTNET', 'CHINAGBNET'],
      answer: 'CERNET',
    }, {
      id: 707,
      desc: '按通讯方式来划分，计算机网络可以分为（）和点对点网络。',
      options: ['以太网', '物联网', '有线电视网', '广播式网络'],
      answer: '广播式网络',
    }, {
      id: 708,
      desc: '英文缩写LAN指的是（）。',
      options: ['局域网', '城域网', '广域网', '校园网'],
      answer: '局域网',
    }, {
      id: 709,
      desc: '和广域网相比，局域网（）。',
      options: ['有效性好但可靠性差', '有效性差但可靠性好', '有效性好可靠性也好', '只能采用基带传输'],
      answer: '有效性好可靠性也好',
    }, {
      id: 710,
      desc: '计算机网络基本的拓扑结构包括（）、树型、总线型、环型、网状型。',
      options: ['标准型', '并联型', '串联型', '星型'],
      answer: '星型',
    }, {
      id: 711,
      desc: '计算机网络拓扑结构中的"节点"不能是（）。',
      options: ['光盘', '笔记本电脑', '交换机', '路由器'],
      answer: '光盘',
    }, {
      id: 712,
      desc: '移动电话和笔记本电脑之间进行近距离无线信息交换，常用的是（）技术。',
      options: ['红外线通信', '微波通信', '光波通信', '蓝牙'],
      answer: '蓝牙',
    }, {
      id: 713,
      desc: '计算机网络由（）和网络软件构成。',
      options: ['网络服务器', '传输介质', '网络硬件', '网关'],
      answer: '网络硬件',
    }, {
      id: 714,
      desc: '目前常用的计算机局域网所用的传输介质有光缆、同轴电缆和（）。',
      options: ['双绞线', '微波', '激光', '电话线'],
      answer: '双绞线',
    }, {
      id: 715,
      desc: '下列网络传输介质中，带宽最大的是（）。',
      options: ['光纤', '双绞线', '同轴电缆', '电话线'],
      answer: '光纤',
    }, {
      id: 716,
      desc: '网络适配器又称为（）。',
      options: ['网卡', '集线器', '路由器', '调制解调器'],
      answer: '网卡',
    }, {
      id: 717,
      desc: '在计算机网络中，通常把提供管理功能和共享资源的计算机称为（）。',
      options: ['工作站', '服务器', '网关', '客户端'],
      answer: '服务器',
    }, {
      id: 718,
      desc: '常用网络设备不包括（）。',
      options: ['网卡（NIC）', '集线器（Hub）', '交换机（Switch）', '显示卡（VGA）'],
      answer: '显示卡（VGA）',
    }, {
      id: 719,
      desc: '在下列传输介质中，传输距离长、速率高、抗干扰能力最强的是（）。',
      options: ['光纤', '双绞线', '同轴电缆', '电话线'],
      answer: '光纤',
    }, {
      id: 720,
      desc: '在Internet上，计算机之间使用（）协议进行信息交换。',
      options: ['TCP/IP', 'IEEE 802.5', 'CSMA/CD', 'X.25'],
      answer: 'TCP/IP',
    }, {
      id: 721,
      desc: 'TCP协议称为（）。',
      options: ['网际协议', 'Network 内部协议', '传输控制协议', '中转控制协议'],
      answer: '传输控制协议',
    }, {
      id: 722,
      desc: 'TCP协议的主要功能是（）。',
      options: ['对数据进行分组', '确保数据的可靠传输', '确定数据传输路径', '提高数据传输速度'],
      answer: '确保数据的可靠传输',
    }, {
      id: 723,
      desc: '网络协议是Internet上计算机之间通信所必须遵循的（）。',
      options: ['连接方式', '规则和约定', '传输方式', '地址格式'],
      answer: '规则和约定',
    }, {
      id: 724,
      desc: '下列软件中，（）是下载工具的。',
      options: ['TCP/IP', 'QQ游戏大厅', 'Flash', '迅雷'],
      answer: '迅雷',
    }, {
      id: 725,
      desc: '个人接入Internet的两种常用方式是（）。',
      options: ['城域网接入和局域网接入', '远程网接入和局域网接入', 'WINDOWS接入和NOVELL网接入', '局域网接入和无线接入'],
      answer: '局域网接入和无线接入',
    }, {
      id: 726,
      desc: '在计算机网络中，表征数据传输有效性的是（）。',
      options: ['传输速率', '误码率', '信息容量', '频带利用率'],
      answer: '传输速率',
    }, {
      id: 727,
      desc: '某局域网的传输速率为100Mbps ，其意义为（）。',
      options: ['每秒100兆字节', '每秒100千字节', '每秒100兆比特', '每秒100千比特'],
      answer: '每秒100兆比特',
    }, {
      id: 728,
      desc: '以拨号方式接入网络的用户需要使用（）。',
      options: ['网关', '中继器', '调制解调器', '网桥'],
      answer: '调制解调器',
    }, {
      id: 729,
      desc: '目前Internet 所采用的IPv4 协议的IP 地址由（）个字节组成。',
      options: ['1', '2', '3', '4'],
      answer: '4',
    }, {
      id: 730,
      desc: ' IPv4 协议规定的IP地址使用"点分十进制"表示，有（）组十进制数。',
      options: ['4', '6', '8', '12'],
      answer: '4',
    }, {
      id: 731,
      desc: '下一代互联网协议IPV6采用（）二进制编码。',
      options: ['16位', '32位', '64位', '128位'],
      answer: '128位',
    }, {
      id: 732,
      desc: '接入Internet的每台计算机都有一个唯一的（）地址。',
      options: ['DNS', 'WWWW', 'IP', 'HTTP'],
      answer: 'IP',
    }, {
      id: 733,
      desc: '以下选项中, 不是有效的IP 地址（）。',
      options: ['16.126.23.4', '204.12.0.10', '60.273.12.15', '11.5.56.39'],
      answer: '60.273.12.15',
    }, {
      id: 734,
      desc: '对于IP 地址为130.2.170.55 的主机来说，它的网络地址为（）。',
      options: ['130.2.170', '130.2', '130', '55'],
      answer: '130.2',
    }, {
      id: 735,
      desc: '域名与IP地址通过（）服务器进行转换。',
      options: ['E-mail', 'www', 'DNS', 'FTP'],
      answer: 'DNS',
    }, {
      id: 736,
      desc: '"www.gxeea.cn"中的"cn"表示（）。',
      options: ['广西', '中国', '美国', '英国'],
      answer: '中国',
    }, {
      id: 737,
      desc: '下列组织性域名中，（）代表商业机构。',
      options: ['com', 'edu', 'gov', 'net'],
      answer: 'com',
    }, {
      id: 738,
      desc: 'Internet上提供多种服务，但不包括（）。',
      options: ['电子邮件', '万维网', '文件压缩', '文件传输'],
      answer: '文件压缩',
    }, {
      id: 739,
      desc: '用户想在网上查询WWW信息，必须安装并运行一个被称为（）的软件。',
      options: ['万维网', '搜索引擎', '浏览器', '客户端'],
      answer: '浏览器',
    }, {
      id: 740,
      desc: '维网(WWW) 服务基于（）。',
      options: ['SMTP，即简单传输协议', 'HTTP，即超文本传输协议', 'FTP，即文件传输协议', 'TELNET，即远程登录协议'],
      answer: 'HTTP，即超文本传输协议',
    }, {
      id: 741,
      desc: 'http://www.sina.com中的"http"是指（）。',
      options: ['服务器名', '超文本传输协议', '主机域名', '文件传输协议'],
      answer: '超文本传输协议',
    }, {
      id: 742,
      desc: '使用浏览器访问网站时，网站上第一个被访问的网页称为（）。',
      options: ['网页', '网站', 'HTML 语言', '主页'],
      answer: '主页',
    }, {
      id: 743,
      desc: '浏览器的收藏夹可以用来（）。',
      options: ['收集文件的内容', '保存文件名', '保存网页的内容', '保存网页地址'],
      answer: '保存网页地址',
    }, {
      id: 744,
      desc: '在浏览器中单击"刷新"按钮，则（）。',
      options: ['终止当前页的访问，返回空白页', '自动下载浏览器更新程序并安装', '更新当前显示的网页', '浏览器会新建一个当前窗口'],
      answer: '更新当前显示的网页',
    }, {
      id: 745,
      desc: ' "超文本"是指（）。',
      options: ['文本中包含图像', '文本中包含视频', '文本中包含有电子邮件', '文本中包含有超链接'],
      answer: '文本中包含有超链接',
    }, {
      id: 746,
      desc: '通常申请免费电子邮箱需要通过（）申请。',
      options: ['在线注册', '电话', '电子邮件', '写信'],
      answer: '在线注册',
    }, {
      id: 747,
      desc: '电子邮件地址由两部分组成，用@分开，其中@号左边是（）。',
      options: ['本机域名', '邮件服务器名称', '用户名', '密码'],
      answer: '用户名',
    }, {
      id: 748,
      desc: '电子邮件地址由两部分组成，用@分开，其中@号右边是（）。',
      options: ['计算机名', '邮件服务器域名', '帐户名', '本机域名'],
      answer: '邮件服务器域名',
    }, {
      id: 749,
      desc: '电子邮件到达时，收件人的电脑没有开机，那么该电子邮件将（）。',
      options: ['永远不再发送', '保存在服务商ISP的主机上', '退回给发件人', '需要对方再重新发送'],
      answer: '保存在服务商ISP的主机上',
    }, {
      id: 750,
      desc: '在电子邮件设置中，代表发件服务器的是（）。',
      options: ['POP3', 'SMTP', 'MIME', 'X400'],
      answer: 'SMTP',
    }, {
      id: 751,
      desc: '匿名FTP的默认用户名是（）。',
      options: ['guest', 'anonymous', 'public', 'administrator'],
      answer: 'anonymous',
    }, {
      id: 752,
      desc: '电子公告板的缩写是（），它提供电子交流平台用户可在上面书写、发布信息或提出看法。',
      options: ['BBS', 'Gopher', 'Face Book', 'FTP'],
      answer: 'BBS',
    }, {
      id: 753,
      desc: '物联网的体系结构包含（）。',
      options: ['应用层、网络层、感知层', '应用层、物理层、网络层', '会话层、物理层、网络层', '应用层、链路层、感知层'],
      answer: '应用层、网络层、感知层',
    }, {
      id: 754,
      desc: '浏览器种类繁多，推荐大家使用的是（）。',
      options: ['IE浏览器', '谷歌浏览器', '360浏览器', 'QQ浏览器'],
      answer: '谷歌浏览器',
    }, {
      id: 755,
      desc: '下列组织性域名中，（）代表教育机构。',
      options: ['com', 'edu', 'gov', 'net'],
      answer: 'edu',
    }, {
      id: 756,
      desc: '在计算机网络中，表征数据传输可靠性的是（）。',
      options: ['传输速率', '误码率', '信息容量', '频带利用率'],
      answer: '误码率',
    }, {
      id: 757,
      desc: '目前Internet 所采用的IPv6 协议的IP 地址由（）个字节组成。',
      options: ['4', '16', '64', '128'],
      answer: '128',
    }, {
      id: 758,
      desc: '对于IP 地址为130.2.170.55 的主机来说，它的主机地址为（）。',
      options: ['55', '170.55', '2.170.55', '10.2'],
      answer: '170.55',
    }, {
      id: 759,
      desc: '在电子邮件设置中，代表收件服务器的（）。',
      options: ['SMTP', 'POP3', 'X400', 'MIME'],
      answer: 'POP3',
    }],
    chap8: [{
      id: 800,
      desc: '下面关于密码的设置，不够安全的是（）。',
      options: ['建议经常更新密码', '密码最好是数字、大小写字母、特殊符号的组合', '密码的长度最好不要少于6位', '为了方便记忆，使用自己或家人的名字、电话号码'],
      answer: '为了方便记忆，使用自己或家人的名字、电话号码',
    }, {
      id: 801,
      desc: '计算机信息安全之所以重要，受到各国的广泛重视，主要是因为（）。',
      options: ['信息资源的重要性和计算机系统本身固有的脆弱性', '计算机应用范围广，用户多', '计算机犯罪增多，危害大', '用户对计算机信息安全的重要性认识不足'],
      answer: '信息资源的重要性和计算机系统本身固有的脆弱性',
    }, {
      id: 802,
      desc: '计算机信息安全技术分为两个层次，其中的第二层次为（）。',
      options: ['计算机系统安全', '计算机数据安全', '计算机物理安全', '计算机网络安全'],
      answer: '计算机数据安全',
    }, {
      id: 803,
      desc: '计算机信息安全技术不包括（）。',
      options: ['数据加密技术', '数字签名与数字证书', '防火墙技术', '《计算机病毒防治管理办法》'],
      answer: '《计算机病毒防治管理办法》',
    }, {
      id: 804,
      desc: '通常意义上的网络黑客是指：通过互联网利用非正常手段（）。',
      options: ['发布信息的人', '在网络上行骗的人', '入侵他人计算机系统的人', '晚上上网的人'],
      answer: '入侵他人计算机系统的人',
    }, {
      id: 805,
      desc: '计算机病毒实际上是（）。',
      options: ['一条命令', '一个文本文件', '一个病原体', '一段程序'],
      answer: '一段程序',
    }, {
      id: 806,
      desc: '使用本机上的杀毒软件清除病毒前，应当（）。',
      options: ['备份重要数据', '接通网络', '保持室内通风', '疏散人群'],
      answer: '备份重要数据',
    }, {
      id: 807,
      desc: '在计算机信息安全中，密码学主要用于研究（）。',
      options: ['硬件安全', '软件安全', '数据安全', '网络安全'],
      answer: '数据安全',
    }, {
      id: 808,
      desc: '以下不属于计算机病毒特征的是（）。',
      options: ['免疫性', '破坏性', '可激发性', '潜伏性'],
      answer: '免疫性',
    }, {
      id: 809,
      desc: '文件型病毒通常隐藏在（）中。',
      options: ['ROM', 'RAM', '.txt 文件', '.com 或.exe 文件'],
      answer: '.com 或.exe 文件',
    }, {
      id: 810,
      desc: '计算机病毒可以通过多种途径传染，其中传播途径最快的途径是通过（）。',
      options: ['U盘', '硬盘', '光盘', '网络'],
      answer: '网络',
    }, {
      id: 811,
      desc: '计算机病毒具有很强的破坏性，导致（）。',
      options: ['烧毁CPU', '破坏程序和数据', '损坏显示器', '磁盘物理损坏'],
      answer: '破坏程序和数据',
    }, {
      id: 812,
      desc: '采用（）安全防范措施，不但能防止来自外部网络的恶意入侵，也可以限制内部网络计算机对外的通信。',
      options: ['防火墙', '调制解调器', '反病毒软件', '网卡'],
      answer: '防火墙',
    }, {
      id: 813,
      desc: '在计算机上安装防病毒软件，要注意及时（）以保证能防止和查杀新近出现的病毒。',
      options: ['升级', '分析', '检查', '启动'],
      answer: '升级',
    }, {
      id: 814,
      desc: '使用计算机反病毒软件可以（）。',
      options: ['查出已知病毒，清除全部病毒', '查出已知病毒，清除部分病毒', '修复被病毒破坏的所有数据', '清除网络上的病毒'],
      answer: '查出已知病毒，清除部分病毒',
    }, {
      id: 815,
      desc: '个人电脑使用防火墙的作用是（）。',
      options: ['不占用系统资源', '清除从网络入侵的计算机病毒', '能保护整个网络系统', '增加保护级别'],
      answer: '增加保护级别',
    }, {
      id: 816,
      desc: '为防止黑客的入侵下列做法有效的是（）。',
      options: ['关紧机房的门窗', '在机房安装电子报警装置', '定期整理磁盘碎片', '在计算机中安装防火墙'],
      answer: '在计算机中安装防火墙',
    }, {
      id: 817,
      desc: '使用计算机时，出现（）现象一般是病毒所致。',
      options: ['程序和数据神秘丢失', '电脑无法开机', '程序装入时间比平常快', '鼠标不够灵敏'],
      answer: '程序和数据神秘丢失',
    }, {
      id: 818,
      desc: '预防计算机病毒应采取的措施之一是（）。',
      options: ['使用来历不明的光盘', '定期升级防病毒软件', '每天对硬盘格式化', '定期给计算机房消毒杀菌'],
      answer: '定期升级防病毒软件',
    }]
  }

}
export default oa;