DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS messages CASCADE;
DROP TABLE IF EXISTS conversations CASCADE;
DROP TABLE IF EXISTS cars CASCADE;
DROP TABLE IF EXISTS favourites CASCADE;
DROP TABLE IF EXISTS users CASCADE;

<<<<<<< HEAD
=======

>>>>>>> 3bf020f100f6cfa4594fd8410ebedcc428f5c6c3

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  phone_number VARCHAR(255),
  street VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  country VARCHAR(255) NOT NULL,
  postal_code VARCHAR(50) NOT NULL,
  isAdmin BOOLEAN
);



--return a list of cars based on car_id
-- check for number of likes based on car_id

CREATE TABLE cars (
  id SERIAL PRIMARY KEY NOT NULL,
  car_name VARCHAR(255) NOT NULL,
  year_created SMALLINT,
  photo VARCHAR(500),
  colour VARCHAR(50),
  brand  VARCHAR(255) NOT NULL,
  car_description VARCHAR(255) NOT NULL,
  price INTEGER,
  isSold BOOLEAN,
  owner_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE favourites (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  car_id INTEGER REFERENCES cars(id) ON DELETE CASCADE
);

CREATE TABLE conversations (
  id SERIAL PRIMARY KEY,
  sender_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  recipient_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  message VARCHAR(1000) NOT NULL,
  sender_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  recipient_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  conversation_id INTEGER REFERENCES conversations(id) ON DELETE CASCADE,
  created_at TIMESTAMP
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  ordered_at TIMESTAMP,
  car_id INTEGER REFERENCES cars(id) ON DELETE CASCADE,
  buyer_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  conversation_id INTEGER REFERENCES conversations(id) ON DELETE CASCADE
)

-- we dont need to have seller_id because owner_id is already a row in cars
