DROP TABLE IF EXISTS messages CASCADE;
DROP TABLE IF EXISTS cars CASCADE;
DROP TABLE IF EXISTS favourites CASCADE;
DROP TABLE IF EXISTS users CASCADE;

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

CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  message VARCHAR(1000),
  sender_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  recipient_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP
);



-- we dont need to have seller_id because owner_id is already a row in cars
