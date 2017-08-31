var fs = require('fs');
var zlib = require('zlib');

// 压缩test.txt文件为test.txt.gz
fs.createReadStream('test.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('test.txt.gz'));

console.log('文件压缩完成！')