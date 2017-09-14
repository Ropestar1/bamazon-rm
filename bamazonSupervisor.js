var mysql = require('mysql');
var inquirer = require('inquirer');
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
  supervisorPrompts();
});

//function library
function querySalesByDepartment() {
  connection.query(
    'SELECT departments.department_id, departments.department_name, departments.over_head_costs, product_sales '+
    'FROM products '+
    'RIGHT JOIN departments ON departments.department_name = products.department_name '+
    'ORDER BY department_id', function(err, res) {
    // console.log(res);
    var table = new Table({
      head: ['Dept. ID', 'Department', 'Over Head Costs', 'Product Sales'],
      colWidths: [10, 20, 20, 20]
    });

    for (var i = 0; i < res.length; i++) {
      table.push([res[i].department_id, res[i].department_name, res[i].over_head_costs]);
      if (res[i].product_sales == null) {
        table[i].push(0)
      }
      else table[i].push(res[i].product_sales);
    }

    // // UNDER CONSTRUCTION
    // var addColumn = 'SELECT ';
    // addColumn += 'ADD COLUMN total_profit INT(11) ';
    // addColumn += 'AFTER'
    // connection.query(addColumn, function(err, res) {
    //   table.push();

    //   console.log(table.toString());
    //   supervisorPrompts();
    // });
    // // UNDER CONSTRUCTION

    //REMOVE BELOW LINES WHEN I GET ALIAS WORKING  
    console.log(table.toString());
    supervisorPrompts();
  });
}

function addNewDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What department would you like to add?",
        name: "departmentName"
      }, 
      {
        type: "input",
        message: "What is the over head cost for this department?",
        name:"overHeadCost"
      }
    ])
    .then(function(answer) {
      connection.query(
        "INSERT INTO departments SET ?",
        {
          department_name: answer.departmentName,
          over_head_costs: answer.overHeadCost,
        },
        function(err) {
          if (err) throw err;
          console.log("Your department was added successfully.");
          supervisorPrompts();
        }
      );
    }
  );
}

function supervisorPrompts() {
  var viewProductSalesMessage = 'View Product Sales by Department';
  var addNewDepartmentMessage = 'Create New Department';

  inquirer.prompt([
    { 
			type: 'list',
			message: 'Hello, Supervisor. What would you like to do?',
      choices: [viewProductSalesMessage, addNewDepartmentMessage],
			name: 'action'
    },
	]).then(function(answer) {
    if (answer.action === viewProductSalesMessage) querySalesByDepartment();

    else addNewDepartment();
  });
}