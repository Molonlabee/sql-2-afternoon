//PRACTICE JOINS
1.
SELECT * FROM invoice i
JOIN invoice_line il ON il.invoice_id = i.invoice_id
WHERE il.unit_price > 0.99;
2.
SELECT i.invoice_date, c.first_name, c.last_name, i.total
FROM invoice i
JOIN customer c ON i.customer_id = c.customer_id;
3.
SELECT customer.first_name, customer.last_name, employee.first_name, employee.last_name
FROM customer 
JOIN employee ON customer.support_rep_id = employee.employee_id;
4.
SELECT album.title, artist.name
FROM album 
JOIN artist ON album.artist_id = artist.artist_id;
5.
SELECT playlist_track.track_id
FROM playlist_track 
JOIN playlist ON playlist.playlist_id = playlist_track.playlist_id
WHERE playlist.name = 'Music';
6.
SELECT t.name
FROM track t
JOIN playlist_track pt ON pt.track_id = t.track_id
WHERE pt.playlist_id = 5;
7.
SELECT t.name, p.name
FROM track t
JOIN playlist_track pt ON t.track_id = pt.track_id
JOIN playlist p ON pt.playlist_id = p.playlist_id;
8.
SELECT t.name, a.title
FROM track t
JOIN album a ON t.album_id = a.album_id
JOIN genre g ON g.genre_id = t.genre_id
WHERE g.name = 'Alternative & Punk';

//PRACTICE NESTED QUERIES
1.
SELECT * FROM invoice
WHERE invoice_id IN ( 
  SELECT invoice_id FROM invoice_line WHERE unit_price > 0.99 
);
2.
SELECT * FROM playlist_track
WHERE playlist_id IN ( 
SELECT playlist_id FROM playlist WHERE name = 'Music' 
);
3.
SELECT name FROM track
WHERE track_id IN ( 
    SELECT track_id FROM playlist_track WHERE playlist_id = 5 
);
4.
SELECT * FROM track
WHERE genre_id IN ( 
    SELECT genre_id FROM genre WHERE name = 'Comedy' 
);
5.
SELECT * FROM track
WHERE album_id IN ( 
    SELECT album_id FROM album WHERE title = 'Fireball' 
);
6. 
SELECT * FROM track
WHERE album_id IN ( 
  SELECT album_id FROM album WHERE artist_id IN ( 
    SELECT artist_id FROM artist WHERE name = 'Queen'
  )
);

//PRACTICE UPDATING ROW
1.
UPDATE customer
SET fax = null
WHERE fax IS NOT null;
2.
UPDATE customer
SET company = 'Self'
WHERE company IS null;
3.
UPDATE customer 
SET last_name = 'Thompson' 
WHERE first_name = 'Julia' AND last_name = 'Barnett';
4.
UPDATE customer
SET support_rep_id = 4
WHERE email = 'luisrojas@yahoo.cl';
5.
UPDATE track
SET composer = 'The darkness around us'
WHERE genre_id = ( SELECT genre_id FROM genre WHERE name = 'Metal' )
AND composer IS null;

//GROUP BY
1.
SELECT COUNT(*), g.name
FROM track t
JOIN genre g ON t.genre_id = g.genre_id
GROUP BY g.name;
2.
SELECT COUNT(*), g.name
FROM track t
JOIN genre g ON g.genre_id = t.genre_id
WHERE g.name = 'Pop' OR g.name = 'Rock'
GROUP BY g.name;
3.
SELECT ar.name, COUNT(*)
FROM album al
JOIN artist ar ON ar.artist_id = al.artist_id
GROUP BY ar.name;


//USING DISTINCT
1.
SELECT DISTINCT composer
FROM track;
2.
SELECT DISTINCT billing_postal_code
FROM invoice;
3.
SELECT DISTINCT company
FROM customer;

//DELETE ROW
1.
DELETE 
FROM practice_delete 
WHERE type = 'bronze';
2.
DELETE 
FROM practice_delete 
WHERE type = 'bronze';
3.
DELETE 
FROM practice_delete 
WHERE type = 'silver';
4.
DELETE 
FROM practice_delete 
WHERE value = 150;

//E.COMMERCE SIMULATION
1.
CREATE TABLE users(users_id SERIAL PRIMARY KEY,
  name varchar(20) unique not null,
  email varchar(20) unique not null
);
INSERT INTO users
(name, email)
VALUES
(Bob, bob@dev.com),
(Max, max@dev.com),
(Jax, jax@dev.com);

2.
  CREATE TABLE products(products_id SERIAL PRIMARY KEY,
    name varchar(20),
    price decimal 
  );
INSERT INTO products
(name, price)
VALUES
(soda, 1.50),
(chips, 2.00),
(candy, 3.25);
3.

CREATE TABLE orders(
users_id  INT refrence users(users_id),
products_id INT refrence products(products_id)
);
INSERT INTO orders
(user_id, products_id)
VALUES
(1, 2),
(3, 4),
(5, 6);

/////////////////////////
SELECT * FROM orders
WHERE users_id = 1;

/////////////////////////
SELECT * FROM orders;

////////////////////////
SELECT 
  total sum
FROM 
  users
WHERE 
  users_id = 1;

