var mysql = require('mysql');
var inquirer = require('inquirer');
// var colors = require('colors');
var Table = require('cli-table');

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
});

//function library
function queryProducts() {
  connection.query('SELECT item_id, product_name, department_name, ' +
    'price, stock_quantity FROM products', function(err, res) {
    var table = new Table({
      head: ['Item ID', 'Product', 'Department', 'Price', 'Stock Qty'],
      colWidths: [10, 35, 30, 10, 12]
    });

    for (var i = 0; i < res.length; i++) {
      table.push(
        [res[i].item_id, res[i].product_name, res[i].department_name,
        res[i].price, res[i].stock_quantity]);
    }

    console.log(table.toString());
    customerPrompts();
  });
}

function customerPrompts() {
  inquirer.prompt([
    { 
			type: 'input', //default type is input if type left out
			message: 'What product item would you like to purchase? Please specify Item ID',
			name: 'productID'
    },
    { 
      type: 'input', //default type is input if type left out
      message: 'How many would you like to purchase?',
      name: 'quantityToBuy'
    }
	]).then(function(answer) {
    var query = "SELECT * FROM products WHERE ?";
    connection.query(query, { item_id: answer.productID }, function(err, res) {
      if (err) throw err;

      if (parseInt(answer.quantityToBuy) > res[0].stock_quantity) {
        console.log('I\'m sorry, but we don\'t have that many in stock. Please ' +
        'select a new amount less than the Stock Qty.');
        customerPrompts();
      }
      else {
        var itemTable = new Table({
          head: ['Item ID', 'Product', 'Department', 'Price', 'Stock Qty'],
          colWidths: [10, 35, 30, 10, 12]
        });

        var quantityPurchased = parseInt(answer.quantityToBuy);
        var stockReduction = res[0].stock_quantity - quantityPurchased;
        var totalCost = answer.quantityToBuy * res[0].price;
        var productSales = res[0].product_sales + totalCost;

        connection.query(
          "UPDATE products SET ? WHERE ?",
          [
            {
              stock_quantity: stockReduction,
              product_sales: productSales
            },
            {
              item_id: answer.productID,
              item_id: answer.productID
            }
          ],
          function(error) {
            if (error) throw error;
            
            console.log("Item purchased successfully!");
            connection.query(query, { item_id: answer.productID }, function(err, res) {
              if (err) throw err;
              itemTable.push(
              [res[0].item_id, res[0].product_name, res[0].department_name,
              res[0].price, res[0].stock_quantity]);

              console.log(itemTable.toString());
              console.log('You\'re total comes out to be $' + totalCost.toString() +
                '\nThank you for shopping at bamazon!')
              connection.end();
            });
          }
        );
      }      
    });
  });
}