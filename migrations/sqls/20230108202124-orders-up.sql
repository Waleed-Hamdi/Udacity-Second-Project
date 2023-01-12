/* Replace with your SQL commands */

create table orders (
    id serial primary key,
    product_id  bigint REFERENCES products(id),
    quantity integer,
    user_id bigint REFERENCES users(id),
    order_status varchar(50)
);
