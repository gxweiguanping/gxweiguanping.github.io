(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{482:function(s,n,a){"use strict";a.r(n);var e=a(8),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[s._v("#")]),s._v(" 命令")]),s._v(" "),n("h3",{attrs:{id:"启动、停止、重启"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#启动、停止、重启"}},[s._v("#")]),s._v(" 启动、停止、重启")]),s._v(" "),n("p",[s._v("启动 Nginx：")]),s._v(" "),n("div",{staticClass:"language-nginx line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-nginx"}},[n("code",[s._v("sudo systemctl start nginx\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("停止 Nginx：")]),s._v(" "),n("div",{staticClass:"language-nginx line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-nginx"}},[n("code",[s._v("sudo systemctl stop nginx\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("重启 Nginx：")]),s._v(" "),n("div",{staticClass:"language-nginx line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-nginx"}},[n("code",[s._v("sudo systemctl restart nginx\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("指定配置文件位置重启Nginx")]),s._v(" "),n("div",{staticClass:"language-nginx line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-nginx"}},[n("code",[s._v("sudo nginx -c /path/to/nginx.conf -s reload\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("其中，"),n("code",[s._v("/path/to/nginx.conf")]),s._v("是你要使用的Nginx配置文件的路径。")]),s._v(" "),n("p",[s._v("解释：")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("sudo")]),s._v(": 使用管理员权限运行命令。")]),s._v(" "),n("li",[n("code",[s._v("nginx")]),s._v(": Nginx可执行文件。")]),s._v(" "),n("li",[n("code",[s._v("-c /path/to/nginx.conf")]),s._v(": 指定Nginx配置文件的路径。")]),s._v(" "),n("li",[n("code",[s._v("-s reload")]),s._v(": 发送重启信号给Nginx，让它重新加载配置文件并重启。")])]),s._v(" "),n("h3",{attrs:{id:"检查配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#检查配置文件"}},[s._v("#")]),s._v(" 检查配置文件")]),s._v(" "),n("p",[s._v("检查 Nginx 配置文件是否有语法错误：")]),s._v(" "),n("div",{staticClass:"language-nginx line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-nginx"}},[n("code",[s._v("sudo nginx -t\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"重新加载配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#重新加载配置"}},[s._v("#")]),s._v(" 重新加载配置")]),s._v(" "),n("p",[s._v("重新加载 Nginx 配置文件：")]),s._v(" "),n("div",{staticClass:"language-nginx line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-nginx"}},[n("code",[s._v("sudo systemctl reload nginx\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);