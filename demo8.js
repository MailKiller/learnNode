var fs = require('fs');
var zlib = require('zlib');

// 将test.txt.gz文件解压到test2.txt
fs.createReadStream('test.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('test2.txt'));

console.log('文件解压完成！');