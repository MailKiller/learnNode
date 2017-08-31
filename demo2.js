var fs = require('fs');

// 同步读取文件
// var data = fs.readFileSync('test.txt');
// console.log(data.toString());

// 异步读取文件
fs.readFile('test1.txt', function (err, data) {
  if (err) {
    console.log('err', err)
    return console.error(err)
  }
  console.log(err.stack)
  console.log(data.toString())
})

console.log('程序结束！');