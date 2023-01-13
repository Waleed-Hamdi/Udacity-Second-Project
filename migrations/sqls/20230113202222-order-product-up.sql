/* Replace with your SQL commands */

create table order_products (
    id serial primary key,
    order_id bigint REFERENCES orders(id),
    product_id bigint REFERENCES products(id),
    quantity integer
);

/*select order_id ,product_id ,quantity,user_id from order_products INNER JOIN orders on orders.id=order_products.order_id;*/

