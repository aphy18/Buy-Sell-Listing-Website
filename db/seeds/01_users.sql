INSERT INTO users (first_name, last_name, email, password, phone_number, street, city, country, postal_code, isAdmin)
VALUES ('Aphason', 'Brillums', 'ap@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 5475387741, '435 Ossignton Av', 'Toronto', 'Canada', 'M5RT48', true),
('Chandi', 'Checkers', 'cha@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 7765321235, '86 Downview Road', 'Calgary', 'Canada', '1MV321', true),
('Ahkila', 'Summers', 'sum@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 6879001201, '133 Charollete Park', 'New York', 'United States', '5TY7W4', true),
('Maxy', 'Cooler', 'mag@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 6475609967, '47 Ogton Drive', 'Montreal', 'Canada', '556HTG', false),
('Archie', 'Hotter', 'wat@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 6475609872, '49 Ogton Drive', 'Montreal', 'Canada', '556HJG', false),
('Condor', 'Phillips', 'art@hotmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 1168890023, '112 Gorey Road', 'Victoria', 'Canada', 'WR4BGH', false),
('Usopp', 'Jenkins', 'uso@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 647677679, '256 Beverley Road', 'Detroit', 'United States', '98GTH6', false),
('Marcus', 'Deandre', 'Marc@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 141333543, ' 67 Grayson District', 'Calgary', 'Canada', 'N5PLY6', false),
('Mitchell', 'Zelpin', 'Mit@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 4565778765, '12 Saint Elijah Boulevard', 'Victoria', 'Canada', 'WGH1GH', false);

INSERT INTO cars (photo, car_name, year_created, colour, brand, car_description, price, isSold, owner_id)
VALUES ('/images/1.jpg','honda civic', 2002, 'black', 'Honda', 'slowest car around', 5000, false, NULL),
('/images/2.jpg','lamborghini turbo v3', 2019, 'blue', 'lamborghini', 'sonic fast with added turbo extensions', 1200000, false, NULL),
('/images/3.jpg','maserati fusion', 2015, 'teel', 'maserati', 'perfect car for a friday night date', 200000, false, NULL),
('/images/4.jpeg','suburban truck', 2021, 'army camo', 'SUV', '2 ft off the ground solid rock traversing vechile', 180000, false, NULL),
('/images/5.jpg','trailer-g2', 2008, 'white', 'Timmy Trailers', 'good for a camping trip, no refunds included', 5500, false, NULL),
('/images/6.jpg','speed demon 3000 to boat convertible', 2025, 'steel-white', 'f1-racing', 'a car never to thought exist before', 15000050, false, NULL),
('/images/7.jpg','4 wheeler delta', 2004, 'crimson', 'Duggys Durby', 'An old dog with new tricks', 25000, false, NULL),
('/images/image.jpeg','tricycle', 2012, 'lucky-red', 'trikes for kids', 'Good for kids ages 3-6', 40, false, NULL),
('/images/image.jpeg','1998 Bently', 1998, 'grey', 'Bently', 'A good old relic of the past', 7600, false, NULL);

INSERT INTO favourites (car_id, user_id)
VALUES (1, 1),
(5, 2),
(1, 3),
(2, 4),
(3, 5),
(7, 6),
(7, 7);

INSERT INTO conversations (sender_id, recipient_id)
VALUES (1,3),
(2,4),
(2,8),
(6,5);


INSERT INTO messages (message, sender_id, recipient_id, conversation_id)
VALUES ('message_1', 2, 4, 2),
('message_2', 6, 5, 4);
