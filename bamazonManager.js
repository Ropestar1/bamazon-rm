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
  managerPrompts();
});

//function library
function queryProducts() {
  connection.query('SELECT * FROM products', function(err, res) {
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
    managerPrompts();
  });
}

function lowInventoryView() {
  connection.query('SELECT * FROM products WHERE stock_quantity < 5', function(err, res) {
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
    managerPrompts();
  });
}

function addInventoryView() {
  inquirer.prompt([
    { 
      type: 'input', //default type is input if type left out
      message: 'What product would you like to add stock to? Please specify Item ID',
      name: 'productID'
    },
    { 
      type: 'input', //default type is input if type left out
      message: 'How much stock would you like to add?',
      name: 'addedStock'
    },
  ]).then(function(answer) {
    var itemTable = new Table({
          head: ['Item ID', 'Product', 'Department', 'Price', 'Stock Qty'],
          colWidths: [10, 35, 30, 10, 12]
        });
    var query = 'SELECT * FROM products WHERE ?';

    connection.query(query, { item_id: answer.productID }, function(err, res) {
      connection.query(
        "UPDATE products SET ? WHERE ?",
        [
          {
            stock_quantity: res[0].stock_quantity + parseInt(answer.addedStock)
          },
          {
            item_id: answer.productID
          }
        ],
        function(error) {
          if (error) throw error;

          console.log("Stock has been increased.");
          connection.query(query, { item_id: answer.productID }, function(err, res) {
            if (err) throw err;
            itemTable.push(
              [res[0].item_id, res[0].product_name, res[0].department_name,
              res[0].price, res[0].stock_quantity]);

            console.log(itemTable.toString());
            console.log('You added ' + answer.addedStock + ' items to the ' +
              res[0].product_name + ' count.');
            managerPrompts()
          });
      });
    });
  });
}

function addNewProduct() {
  // prompt for info about the item being put up for auction
  inquirer
    .prompt([
      {
        type: "input",
        message: "What item would you like to add?",
        name: "productName"
      },
      {
        type: "input",
        message: "What department does it belong in?",
        name: "departmentName"
      },
      {
        type: "input",
        message: "How much does the item cost? Round to the nearest dollar.",
        name: "priceInput"
      },
      {
        type: "input",
        message: "How many units are in stock?",
        name: "stockInput"
      },
    ])
    .then(function(answer) {
      connection.query(
        "INSERT INTO products SET ?",
        {
          product_name: answer.productName,
          department_name: answer.departmentName,
          price: answer.priceInput,
          stock_quantity: answer.stockInput
        },
        function(err) {
          if (err) throw err;
          console.log("Your auction item was added successfully.");
          managerPrompts();
        }
      );
    });
}

function managerPrompts() {
  var productMessage = 'View Products for Sale';
  var lowInventoryMessage = 'View Low Inventory';
  var addInventoryMessage = 'Add to Inventory';
  var addNewProductMessage = 'Add New Product.';

  inquirer.prompt([
    { 
			type: 'list',
			message: 'Hello, Manager. What would you like to do?',
      choices: [productMessage, lowInventoryMessage, addInventoryMessage, addNewProductMessage],
			name: 'action'
    },
	]).then(function(answer) {
    if (answer.action === productMessage) queryProducts();

    else if (answer.action === lowInventoryMessage) lowInventoryView();

    else if (answer.action === addInventoryMessage) addInventoryView();

    else addNewProduct();
  });
}