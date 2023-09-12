-- Inserting a property with basic information
INSERT INTO properties (title, description, city, postal_code, rooms, baths, size, price, type, status, house_type, publish_date)
VALUES ('Cozy Apartment in Downtown', 'A comfortable apartment with a great view.', 'New York', '10001', 2, 1, 800.0, 1500.0, 'Alquiler', true, 'Piso', '2023-09-12');

-- Inserting a property with user profiles
INSERT INTO properties (title, description, city, postal_code, rooms, baths, size, price, type, status, house_type, publish_date)
VALUES ('Spacious Family Home', 'Perfect for a family with kids.', 'Los Angeles', '90001', 3, 2, 2000.0, 350000.0, 'Venta', true, 'Casa', '2023-09-12');

-- Inserting a property with images
INSERT INTO properties (title, description, city, postal_code, rooms, baths, size, price, type, status, house_type, publish_date)
VALUES ('Luxury Villa with Pool', 'A luxurious villa with a private pool.', 'Miami', '33101', 4, 4, 3000.0, 750000.0, 'Venta', true, 'Casa', '2023-09-12');

-- Inserting a property with both user profiles and images
INSERT INTO properties (title, description, city, postal_code, rooms, baths, size, price, type, status, house_type, publish_date)
VALUES ('Modern Loft in the Arts District', 'An artistic loft in a vibrant neighborhood.', 'Los Angeles', '90002', 1, 1, 1000.0, 200000.0, 'Venta', true, 'Piso', '2023-09-12');

-- Inserting a property with default modification date
INSERT INTO properties (title, description, city, postal_code, rooms, baths, size, price, type, status, house_type, publish_date)
VALUES ('Country Cottage', 'A charming cottage in the countryside.', 'Countryside', '12345', 2, 1, 1200.0, 1200.0, 'Alquiler', true, 'Casa', '2023-09-12');

-- Inserting both roles
INSERT INTO roles (idrole, role) VALUES (1, 'ROLE_ADMIN'),(2, 'ROLE_USER');