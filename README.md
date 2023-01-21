//

 ## Getting Started

This repo contains a basic Node and Express app to get you started in constructing an API. To get started, clone this repo and run `yarn` in your terminal at the project root.

## Required Technologies
Your application must make use of the following libraries:
- Postgres for the database
- Node/Express for the application logic
- dotenv from npm for managing environment variables
- db-migrate from npm for migrations
- jsonwebtoken from npm for working with JWTs
- jasmine from npm for testing

## Steps to Completion

### 1. Plan to Meet Requirements

In this repo there is a `REQUIREMENTS.md` document which outlines what this API needs to supply for the frontend, as well as the agreed upon data shapes to be passed between front and backend. This is much like a document you might come across in real life when building or extending an API. 

Your first task is to read the requirements and update the document with the following:
- Determine the RESTful route for each endpoint listed. Add the RESTful route and HTTP verb to the document so that the frontend developer can begin to build their fetch requests.    
**Example**: A SHOW route: 'blogs/:id' [GET] 

- Design the Postgres database tables based off the data shape requirements. Add to the requirements document the database tables and columns being sure to mark foreign keys.   
**Example**: You can format this however you like but these types of information should be provided
Table: Books (id:varchar, title:varchar, author:varchar, published_year:varchar, publisher_id:string[foreign key to publishers table], pages:number)

**NOTE** It is important to remember that there might not be a one to one ratio between data shapes and database tables. Data shapes only outline the structure of objects being passed between frontend and API, the database may need multiple tables to store a single shape. 

### 2.  DB Creation and Migrations

Now that you have the structure of the databse outlined, it is time to create the database and migrations. Add the npm packages dotenv and db-migrate that we used in the course and setup your Postgres database. If you get stuck, you can always revisit the database lesson for a reminder. 

You must also ensure that any sensitive information is hashed with bcrypt. If any passwords are found in plain text in your application it will not pass.

### 3. Models

Create the models for each database table. The methods in each model should map to the endpoints in `REQUIREMENTS.md`. Remember that these models should all have test suites and mocks.

### 4. Express Handlers

Set up the Express handlers to route incoming requests to the correct model method. Make sure that the endpoints you create match up with the enpoints listed in `REQUIREMENTS.md`. Endpoints must have tests and be CORS enabled. 

### 5. JWTs

Add JWT functionality as shown in the course. Make sure that JWTs are required for the routes listed in `REQUIUREMENTS.md`.

### 6. QA and `README.md`

Before submitting, make sure that your project is complete with a `README.md`. Your `README.md` must include instructions for setting up and running your project including how you setup, run, and connect to your database. 

Before submitting your project, spin it up and test each endpoint. If each one responds with data that matches the data shapes from the `REQUIREMENTS.md`, it is ready for submission!


***********************************************************************************************************

# Steps you should folow it to start this project

# you should update .env with your data  
  
  this server is running on port 3030

  and database port 5432


  you  have to download node_modules


# setup and connect to DataBase
  1-download postgres database and set it up
  2- open teminal and type =>> psql -U  followed by your username 
  3- type your password
  4- CREATE DATABASE test_store_front;
  5- CREATE DATABASE dev_store_front;
  6- \c test_store_front   or   \c dev_store_front  to connect to this database
  7- \q to disconnect this database   


# the first step is make sure you have all this packages in package.json
  ## in dependencies
    bcrypt,
    body-parser,
    db-migrate,
    db-migrate-pg,
    dotenv,
    express,
    jsonwebtoken,
    pg,
    ts-node

  ## in devdependencies
   @types/bcrypt,
    @types/express,
    @types/jasmine,
    @types/jsonwebtoken,
    @types/node,
    @types/pg,
    @types/supertest,
    jasmine,
    jasmine-spec-reporter,
    nodemon,
    supertest,
    tsc-watch,
    typescript  

*****************************************************************************************************

## 1- type in terminal   => # db-migrate up

## 2-  to build and test this project run   => # npm run test

## to start this project run => # npm run start

********************************************************************************************************

# products endpoint

## show all products example get 'localhost:3030/products'

## show specific product example get 'localhost:3030/product/:id'
   replace :id with product id number you want to show


## create product example post 'localhost:3030/create_product'
   you should send all product info in req.body and token 

********************************************************************************************************

# user endpoint

## show all users  example get 'localhost:3030/users' 
   send token in request body

## create new user example post 'localhost:3030/user/create' 
   send in request body  firstName , lastName ,password

## show specific user example get 'localhost:3030/user/show/:id' 
   send token in request body 

********************************************************************************************************

# orders endpoint

## create order example post 'localhost:3030/order' 
   send in request body   examlpe => {"user_id":2,"order_status":"active",
   "token":"asdasdasdasdasdas"}

## show specific order example get 'localhost:3030/order/:id'
   replace :id with order id number you want to show 
   send in request body token 
   example =>{
      "token":" sadasdsadasd"
   }

## show all orders get 'localhost:3030/orders'
   and send token in body-request
    example =>{
      "token":" sadasdsadasd"
   }


## add products to order => post 'localhost:3030/orders/:id/products'
   and send token , product_id and quantity in body-request
    example =>{
         "productId":3,
         "quantity":6,
         "token": "asdasa"
   }

**********************************************************************************************************

# DataBase Schema 
  we have 4 tables => users , products , orders , order_products 

## users table 
   we have 4 columns in users table 
   id => serial primary key
   firstname => varchar
   lastname => varchar
   password => varchar

## products table 
   we have 3 columns in products table 
   id => serial primary key
   name => varchar
   price => integer
   
## orders table 
   we have 3 columns in users table 
   id => serial primary key
   user_id => bigint REFERENCES users(id)
   order_status => varchar

## order_products table 
   we have 3 columns in users table 
   id => serial primary key
   order_id => bigint REFERENCES orders(id)
   product_id => bigint REFERENCES product(id)
   quantity => integer