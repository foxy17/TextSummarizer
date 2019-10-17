const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
//init app
const app = express();
app.use(express.static(path.join(__dirname, '/css')));
app.use(express.static(path.join(__dirname, '/javascripts')));
app.use(express.static(path.join(__dirname, '')));

//body parser
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.json());

//load view engine
app.set('views', [path.join(__dirname, 'views'), path.join(__dirname, 'views/video')]);
app.set('view engine', 'ejs');

app.use('/', require('./routes/index.js'));

app.listen( process.env.PORT|| 3000, function() {
  console.log('Server started on port 3000...' + process.env.PORT)
});
