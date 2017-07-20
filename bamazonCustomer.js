var mysql = require('mysql');
var cli = require('cli-table');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Noix72NfyvPJdkQq',
  database: 'bamazon'
});

connection.connect(function(err) {
  if (err) throw err;
  // console.log(connection)
  console.log('connected as id ' + connection.threadId);
  queryProducts();
  // queryDanceSongs();
});

function queryProducts() {
  var query = connection.query('SELECT * FROM products', function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id + ' | ' + res[i].product_name + ' | ' + res[i].department_name
      	+ ' | ' + res[i].price + ' | ' + res[i].stock_quantity)
    }
    console.log("-----------------------------------");
    console.log(res);
  });

  // logs the actual query being run
  console.log(query.sql);
  connection.end();
}

// function queryDanceSongs(searchTerm) {
//   var query = connection.query("SELECT * FROM songs WHERE genre=?", [searchTerm], function(err, res) {
//     for (var i = 0; i < res.length; i++) {
//       console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
//     }
//   });

//   // logs the actual query being run
//   console.log(query.sql);
//   connection.end();
// }