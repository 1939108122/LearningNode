const http = require('http')
const fs = require('fs')
const server = http.createServer()
server.on('request', function (req, res) {
  var url = req.url
  if(url === '/')
  {
    fs.readFile('./resource/index.html', function(err, data) {
      if(err)
      {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end('读取文件失败')
      }else{
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end(data)
      }
    })
  }
  if(url === '/luka')
  {
    fs.readFile('./resource/luka.jpg', function(err, data) {
      if(err)
      {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end('读取文件失败')
      }else{
        res.setHeader('Content-Type', 'image/jpeg')
        res.end(data)
      }
    })
  }
})
server.listen(3000, function() {
  console.log('server is runnning!')
})