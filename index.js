const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3000;
// Postgres読み込み
const connection = require('./database/connection');

function welcomeMessage(){
  var message = "Welcome to CI/CD Kaung Htaik!";
  return message;
}

app.use('/', function (req, res, next) {
  next();
});

app.get('/', function (req, res) {
  res.render("index", {message: welcomeMessage()});
});

app.get('/loginPage', function (req, res) {
  res.render("login");
  res.end();
});

app.post('/auth', function (req, res) {
  userid = req.body.userid;
  password = req.body.password;
  if (userid && password) {
    var query =  {
      text:"SELECT * from m_users WHERE userid = $1 AND password = $2 ",
      values:[userid, password],
    };
    connection.query(query, function (error, results, fields) {
      if (error) {
        console.log('Error Throw Detail >>>>>>>>>> \n' + error);
        res.end();
      }else{
        // データがある場合、
        if (results.rowCount > 0) {
          res.render("mingalarbar", {username: results.rows[0].username});
          res.end();
        } else {
          // エラーメッセージを設定
          req.flash('errorHost', localizeData[language].E0017)
          // ログイン処理呼び出す
          res.redirect('/login');
          res.end();
        }
      }
    })
  }
});
app.listen(PORT, () => console.log(`listening on port: ${PORT}`));