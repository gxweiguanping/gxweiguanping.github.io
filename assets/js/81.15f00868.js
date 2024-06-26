(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{411:function(t,a,e){"use strict";e.r(a);var v=e(8),s=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"理论基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#理论基础"}},[t._v("#")]),t._v(" 理论基础")]),t._v(" "),a("h2",{attrs:{id:"cap定理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cap定理"}},[t._v("#")]),t._v(" CAP定理")]),t._v(" "),a("p",[t._v("1998年，加州大学的计算机科学家 Eric Brewer 提出，分布式系统有三个指标")]),t._v(" "),a("ul",[a("li",[t._v("Consistency (一致性): 用户访问分布式系统中的任意节点，得到的数据必须一致")]),t._v(" "),a("li",[t._v("Availability (可用性): 用户访问集群中的任意健康节点，必须能得到响应，而不是超时或拒绝")]),t._v(" "),a("li",[t._v("Partition tolerance (分区容错性): 因为网络故障或其它原因导致分布式系统中的部分节点与其它节点失去连接，形成独立分区，在集群出现分区时，整个系统也要持续对外提供服务")])]),t._v(" "),a("blockquote",[a("p",[t._v("并指出一个结论是 分布式系统无法同时满足这三个指标，只能满足其中两个，这个结论就叫做 CAP 定理")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/studentgitee/note-picture/raw/master/99995656262.png",alt:"99995656262"}})]),t._v(" "),a("h3",{attrs:{id:"consistency-一致性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consistency-一致性"}},[t._v("#")]),t._v(" Consistency（一致性）")]),t._v(" "),a("p",[t._v("用户访问分布式系统中的任意节点，得到的数据必须一致。指数据在多个副本之间能够保持一致的特性（"),a("strong",[t._v("严格的一致性")]),t._v("），等同于所有节点访问"),a("strong",[t._v("同一份最新")]),t._v("的数据副本。")]),t._v(" "),a("p",[a("strong",[t._v("注意")]),t._v("：node1和node2分别代表不相同的节点。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/studentgitee/note-picture/raw/master/20240417101254.png",alt:"20240417101254"}})]),t._v(" "),a("h3",{attrs:{id:"availability-可用性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#availability-可用性"}},[t._v("#")]),t._v(" Availability（可用性）")]),t._v(" "),a("p",[t._v("用户访问集群中的任意健康节点，必须能得到响应，而不是超时或拒绝，但是"),a("strong",[t._v("不保证获取的数据为最新数据")])]),t._v(" "),a("p",[t._v("比如现在node03节点接收到请求后，该请求被阻塞或拒绝了，此时不满足可用性。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/studentgitee/note-picture/raw/master/image-20240417101948194.png",alt:"image-20240417101948194"}})]),t._v(" "),a("h3",{attrs:{id:"partition-tolerance-分区容错性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#partition-tolerance-分区容错性"}},[t._v("#")]),t._v(" Partition Tolerance（分区容错性）")]),t._v(" "),a("p",[t._v("Partition(分区)∶因为网络故障或其它原因导致分布式系统中的部分节点与其它节点失去连接，形成独立分区。首先对于分布式系统，分区是必然存在的，因为永远保证不了网络是一直连通的。")]),t._v(" "),a("p",[t._v("Tolerance(容错)︰在集群出现分区时，整个系统也要持续对外提供服务")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/studentgitee/note-picture/raw/master/image-20240417102430813.png",alt:"image-20240417102430813"}})]),t._v(" "),a("p",[t._v("node03由于网络的原因，与其他节点失去了联系。")]),t._v(" "),a("p",[t._v("如果这时候，我在node02节点添加了data:v1数据，那么同步给node01是正常的，但是这时候无法同步到node03，因为网络故障的原因。")]),t._v(" "),a("p",[t._v("如果要保证可用性，这时候用户访问，刚好落到node03节点上，那么就出现了数据的不一致。此时无法达到CAP中的C。")]),t._v(" "),a("p",[t._v("如果要保证一致性，这时候用户访问，刚好落到node03节点上")]),t._v(" "),a("ul",[a("li",[t._v("方案1：只能阻塞住这些请求，直到网络故障恢复，数据同步以后，才响应这些请求。")]),t._v(" "),a("li",[t._v("方案2：剔除掉node03这个节点，不再对外提供服务")])]),t._v(" "),a("p",[t._v("以上两种方案都是无法达到CAP种的A。")]),t._v(" "),a("h2",{attrs:{id:"base理论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#base理论"}},[t._v("#")]),t._v(" BASE理论")]),t._v(" "),a("p",[t._v("BASE（Basically Available、Soft state、Eventual consistency）是基于CAP理论逐步演化而来的，核心思想是即便不能达到强一致性（Strong consistency），也可以根据应用特点采用适当的方式来达到最终一致性（Eventual consistency）的效果。")]),t._v(" "),a("p",[a("strong",[t._v("BASE 理论本质上是对 CAP 的延伸和补充，更具体地说，是对 CAP 中 AP 方案的一个补充。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/studentgitee/note-picture/raw/master/912113886635192.png",alt:"912113886635192"}})]),t._v(" "),a("p",[t._v("BASE的主要含义：")]),t._v(" "),a("h3",{attrs:{id:"basically-available-基本可用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basically-available-基本可用"}},[t._v("#")]),t._v(" Basically Available（基本可用）")]),t._v(" "),a("p",[t._v("什么是基本可用呢？")]),t._v(" "),a("p",[t._v("假设系统出现了不可预知的故障，但还是能用，只是相比较正常的系统而言，可能会有响应时间上的损失或者功能上的降级。")]),t._v(" "),a("h3",{attrs:{id:"soft-state-软状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#soft-state-软状态"}},[t._v("#")]),t._v(" Soft State（软状态）")]),t._v(" "),a("p",[t._v("什么是硬状态呢？")]),t._v(" "),a("p",[t._v("要求多个节点的数据副本都是一致的，这是一种“硬状态”。软状态也称为弱状态，相比较硬状态而言，允许系统中的数据存在中间状态，并认为该状态不影响系统的整体可用性，即允许系统在多个不同节点的数据副本存在数据延时。")]),t._v(" "),a("h3",{attrs:{id:"eventually-consistent-最终一致性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eventually-consistent-最终一致性"}},[t._v("#")]),t._v(" Eventually Consistent（最终一致性）")]),t._v(" "),a("p",[t._v("上面说了软状态，但是不应该一直都是软状态。在一定时间后，应该到达一个最终的状态，保证所有副本保持数据一致性，从而达到数据的最终一致性。这个时间取决于网络延时、系统负载、数据复制方案设计等等因素。")]),t._v(" "),a("blockquote",[a("p",[t._v("分布式一致性的 3 种级别：")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("强一致性")]),t._v("：系统写入了什么，读出来的就是什么。")]),t._v(" "),a("li",[a("strong",[t._v("弱一致性")]),t._v("：不一定可以读取到最新写入的值，也不保证多少时间之后读取到的数据是最新的，只是会尽量保证某个时刻达到数据一致的状态。")]),t._v(" "),a("li",[a("strong",[t._v("最终一致性")]),t._v("：弱一致性的升级版，系统会保证在一定时间内达到数据一致的状态。")])]),t._v(" "),a("p",[a("strong",[t._v("业界比较推崇是最终一致性级别，但是某些对数据一致要求十分严格的场景比如银行转账还是要保证强一致性。")])])]),t._v(" "),a("h2",{attrs:{id:"解决分布式事务的思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决分布式事务的思路"}},[t._v("#")]),t._v(" 解决分布式事务的思路")]),t._v(" "),a("p",[t._v("分布式事务最大的问题是各个子事务的一致性问题，因此可以借鉴CAP定理和BASE理论，有两种解决思路：")]),t._v(" "),a("p",[t._v("AP模式：各子事务分别执行和提交，允许出现结果不一致，然后采用弥补措施恢复数据即可，实现最终一致。")]),t._v(" "),a("p",[t._v("CP模式：各个子事务执行后互相等待，同时提交，同时回滚，达成强一致。但事务等待过程中，处于弱可用状态。")]),t._v(" "),a("p",[t._v("但不管是哪一种模式，都需要在子系统事务之间互相通讯，协调事务状态，也就是需要一个"),a("strong",[t._v("事务协调者(TC)")]),t._v("：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/studentgitee/note-picture/raw/master/g46.jpg",alt:"g46"}})]),t._v(" "),a("p",[t._v("这里的子系统事务，称为"),a("strong",[t._v("分支事务")]),t._v("；有关联的各个分支事务在一起称为"),a("strong",[t._v("全局事务")])])])}),[],!1,null,null,null);a.default=s.exports}}]);