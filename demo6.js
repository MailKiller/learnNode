var fs = require('fs');

// 创建一个可读流
var readerStream = fs.createReadStream('test.txt');

// 创建一个可写流
var writerStream = fs.createWriteStream('output1.txt');

readerStream.pipe(writerStream);

console.log('程序结束！');