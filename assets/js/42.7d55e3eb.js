(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{372:function(t,e,s){"use strict";s.r(e);var a=s(8),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"spring-ioc-inversion-of-control"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring-ioc-inversion-of-control"}},[t._v("#")]),t._v(" Spring IOC（inversion of control）")]),t._v(" "),e("h2",{attrs:{id:"ioc主要实现策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ioc主要实现策略"}},[t._v("#")]),t._v(" IoC主要实现策略")]),t._v(" "),e("h3",{attrs:{id:"依赖注入-dependency-injection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#依赖注入-dependency-injection"}},[t._v("#")]),t._v(" 依赖注入（Dependency Injection）")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("注入方式")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("构造器注入(Constructor Injection)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("基于构造函数的 DI 是通过容器调用构造函数来实现的，构造函数具有 参数的数目，每个参数表示一个依赖项。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Setter注入(Setter Injection)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("基于 Setter 的 DI 是通过容器调用 setter 方法完成的 调用无参数构造函数或无参数工厂方法后的 bean 到 实例化你的 bean")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("属性注入(Parameter Injection)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("接口注入(Interface Injection)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),e("p",[e("strong",[t._v("构造器注入（Constructor Injection）")]),t._v("：依赖通过构造函数传递给对象。")]),t._v(" "),e("h4",{attrs:{id:"构造器注入-constructor-injection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构造器注入-constructor-injection"}},[t._v("#")]),t._v(" 构造器注入(Constructor Injection)")]),t._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SimpleMovieLister")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SimpleMovieLister 依赖于 MovieFinder")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MovieFinder")]),t._v(" movieFinder"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一个构造函数，以便 Spring 容器可以注入一个 MovieFinder")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SimpleMovieLister")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MovieFinder")]),t._v(" movieFinder"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("movieFinder "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" movieFinder"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 实际使用注入的 MovieFinder 的业务逻辑被省略了...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br")])]),e("h4",{attrs:{id:"setter注入-setter-injection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setter注入-setter-injection"}},[t._v("#")]),t._v(" Setter注入(Setter Injection)")]),t._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SimpleMovieLister")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SimpleMovieLister 有一个对 MovieFinder 的依赖")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MovieFinder")]),t._v(" movieFinder"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一个 setter 方法，以便 Spring 容器可以注入一个 MovieFinder")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setMovieFinder")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MovieFinder")]),t._v(" movieFinder"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("movieFinder "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" movieFinder"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 实际使用注入的 MovieFinder 的业务逻辑被省略...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br")])]),e("h3",{attrs:{id:"服务定位器模式-service-locator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务定位器模式-service-locator"}},[t._v("#")]),t._v(" 服务定位器模式（Service Locator）")]),t._v(" "),e("ul",[e("li",[t._v("服务定位器是一个中央注册表，对象通过它来获取依赖。这种方式与DI不同，因为它不是通过推送依赖，而是通过拉取依赖。")]),t._v(" "),e("li",[t._v("通常通过JNDI这种技术获取Java EE的组件")])]),t._v(" "),e("h3",{attrs:{id:"上下文依赖查找-contextual-dependency-lookup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#上下文依赖查找-contextual-dependency-lookup"}},[t._v("#")]),t._v(" 上下文依赖查找（Contextual Dependency Lookup）")]),t._v(" "),e("ul",[e("li",[t._v("对象通过某种上下文环境查找其依赖，这通常是通过某种注册表或配置文件实现的。")])]),t._v(" "),e("h3",{attrs:{id:"模板方法模式-template-method-pattern"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模板方法模式-template-method-pattern"}},[t._v("#")]),t._v(" 模板方法模式（Template Method Pattern）")]),t._v(" "),e("ul",[e("li",[t._v("在这种模式中，一个抽象类定义了执行算法的模板。子类可以覆盖算法的某些步骤而不改变算法的结构。")])]),t._v(" "),e("h2",{attrs:{id:"依赖查找-vs-依赖注入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#依赖查找-vs-依赖注入"}},[t._v("#")]),t._v(" 依赖查找 VS 依赖注入")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("依赖处理")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("实现便利性")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("代码侵入性")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("API依赖性")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("可读性")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("依赖查找")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("主动获取")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("相对繁琐")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("侵入业务逻辑")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("依赖容器API")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("良好")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("依赖注入")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("被动提供")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("相对便利")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("低侵入性")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("不依赖容器API")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("一般")])])])]),t._v(" "),e("h3",{attrs:{id:"依赖查找-dependency-lookup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#依赖查找-dependency-lookup"}},[t._v("#")]),t._v(" 依赖查找（Dependency Lookup）")]),t._v(" "),e("p",[t._v("依赖查找是一种设计模式，其中一个对象负责从某个注册中心、服务定位器或容器中主动查找它所需的依赖。这种方式要求组件知道如何查找它们的依赖项，通常通过特定的查找机制或服务定位器模式来实现。")]),t._v(" "),e("h3",{attrs:{id:"依赖注入-dependency-injection-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#依赖注入-dependency-injection-2"}},[t._v("#")]),t._v(" 依赖注入（Dependency Injection）")]),t._v(" "),e("p",[t._v("依赖注入是一种设计模式，其中组件的依赖项不是由组件本身查找，而是由外部容器或框架在创建组件时注入。这种方式允许组件被动地接收它们的依赖项，通常通过构造函数、属性或方法注入。")]),t._v(" "),e("h2",{attrs:{id:"spring-ioc的依赖查找"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring-ioc的依赖查找"}},[t._v("#")]),t._v(" Spring IOC的依赖查找")]),t._v(" "),e("h2",{attrs:{id:"spring-ioc依赖注入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring-ioc依赖注入"}},[t._v("#")]),t._v(" Spring IOC依赖注入")])])}),[],!1,null,null,null);e.default=n.exports}}]);