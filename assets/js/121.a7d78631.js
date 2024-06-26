(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{451:function(a,r,e){"use strict";e.r(r);var s=e(8),t=Object(s.a)({},(function(){var a=this,r=a._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h2",{attrs:{id:"安装rancher"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装rancher"}},[a._v("#")]),a._v(" 安装Rancher")]),a._v(" "),r("p",[a._v("Rancher 是一个开源的容器管理平台，它让管理 Kubernetes 变得非常简单。以下是在 Docker 中安装 Rancher 的步骤：")]),a._v(" "),r("h3",{attrs:{id:"步骤1-确保满足安装要求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#步骤1-确保满足安装要求"}},[a._v("#")]),a._v(" "),r("strong",[a._v("步骤1：确保满足安装要求")])]),a._v(" "),r("p",[a._v("确保你的系统满足以下要求：")]),a._v(" "),r("ul",[r("li",[a._v("64 位 Linux 发行版（例如 Ubuntu、CentOS 等）")]),a._v(" "),r("li",[a._v("安装了 Docker 17.03.2 或更高版本")])]),a._v(" "),r("h3",{attrs:{id:"步骤2-拉取-rancher-镜像"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#步骤2-拉取-rancher-镜像"}},[a._v("#")]),a._v(" "),r("strong",[a._v("步骤2：拉取 Rancher 镜像")])]),a._v(" "),r("p",[a._v("在命令行中输入以下命令，从 Docker Hub 下载 Rancher 的 Docker 镜像：")]),a._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" pull rancher/rancher:latest\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br")])]),r("h3",{attrs:{id:"步骤3-运行-rancher-容器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#步骤3-运行-rancher-容器"}},[a._v("#")]),a._v(" "),r("strong",[a._v("步骤3：运行 Rancher 容器")])]),a._v(" "),r("p",[a._v("使用以下命令创建并运行一个名为 "),r("code",[a._v("rancher")]),a._v(" 的 Rancher 容器。这个命令将会将 Rancher 的 80 和 443 端口分别映射到宿主机的 80 和 443 端口：")]),a._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("unless-stopped "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("10000")]),a._v(":80 "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("443")]),a._v(":443 "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" rancher rancher/rancher:latest\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br")])]),r("p",[a._v("在这个命令中：")]),a._v(" "),r("ul",[r("li",[r("code",[a._v("-d")]),a._v("：让 Docker 在后台运行这个容器。")]),a._v(" "),r("li",[r("code",[a._v("--restart=unless-stopped")]),a._v("：设置 Docker 容器的重启策略为 "),r("code",[a._v("unless-stopped")]),a._v("，这意味着只要容器没有被手动停止，当容器退出时就会自动重启容器。")]),a._v(" "),r("li",[r("code",[a._v("-p 10000:80 -p 443:443")]),a._v("：将容器的 80 和 443 端口分别映射到宿主机的 10000 和 443 端口，以便访问 Rancher 的 Web 界面。")]),a._v(" "),r("li",[r("code",[a._v("--name rancher")]),a._v("：给新的 Docker 容器设置一个名字为 "),r("code",[a._v("rancher")]),a._v("。")]),a._v(" "),r("li",[r("code",[a._v("rancher/rancher:latest")]),a._v("：这是 Docker 镜像的名字和标签，这里我们使用的是最新版本的 Rancher 镜像。")])]),a._v(" "),r("h3",{attrs:{id:"步骤4-访问-rancher-web-界面"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#步骤4-访问-rancher-web-界面"}},[a._v("#")]),a._v(" "),r("strong",[a._v("步骤4：访问 Rancher Web 界面")])]),a._v(" "),r("p",[a._v("等待几分钟，让 Rancher 容器完成启动。然后，在 Web 浏览器中访问你的服务器的 IP 地址或主机名。你应该能看到 Rancher 的登录界面。")]),a._v(" "),r("h3",{attrs:{id:"步骤5-配置-rancher"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#步骤5-配置-rancher"}},[a._v("#")]),a._v(" "),r("strong",[a._v("步骤5：配置 Rancher")])]),a._v(" "),r("p",[a._v("按照 Rancher 的设置向导完成配置。你需要设置管理员密码、服务器 URL 等信息。")]),a._v(" "),r("p",[a._v("完成配置后，你就可以开始使用 Rancher 来管理 Kubernetes 集群了。")]),a._v(" "),r("h3",{attrs:{id:"步骤6-访问rancher"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#步骤6-访问rancher"}},[a._v("#")]),a._v(" "),r("strong",[a._v("步骤6：访问rancher")])]),a._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[a._v("http://ip:10000/\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br")])])])}),[],!1,null,null,null);r.default=t.exports}}]);