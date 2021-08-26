-- INSERT INTO users (first_name, last_name, email, password, phone_number, street, city, country, postal_code, isAdmin)
-- VALUES ('Aphason', 'Brillums', 'ap@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 5475387741, '435 Ossignton Av', 'Toronto', 'Canada', 'M5RT48', true),
-- ('Chandi', 'Checkers', 'cha@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 7765321235, '86 Downview Road', 'Calgary', 'Canada', '1MV321', true),
-- ('Ahkila', 'Summers', 'sum@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 6879001201, '133 Charollete Park', 'New York', 'United States', '5TY7W4', true),
-- ('Maxy', 'Cooler', 'mag@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 6475609967, '47 Ogton Drive', 'Montreal', 'Canada', '556HTG', false),
-- ('Archie', 'Hotter', 'wat@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 6475609872, '49 Ogton Drive', 'Montreal', 'Canada', '556HJG', false),
-- ('Condor', 'Phillips', 'art@hotmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 1168890023, '112 Gorey Road', 'Victoria', 'Canada', 'WR4BGH', false),
-- ('Usopp', 'Jenkins', 'uso@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 647677679, '256 Beverley Road', 'Detroit', 'United States', '98GTH6', false),
-- ('Marcus', 'Deandre', 'Marc@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 141333543, ' 67 Grayson District', 'Calgary', 'Canada', 'N5PLY6', false),
-- ('Mitchell', 'Zelpin', 'Mit@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 4565778765, '12 Saint Elijah Boulevard', 'Victoria', 'Canada', 'WGH1GH', false);

-- INSERT INTO cars (photo, car_name, year_created, colour, brand, car_description, price, isSold, owner_id)
-- VALUES ('/images/image.jpeg','honda civic', 2002, 'black', 'Honda', 'slowest car around', 5000, false, 1),
-- ('/images/image.jpeg','lamborghini turbo v3', 2019, 'blue', 'lamborghini', 'sonic fast with added turbo extensions', 1200000, false, 3),
-- ('/images/image.jpeg','maserati fusion', 2015, 'teel', 'maserati', 'perfect car for a friday night date', 200000, false, 3),
-- ('/images/image.jpeg','suburban truck', 2021, 'army camo', 'SUV', '2 ft off the ground solid rock traversing vechile', 180000, false, 5),
-- ('/images/image.jpeg','trailer-g2', 2008, 'white', 'Timmy Trailers', 'good for a camping trip, no refunds included', 5500, false, 9),
-- ('/images/image.jpeg','speed demon 3000 to boat convertible', 2025, 'steel-white', 'f1-racing', 'a car never to thought exist before', 15000050, false, 6),
-- ('/images/image.jpeg','4 wheeler delta', 2004, 'crimson', 'Duggys Durby', 'An old dog with new tricks', 25000, false, 2),
-- ('/images/image.jpeg','tricycle', 2012, 'lucky-red', 'trikes for kids', 'Good for kids ages 3-6', 40, false, 3),
-- ('/images/image.jpeg','1998 Bently', 1998, 'grey', 'Bently', 'A good old relic of the past', 7600, false, 4);

-- INSERT INTO favourites (car_id, user_id)
-- VALUES (1, 1),
-- (5, 2),
-- (1, 3),
-- (2, 4),
-- (3, 5),
-- (7, 6),
-- (7, 7);

INSERT INTO conversations (buyer_id, seller_id, buyer_message_1, buyer_message_2, buyer_message_3, seller_message_1, seller_message_2, seller_message_3)
VALUES (1,3, 'Hello Akhila can i buy your maserati?', 'Ok thank you', 'Got it', 'Sure Aphason', 'No problem more details will be on the way', ':)'),
(2,4, 'Hello Maxy can i buy your 1998 bently?', 'Ok thank you', 'Got it', 'Sure Chandi', 'No problem more details will be on the way', ':)'),
(3,1, 'Hello Aphason nice to talk to you again can i buy your hondacivic?', 'Ok thank you', 'Got it', 'Hey ahkila long time no talk', 'Sure', 'Details will be on the way'),
(6,5, 'Hello Archie I was wondering if your suburben truck is up for sale', 'Sweet i would love to give her a ride down in the canyons', 'Thank you good sir likewise', 'Hey Condor', 'For sure she has been waiting in the garage for years', 'I will send you the details have a good day sir');


-- INSERT INTO messages (message, sender_id, recipient_id, conversation_id)
-- VALUES ('message_1', 2, 4, 2),
-- ('message_2', 6, 5, 4);
