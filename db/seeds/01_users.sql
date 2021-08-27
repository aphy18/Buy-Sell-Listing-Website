INSERT INTO users (first_name, last_name, email, password, phone_number, street, city, country, postal_code, isAdmin)
VALUES ('Aphason', 'Brillums', 'ap@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 15046366808, '435 Ossignton Av', 'Toronto', 'Canada', 'M5RT48', true),
('Chandi', 'Checkers', 'cha@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 15046366808, '86 Downview Road', 'Calgary', 'Canada', '1MV321', true),
('Ahkila', 'Summers', 'sum@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 15046366808, '133 Charollete Park', 'New York', 'United States', '5TY7W4', true),
('Maxy', 'Cooler', 'mag@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 15046366808, '47 Ogton Drive', 'Montreal', 'Canada', '556HTG', false),
('Archie', 'Hotter', 'wat@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 15046366808, '49 Ogton Drive', 'Montreal', 'Canada', '556HJG', false),
('Condor', 'Phillips', 'art@hotmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 15046366808, '112 Gorey Road', 'Victoria', 'Canada', 'WR4BGH', false),
('Usopp', 'Jenkins', 'uso@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 15046366808, '256 Beverley Road', 'Detroit', 'United States', '98GTH6', false),
('Marcus', 'Deandre', 'Marc@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 15046366808, ' 67 Grayson District', 'Calgary', 'Canada', 'N5PLY6', false),
('Mitchell', 'Zelpin', 'Mit@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 15046366808, '12 Saint Elijah Boulevard', 'Victoria', 'Canada', 'WGH1GH', false);

INSERT INTO cars (photo, car_name, year_created, colour, brand, car_description, price, isSold, owner_id)
VALUES ('/images/1.jpg','honda civic', 2002, 'black', 'Honda', 'slowest car around', 5000, false, 1),
('/images/2.jpg','lamborghini turbo v3', 2019, 'blue', 'lamborghini', 'sonic fast with added turbo extensions', 1200000, false, 3),
('/images/3.jpg','maserati fusion', 2015, 'teel', 'maserati', 'perfect car for a friday night date', 200000, false, 3),
('/images/4.jpeg','suburban truck', 2021, 'army camo', 'SUV', '2 ft off the ground solid rock traversing vechile', 180000, false, 5),
('/images/5.jpg','trailer-g2', 2008, 'white', 'Timmy Trailers', 'good for a camping trip, no refunds included', 5500, false, 9),
('/images/6.jpg','speed demon 3000 to boat convertible', 2025, 'steel-white', 'f1-racing', 'a car never to thought exist before', 15000050, false, 6),
('/images/7.jpg','4 wheeler delta', 2004, 'crimson', 'Duggys Durby', 'An old dog with new tricks', 25000, false, 2),
('/images/image.jpeg','tricycle', 2012, 'lucky-red', 'trikes for kids', 'Good for kids ages 3-6', 40, false, 3),
('/images/image.jpeg','1998 Bently', 1998, 'grey', 'Bently', 'A good old relic of the past', 7600, false, 4);

INSERT INTO favourites (car_id, user_id)
VALUES (1, 1),
(5, 2),
(1, 3),
(2, 4),
(3, 5),
(7, 6),
(7, 7);

INSERT INTO messages (message, sender_id, recipient_id, created_at)
VALUES ('Hello Akhila can i buy your maserati?', 1, 3, '2008-11-11 7:30:15'),
('Sure', 3, 1, '2008-11-11 8:00:02'),
('Ok sweet thanks', 1, 3, '2020-11-11 8:11:24'),
('No problem', 3, 1, '2020-11-11 8:28:30'),
('Hello Archie how was your day', 4, 5, '2020-9-4 13:15:30'),
('Good Maxie thanks for asking', 5, 4, '2020-9-4 14:10:21'),
('Nice weather we are having', 4, 5, '2020-9-4 14:20:00'),
('Yeah, great weather for selling cars', 5, 4, '2020-9-4 15:55:10'),
('Yayyyy', 4, 5, '2020-9-4 16:00:00');