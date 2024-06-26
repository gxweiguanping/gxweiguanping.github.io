(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{443:function(a,e,s){"use strict";s.r(e);var r=s(8),t=Object(r.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"容器命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容器命令"}},[a._v("#")]),a._v(" 容器命令")]),a._v(" "),e("h3",{attrs:{id:"导入容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#导入容器"}},[a._v("#")]),a._v(" 导入容器")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# 导入容器\ndocker load -i tar名称\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h3",{attrs:{id:"导出容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#导出容器"}},[a._v("#")]),a._v(" 导出容器")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# 将tar包导入到docker本地仓库中\ndocker save -o xxx.tar 镜像名称:镜像版本\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h3",{attrs:{id:"运行容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行容器"}},[a._v("#")]),a._v(" 运行容器")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker run 镜像名---------------# 镜像名新建并启动容器\n--name                         # 别名为容器起一个名字\n-d                             # 启动守护式容器(在后台启动容器）\n-p                             # 映射端口号:原始端口号\n-it                            # it:交互式启动\n--restart=always               # 重启docker时自动启动该容器\n-v                             # 挂载容器目录  宿主机目录:容器内目录\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br")])]),e("h3",{attrs:{id:"查看运行的容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看运行的容器"}},[a._v("#")]),a._v(" 查看运行的容器")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker ps                       # 列出所有正在运行的容器\n-a                              # 正在运行的和历史运行过的容器\n-9                              # 静默模式，只显示容器编号\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("h3",{attrs:{id:"查看容器的日志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看容器的日志"}},[a._v("#")]),a._v(" 查看容器的日志")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker logs 容器id\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"停止-关闭-重启容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#停止-关闭-重启容器"}},[a._v("#")]),a._v(" 停止|关闭|重启容器")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker start  容器名字或者容器id        # 开启容器\ndocker restart   容器名或者容器id      # 重启容器\ndocker stop   容器名或者容器id        # 正常停止容器运行\ndocker kill  容器名或者容器id         #立即停止容器运行\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("h3",{attrs:{id:"进入容器内部"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进入容器内部"}},[a._v("#")]),a._v(" 进入容器内部")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker exec -it 容器id /bin/bash\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"删除容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除容器"}},[a._v("#")]),a._v(" 删除容器")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker rm -f  容器id           #-f强制删除\n\n# 删除所有容器\ndocker rm -f $(docker ps -aq)    \n\n# 清理所有处于终止状态的容器\ndocker container prune\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br")])]),e("h3",{attrs:{id:"复制文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#复制文件"}},[a._v("#")]),a._v(" 复制文件")]),a._v(" "),e("p",[e("strong",[a._v("如果你希望在启动容器时自动将容器内部的文件复制到宿主机上，可以使用以下命令：")])]),a._v(" "),e("div",{staticClass:"language-docker line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-docker"}},[e("code",[a._v("docker cp <container_name>:<container_path> <host_path>\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("其中，"),e("code",[a._v("<container_name>")]),a._v(" 为容器的名称，"),e("code",[a._v("<container_path>")]),a._v(" 为容器内部的文件路径，"),e("code",[a._v("<host_path>")]),a._v(" 为宿主机上的目录路径。")]),a._v(" "),e("p",[a._v("例如，将容器内部的 "),e("code",[a._v("/app/logs")]),a._v(" 目录复制到宿主机上的 "),e("code",[a._v("/home/user/logs")]),a._v(" 目录，可以使用以下命令")]),a._v(" "),e("div",{staticClass:"language-docker line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-docker"}},[e("code",[a._v("docker cp mycontainer:/app/logs /home/user/logs\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("这个命令会将 "),e("code",[a._v("mycontainer")]),a._v(" 容器内部的 "),e("code",[a._v("/app/logs")]),a._v(" 目录复制到宿主机上的 "),e("code",[a._v("/home/user/logs")]),a._v(" 目录中。注意，目标目录必须事先存")]),a._v(" "),e("p",[a._v("在。如果目标目录不存在，复制命令将失败。")]),a._v(" "),e("p",[e("strong",[a._v("如果你想将宿主机中的文件夹复制到 Docker 容器内部上。可以使用以下命令实现：")])]),a._v(" "),e("div",{staticClass:"language-docker line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-docker"}},[e("code",[a._v("docker cp <host_path> <container_name>:<container_path>\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("其中，"),e("code",[a._v("<host_path>")]),a._v(" 是宿主机上文件夹的路径，"),e("code",[a._v("<container_name>")]),a._v(" 是 Docker 容器的名称，"),e("code",[a._v("<container_path>")]),a._v(" 是容器内部的路径。")]),a._v(" "),e("p",[a._v("例如，将宿主机上 "),e("code",[a._v("/home/user/data")]),a._v(" 目录复制到 Docker 容器名为 "),e("code",[a._v("mycontainer")]),a._v(" 的 "),e("code",[a._v("/data")]),a._v(" 目录中，可以使用以下命令：")]),a._v(" "),e("div",{staticClass:"language-docker line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-docker"}},[e("code",[a._v("docker cp /home/user/data mycontainer:/data\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("这个命令会将 "),e("code",[a._v("/home/user/data")]),a._v(" 目录复制到 "),e("code",[a._v("mycontainer")]),a._v(" 容器的 "),e("code",[a._v("/data")]),a._v(" 目录中。注意，目标目录必须在容器内部存在，否则复制命")]),a._v(" "),e("p",[a._v("令将失败。")]),a._v(" "),e("p",[a._v("另外，需要注意的是，如果需要将文件夹内的所有文件一起复制到容器内部，可以使用 "),e("code",[a._v("-r")]),a._v(" 参数，命令格式如下：")]),a._v(" "),e("div",{staticClass:"language-docerk line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker cp -r <host_path> <container_name>:<container_path>\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("例如，将宿主机上 "),e("code",[a._v("/home/user/data")]),a._v(" 目录下的所有文件和子文件夹复制到 Docker 容器名为 "),e("code",[a._v("mycontainer")]),a._v(" 的 "),e("code",[a._v("/data")]),a._v(" 目录中，可以使")]),a._v(" "),e("p",[a._v("用以下命令：")]),a._v(" "),e("div",{staticClass:"language-docker line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-docker"}},[e("code",[a._v("docker cp -r /home/user/data mycontainer:/data\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("这个命令会将 "),e("code",[a._v("/home/user/data")]),a._v(" 目录下的所有文件和子文件夹复制到 "),e("code",[a._v("mycontainer")]),a._v(" 容器的 "),e("code",[a._v("/data")]),a._v(" 目录中。")]),a._v(" "),e("h3",{attrs:{id:"查看容器内的时间"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看容器内的时间"}},[a._v("#")]),a._v(" 查看容器内的时间")]),a._v(" "),e("p",[a._v("要查看容器内的时间，可以使用以下命令：")]),a._v(" "),e("div",{staticClass:"language-docker line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-docker"}},[e("code",[a._v("docker exec <container_name_or_id> date\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("将 "),e("code",[a._v("<container_name_or_id>")]),a._v(" 替换为实际的容器名称或容器ID。这个命令将在指定的容器内执行 "),e("code",[a._v("date")]),a._v(" 命令，显示容器内的当前日期和时间。")])])}),[],!1,null,null,null);e.default=t.exports}}]);