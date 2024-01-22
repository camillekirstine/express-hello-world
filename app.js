const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
require('dotenv').config();

const connection = mysql.createConnection({
  host    : process.env.MYSQL_HOST,
  port    : process.env.MYSQL_PORT,
  user    : process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  dialect : mysql,
  connectTimeout: 30000,
});

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

connection.connect(function(err) {
  if (err) throw err;
  console.log('connected');
});

app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res) {
  res.send('hello dumbass')
});


server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

