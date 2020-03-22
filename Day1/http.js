const http = require('http')
const server = http.createServer()
// 发送请求 接收请求 处理请求 反馈（发送响应）
server.on('request', function (req, res) {
    console.log("收到客户端请求")
    res.write("hello")
    res.end()
})
server.listen(3000, function() {
    console.log("服务器启动成功")
})