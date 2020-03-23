const http = require('http')
// 1 创建server
const server = http.createServer()
// 2 监听 request 事件 设置请求处理函数 
server.on( 'request', function(req, res){
  console.log('收到请求了,请求路径是： ' + req.url)
  // res.write('hello')
  // res.end('hello world')
    var url = req.url
    // if(url === '/')
    //   {
    //     res.end('index page')
    //   }
    //   else if(url ==='/login'){
    //     res.end('login page')
    //   }
    //   else{
    //     res.end('404 not found')
    //   }
    if(url === '/products')
    {
      var products = [
        {
          name: "小米10",
          price: 3999
        },
        {
          name: "iphone11",
          price: 5999
        },
      ]
      res.end( JSON.stringify(products)) // 返回值只能是 字符串和二进制数据 
    }
})
// 3 绑定端口号 启动服务
server.listen(3000, () =>{
  console.log('启动成功！')
})