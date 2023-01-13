# API Requirements
<!-- The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.  -->

## API Endpoints
#### Products
- Index  => get 'localhost:3030/products'

- Show   => get 'localhost:3030/product/:id'

- Create [token required] =>   post 'localhost:3030/create_product'
                               you should send all product info in req.body and token

                                example =>{
                                    "name":"",
                                    "price":,
                                    "token":""
                                }


- [OPTIONAL] Top 5 most popular products 
- [OPTIONAL] Products by category (args: product category)

#### Users
- Index [token required]  =>  get 'localhost:3030/users' 
                                 send token in request body

                                 example {
                                    "token":""
                                 }

- Show [token required]=>      get 'localhost:3030/user/show'
                                send in request body id  and token

                                example {
                                    "id": 
                                    "token":""
                                 }



- Create N[token required] => post 'localhost:3030/user/create' 
                                send in request body  firstName , lastName ,password

                                example {
                                    "firstName":"",
                                    "lastName":"", 
                                    "password":""
                                 }


#### Orders
- Current Order by user (args: user id)[token required]
        =>get 'localhost:3030/order/:id'


- [OPTIONAL] Completed Orders by user (args: user id)[token required]

## Data Shapes
#### Product
-  id
- name
- price
- [OPTIONAL] category

#### User
- id
- firstName
- lastName
- password

#### Orders
- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)

