## bamazon-rm
### bamazon homework week 7 Instructions for Customers:

1. Run the schema.sql file to start the database.
2. User should open Terminal and navigate to where this repo was cloned.
3. In Terminal, type in "npm install" to install all of the packages needed.
4. Once installed, type in "node bamazonCustomer.js" to begin the CLI application for customers.
5. A table should populate in your Terminal window. If the table looks broken, resize your Terminal window to accommodate the entire table.
6. The User is prompted to type in the item id number they want to purchase, then the quantity they want to purchase.
7. If the quantity the user wants to purchase is more than the quantity in stock, a message displays explaining that the purchase can't proceed, then redirects the User to try again.
8. If the quantity the user wants to purchase is below the stock quantity, the program deducts the User's purchase from the stock quantity and displays the updated information and the total cost of the transaction.
9. Program should self terminate after an order has been placed, but if not, press CTRL-C to end the program.

Link to download the video for the basicCustomer.js (https://github.com/Ropestar1/bamazon-rm/blob/master/walkthroughs/bamazonCustomer-rm.mov)

### bamazon homework week 7 Instructions for Managers:

1. See steps 1-3 In bamazon Customer section for initial setup.
2. In Terminal, type in "node bamazonManager.js" to begin the CLI application for managers.
3. Chooose what you want to do from the list:
..* View Products for Sale: Displays a table with items for sale.
..* View Low Inventory: Displays a table showing inventory with less than 5 stock quantity.
..* Add to Inventory: Allows Manager to add to inventory of existing products for sale.
..* Add New Product: Adds a new product to the items available for sale.

Link to download the video for the basicManager.js (https://github.com/Ropestar1/bamazon-rm/blob/master/walkthroughs/bamazonManager-rm.mov)
