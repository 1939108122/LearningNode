# LearningNode
node.js不是一门语言， 不是库，不是框架 ， 是一个JavaScript运行时环境，简单来说可以解析和执行JavaScript代码
现在的JavaScript 可以完全脱离浏览器来运行， 一切归功于：node.js
ECMAScript + BOM + DOM = js
Node 中的JavaScript 没有 BOM DOM 
# 在Node这个JavaScript执行环境中 为JavaScript提供了一些服务器级别的操作API
1. 文件读写
2. 网络服务的构建 
3. 网络通信
4. http服务器等处理
Node.js 使用事件驱动（event-driven），无阻塞IO（non-blocking） （异步），轻量且高效。<=（特性）
构建于Chrome的 V8引擎之上
 代码只是具有特定格式的字符串而已
 引擎可以认识他，帮你去解析和执行
 Google Chrome的V8的引擎是目前公认的解析执行js速度最快的

Node.js 可以做什么
1 web服务器后台 
2 命令行工具（ npm git hexo ）