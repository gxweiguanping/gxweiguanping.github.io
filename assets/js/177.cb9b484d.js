(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{507:function(e,r,o){"use strict";o.r(r);var t=o(8),v=Object(t.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"kafka关键原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kafka关键原理"}},[e._v("#")]),e._v(" kafka关键原理")]),e._v(" "),r("h2",{attrs:{id:"日志分段切分条件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#日志分段切分条件"}},[e._v("#")]),e._v(" 日志分段切分条件")]),e._v(" "),r("p",[e._v("日志分段文件切分包含以下 4 个条件，满足其一即可：")]),e._v(" "),r("ol",[r("li",[e._v("当前日志分段文件的大小超过了 broker 端参数"),r("code",[e._v("log.segment.bytes")]),e._v(" 配置的值。"),r("code",[e._v("log.segment.bytes")]),e._v(" 参数的默认值为 "),r("code",[e._v("1073741824")]),e._v("，即 "),r("code",[e._v("1GB")])]),e._v(" "),r("li",[e._v("当前日志分段中消息的最小时间戳与当前系统的时间戳的差值大于 "),r("code",[e._v("log.roll.ms")]),e._v("或 "),r("code",[e._v("log.roll.hours")]),e._v("参数配置的值。如果同时配置了"),r("code",[e._v("log.roll.ms")]),e._v("和"),r("code",[e._v("log.roll.hours")]),e._v("参数，那么 "),r("code",[e._v("log.roll.ms")]),e._v("的优先级高默认情况下，只配置了"),r("code",[e._v("log.roll.hours")]),e._v(" 参数，其值为 "),r("code",[e._v("168")]),e._v("，即"),r("code",[e._v("7")]),e._v(" 天。")]),e._v(" "),r("li",[e._v("偏移量索引文件或时间戳索引文件的大小达到 broker 端参数 log.index.size.max.bytes 配置的值。"),r("code",[e._v("log.index.size .max.bytes")]),e._v(" 的默认值为 "),r("code",[e._v("10485760")]),e._v("，即 "),r("code",[e._v("10MB")])]),e._v(" "),r("li",[e._v("追加的消息的偏移量与当前日志分段的起始偏移量之间的差值大于 Integer.MAX_VALUE,即要追加的消息的偏移量不能转变为相对偏移量（offset - baseOffset > Integer.MAX_VALUE）。")])]),e._v(" "),r("h2",{attrs:{id:"controller-控制器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#controller-控制器"}},[e._v("#")]),e._v(" controller 控制器")]),e._v(" "),r("blockquote",[r("p",[e._v("Controller 简单来说，就是 kafka 集群的状态管理者")])]),e._v(" "),r("p",[e._v("在 Kafka 集群中会有一个或者多个 broker， 其中有一个 broker 器 会被选举为控制器（Kafka Controller），它负责维护整个集群中所有分区和副本的状态及分区 leader 的选举。当某个分区的 leader 副本出现故障时，由控制器负责为该分区选举新的 leader 副本。当检测到某个分区的 ISR 集合发生变化时，由控制器负责通知所有 broker 更新其元数据信息。当使用 kafka-topics.sh脚本为某个 topic 增加分区数量时，同样还是由控制器负责分区的重新分配。")]),e._v(" "),r("p",[e._v('Kafka 中的控制器选举的工作依赖于 Zookeeper，成功竞选为控制器的 broker 会在 Zookeeper 中创建/controller 这个临时（EPHEMERAL）节点，此临时节点的内容参考如下：{"version":1,"brokerid":0,"timestamp":"1529210278988"}其中 version 在目前版本中固定为 1，brokerid 表示成为控制器的 broker 的 id 编号，timestamp 表示竞选成为控制器时的时间戳。')]),e._v(" "),r("p",[r("strong",[e._v("在任意时刻，集群中有且仅有一个控制器")]),e._v("。每个 broker 启动的时候会去尝试去读取 zookeeper 上的/controller 节点的 brokerid 的值，")]),e._v(" "),r("ul",[r("li",[e._v("如果读取到 brokerid 的值不为-1，则表示已经有其它 broker 节点成功竞选为控制器，所以当前 broker 就会放弃竞选；")]),e._v(" "),r("li",[e._v("如果 Zookeeper 中不存在/controller 这个节点，或者这个节点中的数据异常，那么就会尝试去创建/controller 这个节点，当前 broker 去创建节点的时候，也有可能其他 broker 同时去尝试创建这个节点，只有创建成功的那个 broker 才会成为控制器，而创建失败的 broker 则表示竞选失败。每个 broker 都会在内存中保存当前控制器的 brokerid 值，这个值可以标识为 activeControllerId。")])]),e._v(" "),r("blockquote",[r("p",[e._v("controller 竞选机制：简单说，先来先上！")])]),e._v(" "),r("h3",{attrs:{id:"controller-的职责"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#controller-的职责"}},[e._v("#")]),e._v(" controller 的职责")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("监听 partition 相关变化")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("对 Zookeeper 中的/admin/reassign_partitions 节点注册 PartitionReassignmentListener，用来处理分区重分配的动作。")])]),e._v(" "),r("li",[r("p",[e._v("对 Zookeeper 中的/isr_change_notification 节点注册 IsrChangeNotificetionListener，用来处理 ISR 集合变更的动作。")])]),e._v(" "),r("li",[r("p",[e._v("对 Zookeeper 中的/admin/preferred-replica-election 节点添加 PreferredReplicaElectionListener，用来处理优先副本选举。")])])])]),e._v(" "),r("li",[r("p",[e._v("监听 topic 增减变化")]),e._v(" "),r("ul",[r("li",[e._v("对 Zookeeper 中的/brokers/topics 节点添加 TopicChangeListener，用来处理 topic 增减的变化；")]),e._v(" "),r("li",[e._v("对 Zookeeper 中的/admin/delete_topics 节点添加 TopicDeletionListener，用来处理删除 topic 的动作。")])])]),e._v(" "),r("li",[r("p",[e._v("监听 broker 相关的变化")]),e._v(" "),r("ul",[r("li",[e._v("对 Zookeeper 中的/brokers/ids/节点添加 BrokerChangeListener，用来处理 broker 增减的变化。")])])]),e._v(" "),r("li",[r("p",[e._v("更新集群的元数据信息")])]),e._v(" "),r("li",[r("p",[e._v("从 Zookeeper 中读取获取当前所有与 topic、partition 以及 broker 有关的信息并进行相应的管理。对各 topic 所对应的")])]),e._v(" "),r("li",[r("p",[e._v("Zookeeper 中的/brokers/topics/[topic]节点添加 PartitionModificationsListener，用来监听 topic 中的分区分配变化。并将最新信息同步给其他所有 broker。")])]),e._v(" "),r("li",[r("p",[e._v("启动并管理分区状态机和副本状态机。")])]),e._v(" "),r("li",[r("p",[e._v("如果参数 auto.leader.rebalance.enable 设置为 true，则还会开启一个名为"),r("code",[e._v("auto-leader-rebalance-task")]),e._v("的定时任务来负责维护分区的 leader 副本的均衡。")])])]),e._v(" "),r("h3",{attrs:{id:"controller故障转移"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#controller故障转移"}},[e._v("#")]),e._v(" controller故障转移")]),e._v(" "),r("p",[e._v("在 Kafka 集群运行过程中，只能有一台 Broker 充当控制器的角色，那么这就存在单点失效（Single Point of Failure）的风险，Kafka 是如何应对单点失效的呢？")]),e._v(" "),r("p",[e._v("答案就是，为控制器提供故障转移功能，也就是说所谓的 Failover。故障转移指的是，当运行中的控制器突然宕机或意外终止时，Kafka 能够快速地感知到，并立即启用备用控制器来代替之前失败的控制器。这个过程就被称为 Failover，该过程是自动完成的，无需你手动干预。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://gitee.com/studentgitee/note-picture/raw/master/image-20240108175613532.png",alt:"image-20240108175613532"}})]),e._v(" "),r("p",[e._v("最开始时，Broker 0 是控制器。当 Broker 0 宕机后，ZooKeeper 通过 Watch 机制感知到并删除了 /controller 临时节点。")]),e._v(" "),r("p",[e._v("之后，所有存活的 Broker 开始竞选新的控制器身份。Broker 3 最终赢得了选举，成功地在 ZooKeeper 上重建了 /controller 节点。")]),e._v(" "),r("p",[e._v("之后，Broker 3 会从 ZooKeeper 中读取集群元数据信息，并初始化到自己的缓存中。")]),e._v(" "),r("p",[e._v("至此，控制器的 Failover 完成，可以行使正常的工作职责了。")]),e._v(" "),r("h3",{attrs:{id:"分区的负载分布"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分区的负载分布"}},[e._v("#")]),e._v(" 分区的负载分布")]),e._v(" "),r("p",[e._v("客户端请求创建一个 topic 时，每一个分区副本在 broker 上的分配，是由集群 controller 来决定；")]),e._v(" "),r("h3",{attrs:{id:"分区-leader-的选举机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分区-leader-的选举机制"}},[e._v("#")]),e._v(" 分区 Leader 的选举机制")]),e._v(" "),r("blockquote",[r("p",[e._v("分区 leader 副本的选举由控制器 controller 负责具体实施。")])]),e._v(" "),r("p",[e._v("当创建分区（创建主题或增加分区都有创建分区的动作）或 Leader 下线（此时分区需要选举一个新的 leader 上线来对外提供服务）的时候都需要执行 leader 的选举动作。")]),e._v(" "),r("blockquote",[r("p",[e._v("选举策略：按照 AR(所有副本) 在集合中副本的顺序查找第一个存活的副本，并且这个副本在 ISR 集合中；")])]),e._v(" "),r("p",[e._v("一个分区的 AR 集合在 partition 分配的时候就被指定，并且只要不发生重分配的情况，集合内部副本的顺序是保持不变的，而分区的 ISR 集合中副本的顺序可能会改变；")]),e._v(" "),r("h2",{attrs:{id:"生产者原理解析"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#生产者原理解析"}},[e._v("#")]),e._v(" 生产者原理解析")]),e._v(" "),r("h3",{attrs:{id:"生产者工作流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#生产者工作流程"}},[e._v("#")]),e._v(" 生产者工作流程")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://gitee.com/studentgitee/note-picture/raw/master/image-20240110163802715.png",alt:"image-20240110163802715"}})]),e._v(" "),r("p",[e._v("一个生产者客户端由两个线程协调运行，这两个线程分别为 "),r("strong",[e._v("主线程")]),e._v("和 "),r("strong",[e._v("Sender")]),e._v(" 线程 。")]),e._v(" "),r("p",[e._v("在主线程中由 kafkaProducer 创建消息，然后通过可能的拦截器、序列化器和分区器的作用之后缓存到消息累加（RecordAccumulator, 也称为消息收集器）中。")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th"),e._v(" "),r("th",[e._v("作用")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Sender")]),e._v(" "),r("td",[e._v("线程负责从 RecordAccumulator 获取消息并将其发送到 Kafka 中；")])]),e._v(" "),r("tr",[r("td",[e._v("RecordAccumulator")]),e._v(" "),r("td",[e._v("主要用来缓存消息以便 Sender 线程可以批量发送，进而减少网络传输的资源消耗以提升性能。")])])])]),e._v(" "),r("p",[e._v("RecordAccumulator 缓存的大小可以通过生产者客户端参数 "),r("code",[e._v("buffer.memory")]),e._v(" 配置，默认值为 "),r("code",[e._v("33554432B")]),e._v(" ，即 "),r("code",[e._v("32M")]),e._v("。")]),e._v(" "),r("p",[e._v("如果生产者发送消息的速度超过发送到服务器的速度，则会导致生产者空间不足，这个时候 KafkaProducer.send()方法调用要么被阻塞，要么抛出异常，这个取决于参数"),r("code",[e._v("max.block.ms")]),e._v(" 的配置，此参数的默认值为"),r("code",[e._v("60000")]),e._v("，即 "),r("code",[e._v("60 秒")]),e._v("。")]),e._v(" "),r("p",[e._v("主线程中发送过来的消息都会被迫加到 RecordAccumulator 的某个双端队列（ Deque ）中，RecordAccumulator 内部为每个分区都维护了一个双端队列，即 "),r("code",[e._v("Deque<ProducerBatch>")]),e._v("。消息写入缓存时，"),r("strong",[e._v("追加到双端队列的尾部")]),e._v(";")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("提示")])]),e._v(" "),r("p",[e._v("双端队列（Double-ended Queue, 简称 Deque）是一种线性数据结构，它允许在两端进行插入和删除操作。与普通队列不同的是，在普通队列中元素只能从一端（通常是队尾）加入，并从另一端（通常是队头）移除，而在双端队列中，元素既可以添加到队头（front），也可以添加到队尾（rear），同样可以从队头或队尾移除元素。")])]),e._v(" "),r("p",[e._v("Sender 读取消息时，"),r("strong",[e._v("从双端队列的头部读取")]),e._v("。")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("注意")])]),e._v(" "),r("p",[e._v("ProducerBatch 是指一个消息批次；与此同时，会将较小的 ProducerBatch 凑成一个较大 ProducerBatch ，也可以减少网络请求的次数以提升整体的吞吐量。")])]),e._v(" "),r("p",[e._v("ProducerBatch 大小和 batch.size 参数也有着密切的关系。")]),e._v(" "),r("p",[e._v("当一条消息（ProducerRecord ) 流入RecordAccumulator 时，会先寻找与消息分区所对应的双端队列（如果没有则新建），再从这个双端队列的尾部获取一个 ProducerBatch （如果没有则新建），查看ProducerBatch 中是否还可以写入这个 ProducerRecord，如果可以就写入，如果不可以则需要创建一个新的 Producer Batch。在新建ProducerBatch 时评估这条消息的大小是否超过 batch.size 参数大小，如果不超过，那么就以 batch.size参数的大小来创建 ProducerBatch。如果生产者客户端需要向很多分区发送消息， 则可以将"),r("code",[e._v("buffer.memory")]),e._v("参数适当调大以增加整体的吞吐量。")])])}),[],!1,null,null,null);r.default=v.exports}}]);