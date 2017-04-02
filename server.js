var express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  api = require('./routes/api');
var app = express();

// view engine
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
//
app.use(express.static(path.join(__dirname, 'dist')));
// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// cors
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});

// api
app.use('/api/v1/', api);

// render index page
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(3000, function () {
    console.log('Server started on port 3000...');
});
