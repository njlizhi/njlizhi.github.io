(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{936:function(s,n,a){"use strict";a.r(n);var t=a(6),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-下载nginx安装包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载nginx安装包"}},[s._v("#")]),s._v(" 1.下载Nginx安装包")]),s._v(" "),a("ol",[a("li",[s._v("官网下载安装包")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("直接下载.tar.gz安装包，地址：https://nginx.org/en/download.html\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("img",{attrs:{src:"https://www.zpzpup.com/assets/image/nginx/nginx01.png",alt:"下载安装包"}}),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("命令行下载安装包")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("  wget -c https://nginx.org/download/nginx-1.18.0.tar.gz // 可切换至 /usr 目录下载\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_2-解压"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-解压"}},[s._v("#")]),s._v(" 2.解压")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 解压\ntar -zxvf nginx-1.18.0.tar.gz  \n// 切换到nginx目录\ncd nginx-1.18.0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"_3-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置"}},[s._v("#")]),s._v(" 3.配置")]),s._v(" "),a("p",[s._v("1.使用默认配置（推荐）")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("./configure\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("img",{attrs:{src:"https://www.zpzpup.com/assets/image/nginx/nginx02.png",alt:"使用默认配置"}}),s._v(" "),a("p",[s._v("错误为：./configure: error: the HTTP rewrite module requires the PCRE library.")]),s._v(" "),a("img",{attrs:{src:"https://www.zpzpup.com/assets/image/nginx/nginx-err01.png",alt:"错误"}}),s._v(" "),a("p",[s._v("安装pcre-devel解决问题")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("yum -y install pcre-devel\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("还有可能出现：")]),s._v(" "),a("p",[s._v("错误提示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("./configure: error: the HTTP cache module requires md5 functions\nfrom OpenSSL library.   You can either disable the module by using\n--without-http-cache option, or install the OpenSSL library into the system,\nor build the OpenSSL library statically from the source with nginx by using\n--with-http_ssl_module --with-openssl=<path> options.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("解决办法：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("yum -y install openssl openssl-devel\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("2.自定义配置（不推荐）")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("./configure \\\n--prefix=/usr/local/nginx \\\n--conf-path=/usr/local/nginx/conf/nginx.conf \\\n--pid-path=/usr/local/nginx/conf/nginx.pid \\\n--lock-path=/var/lock/nginx.lock \\\n--error-log-path=/var/log/nginx/error.log \\\n--http-log-path=/var/log/nginx/access.log \\\n--with-http_gzip_static_module \\\n--http-client-body-temp-path=/var/temp/nginx/client \\\n--http-proxy-temp-path=/var/temp/nginx/proxy \\\n--http-fastcgi-temp-path=/var/temp/nginx/fastcgi \\\n--http-uwsgi-temp-path=/var/temp/nginx/uwsgi \\\n--http-scgi-temp-path=/var/temp/nginx/scgi\n注：将临时文件目录指定为/var/temp/nginx，需要在/var下创建temp及nginx目录\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h2",{attrs:{id:"_4-编译安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-编译安装"}},[s._v("#")]),s._v(" 4.编译安装")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("make\nmake install\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("img",{attrs:{src:"https://www.zpzpup.com/assets/image/nginx/nginx03.png"}}),s._v(" "),a("img",{attrs:{src:"https://www.zpzpup.com/assets/image/nginx/nginx04.png"}}),s._v(" "),a("p",[s._v("查找安装路径")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("whereis nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("img",{attrs:{src:"https://www.zpzpup.com/assets/image/nginx/nginx05.png"}}),s._v(" "),a("p",[s._v("启动、停止nginx")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cd /usr/local/nginx/sbin/\n./nginx \n./nginx -s stop\n./nginx -s quit\n./nginx -s reload\n./nginx -s quit:此方式停止步骤是待nginx进程处理任务完毕进行停止。\n./nginx -s stop:此方式相当于先查出nginx进程id再使用kill命令强制杀掉进程。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("img",{attrs:{src:"https://www.zpzpup.com/assets/image/nginx/nginx06.png"}}),s._v(" "),a("p",[s._v("查询nginx进程：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ps aux|grep nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("重启 nginx")]),s._v(" "),a("p",[s._v("1.先停止再启动（推荐）：\n对 nginx 进行重启相当于先停止再启动，即先执行停止命令再执行启动命令。如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("./nginx -s \n./nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("img",{attrs:{src:"https://www.zpzpup.com/assets/image/nginx/nginx09.png"}}),s._v(" "),a("p",[s._v("2.重新加载配置文件：\n当 nginx的配置文件 nginx.conf 修改后，要想让配置生效需要重启 nginx，使用-s reload不用先停止 ngin x再启动 nginx 即可将配置信息在 nginx 中生效，如下：\n./nginx -s reload")]),s._v(" "),a("p",[s._v("启动成功可以看到")]),s._v(" "),a("h2",{attrs:{id:"_5-开机自动启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-开机自动启动"}},[s._v("#")]),s._v(" 5.开机自动启动")]),s._v(" "),a("p",[s._v("即在rc.local增加启动代码就可以了。")]),s._v(" "),a("p",[s._v("1.vi /etc/rc.local")]),s._v(" "),a("p",[s._v("2.i 进行修改")]),s._v(" "),a("p",[s._v("3.增加一行 /usr/local/nginx/sbin/nginx")]),s._v(" "),a("p",[s._v("4.Esc 退出编辑")]),s._v(" "),a("p",[s._v("5.:wq 报存退出")]),s._v(" "),a("img",{attrs:{src:"https://www.zpzpup.com/assets/image/nginx/nginx10.png"}}),s._v(" "),a("p",[s._v("6.设置执行权限：\nchmod 755 rc.local")])])}),[],!1,null,null,null);n.default=e.exports}}]);