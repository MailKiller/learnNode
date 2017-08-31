var fs = require('fs');
var data = '';

// 创建可读流
var readerStream = fs.createReadStream('test.txt');

// 设置编码格式为UTF-8
readerStream.setEncoding('UTF8');

// 处理流事件 data end error
readerStream.on('data', function (trunk) {
  data += trunk;
  console.log(data)
});

readerStream.on('end', function () {
  console.log(data)
});

readerStream.on('error', function (err) {
  console.log(err.stack)
});

console.log('程序执行完毕！')