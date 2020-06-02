var mysql = require('mysql');

var con = mysql.createConnection({
  host: "db5000509694.hosting-data.io",
  user: "dbu630992",
  password: "H!lls!d3"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});