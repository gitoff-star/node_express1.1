node_express1.1

This repository contains a set of test APIs for a shopping cart application built using Node.js, Express.js, and MongoDB.

# #  Table of Contents
Installation. <br>
Usage.<br>
Features.<br>
API Endpoints.<br>
Authentication and Authorization.<br>
Database.<br>
Tests <br>
Contributing <br>
License <br>
Contact <br>
Installation <br>
Clone the repository: git clone https://github.com/gitoff-star/node_express1.1.git <br>
Install dependencies: npm install <br>
Set up MongoDB: Instructions for setting up MongoDB/ <br>
Start the server: npm start <br>
Your API should now be running on http://localhost:3000 <br>
#Usage <br>
To use the shopping cart test APIs, you can make HTTP requests to the specified endpoints. You can use tools like Postman or cURL to test the APIs <br>

# # Features
Add products to the cart <br>
Update the quantity of products in the cart v
Remove products from the cart <br>
Get the list of products in the cart <br>
Clear the entire cart <br>
API Endpoints <br>
POST /api/cart/add: Add a product to the cart. Requires the product ID and quantity in the request body. <br>
PUT /api/cart/update/:productId: Update the quantity of a product in the cart. Requires the product ID in the URL and the updated quantity in the request body. <br>
DELETE /api/cart/remove/:productId: Remove a product from the cart. Requires the product ID in the URL. <br>
GET /api/cart: Get the list of products in the cart. <br>
DELETE /api/cart/clear: Clear the entire cart. <br>
Authentication and Authorization <br>
This API does not require authentication or authorization as it is meant for testing purposes only. In a real-world scenario, you would implement proper authentication and authorization mechanisms. <br>

# # Database
This API uses MongoDB as the database to store the cart data. Make sure you have MongoDB set up and running on your local machine or provide the MongoDB connection string in the configuration. <br>


