var express = require('express');
var path = require('path');
var app = new express();
var api = require('./routes/api');
var hbs = require('hbs');

var multer = require('multer');

var uploading = multer({
  dest: __dirname + './public/uploads/',
  // 设定限制，每次最多上传1个文件，文件大小不超过1MB
  limits: {fileSize: 1000000, files:1},
})

// 加载数据模块
var blogEngine = require('./blog');

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.engine('html', hbs.__express);

// app.use(express.favicon());
// app.use(express.logger('dev'));
// app.use(express.bodyParser());
// app.use(express.methodOverride());
// app.use(app.router);

app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', function(req, res) {
//    res.send('Hello World');
// });

// app.get('/', function(req, res){
//   var body = 'Hello World';
//   res.setHeader('Content-Type', 'text/plain');
//   res.setHeader('Content-Length', body.length);
//   res.end(body);
// });

app.get('/', function(req, res) {
  res.render('index',{title:"最近文章", entries:blogEngine.getBlogEntries()});
});
 
app.get('/about', function(req, res) {
  res.render('about', {title:"自我介绍"});
});
 
app.get('/article/:id', function(req, res) {
  var entry = blogEngine.getBlogEntry(req.params.id);
  res.render('article',{title:entry.title, blog:entry});
});

app.post('/upload', uploading, function(req, res) {

})

app.get('/api', api.index);

app.listen(app.get('port'));