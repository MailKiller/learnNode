var http = require('http');
var querystring = require('querystring');
var util = require('util');

var postHTML = 
  '<html><head><meta charset="utf-8"><title>Node.js 实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  '网站名： <input name="name"><br>' +
  '网站 URL： <input name="url"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';

http.createServer(function (req, res) {
  var body = '';
  req.on('data', function (trunk) {
    body += trunk;
  });
  req.on('end', function () {
    body = querystring.parse(body);
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
    if (body.name && body.url) {
      // 输出提交的数据
      res.write('网站名：' + body.name);
      res.write('<br>');
      res.write('网站URL：' + body.url);
      res.write(util.inspect(body));
    } else {
      res.write(postHTML);
    }
    res.end();
  })
}).listen(3000);