-- Inserting both roles
INSERT INTO roles (idrole, role) VALUES (1, 'ROLE_ADMIN'),(2, 'ROLE_USER');

INSERT INTO users (status, iduser, mail, password) VALUES 
(true, 1, 'admin@nesting.com', '$2a$12$yIi.e/Dv/aJC6D7KNjVz/O3JAenUSF2n0I/c52Tb3xq6SF1HsRcLW'),
(true, 2, 'juan.perez@gmail.com', '$2a$12$Gb4yKjA1sAhh8TAWE2beTudwFrdYcX9osoYZzVyypiBnfiQDLGhV.'),
(true, 3, 'ana.garcia@yahoo.es', '$2a$12$WYGHiNAszcko0FBf3cSj.epOR9W7acTgKNtfKyvyKYgBabGupkcNG'),
(true, 4, 'carlos.lopez@hotmail.com', '$2a$12$7N6XbfDy/ft12h3m.wCfneL7UOaF6mFzWlbyvaF7A3SDYy.nazP2K'),
(true, 5, 'marta.sanchez@outlook.com', '$2a$12$yz4g6kZ9WKtPGn8/HRyHYuCOqBtSWMb7K7rTq8EN2YKhzqFvG9DjW'),
(true, 6, 'pablo.martin@gmail.com', '$2a$12$2gNYYnxLBfNRJ1zAbIGdSe1ozm9lUUV6UvV4aRcQV5rgMB.4hfSVu'),
(true, 7, 'laura.gomez@yahoo.es', '$2a$12$LlPwBvm5dAdcn2oHM7rBBeDzm58MaKR/jDTB9enHUOj5dai5Q1cn2'),
(true, 8, 'sergio.fernandez@hotmail.com', '$2a$12$Z0yKpwxoZatmR1InJGFp7.p9fSvsoLZw7GrA2PTTJgF2dWCVzDDJe'),
(true, 9, 'clara.diaz@outlook.com', '$2a$12$Rp9kHcV5u/6vlGhi2uBwrOc.HVx8NfWUdjJH1s4wVqLPTO/f1u.zC'),
(true, 10, 'adrian.ruiz@gmail.com', '$2a$12$uEwjqc2wQl8U7dH8SM2bNOQbcTox0wZ3Qybn6eUoqGQtkX6ehVFnG');


INSERT INTO users_profiles (address, lastname, name, user_id) VALUES 
('C/Admin', 'Admin', 'Admin', 1),
('C/Gran Vía, 123', 'Pérez', 'Juan', 2),
('C/Calle Real, 45', 'García', 'Ana', 3),
('C/Calle Mayor, 67', 'López', 'Carlos', 4),
('C/Paseo del Prado, 89', 'Sánchez', 'Marta', 5),
('C/Calle Serrano, 34', 'Martín', 'Pablo', 6),
('C/Avenida Diagonal, 56', 'Gómez', 'Laura', 7),
('C/Plaza España, 78', 'Fernández', 'Sergio', 8),
('C/Carrera de San Jerónimo, 12', 'Díaz', 'Clara', 9),
('C/Rambla Catalunya, 23', 'Ruiz', 'Adrián', 10);


INSERT INTO roles_users (roles_id, user_id) VALUES 
(1, 1),
(2, 2),
(2, 3),
(2, 4),
(2, 5),
(2, 6),
(2, 7),
(2, 8),
(2, 9),
(2, 10);

INSERT INTO properties (title, description, city, postal_code, rooms, baths, size, price, type, status, house_type, publish_date, fk_user_profile_published) VALUES
('Encantador Piso en el Centro Histórico', 'Amplio y encantador piso en el corazón del Centro Histórico de Madrid. Esta propiedad cuenta con 2 habitaciones, 1 baño y una superficie de 80.0 metros cuadrados. Ideal para aquellos que buscan comodidad y encanto. ¡No te pierdas la oportunidad de vivir en este increíble lugar!', 'Madrid', '28001', 2, 1, 80.0, 1200.0, 'Alquiler', true, 'Piso', '2023-09-12', 2),
('Casa con Vistas al Mar en Valencia', 'Espaciosa casa con impresionantes vistas al mar en la hermosa ciudad de Valencia. Con 3 habitaciones, 2 baños y una superficie de 150.0 metros cuadrados, esta casa ofrece un estilo de vida tranquilo y relajante. ¡Haz de esta casa tu hogar y disfruta de la serenidad junto al mar!', 'Valencia', '46001', 3, 2, 150.0, 350000.0, 'Venta', true, 'Casa', '2023-09-13', 3),
('Luminoso Apartamento en Sevilla', 'Encantador apartamento lleno de luz con balcón en la hermosa ciudad de Sevilla. Este apartamento cuenta con 1 habitación, 1 baño y una superficie de 50.0 metros cuadrados. Disfruta de un estilo de vida cómodo y vibrante. ¡No dejes pasar la oportunidad de vivir en este hermoso lugar!', 'Sevilla', '41001', 1, 1, 50.0, 800.0, 'Alquiler', true, 'Piso', '2023-09-14', 4),
('Piso Moderno en Zaragoza', 'Diseño moderno en el corazón de Zaragoza. Este elegante piso ofrece 2 habitaciones, 2 baños y una superficie de 100.0 metros cuadrados. Ideal para aquellos que buscan un hogar contemporáneo y cómodo. ¡No te pierdas la oportunidad de vivir con estilo!', 'Zaragoza', '50001', 2, 2, 100.0, 130000.0, 'Venta', true, 'Piso', '2023-09-15', 5),
('Oficina Centrica en Barcelona', 'Espacio de oficina céntrico y funcional en la vibrante ciudad de Barcelona. Esta oficina cuenta con 1 baño y una superficie de 70.0 metros cuadrados. Perfecta para aquellos que buscan un lugar de trabajo conveniente y accesible. ¡Haz de esta oficina tu nuevo espacio de trabajo!', 'Barcelona', '08001', 0, 1, 70.0, 1000.0, 'Alquiler', true, 'Comercial', '2023-09-16', 6),
('Casa con Jardín en Málaga', 'Acogedora casa con hermoso jardín en la encantadora ciudad de Málaga. Con 4 habitaciones, 3 baños y una superficie de 200.0 metros cuadrados, esta casa ofrece un refugio tranquilo con espacio al aire libre. ¡Haz de esta casa tu hogar y disfruta de la vida al máximo!', 'Málaga', '29001', 4, 3, 200.0, 320000.0, 'Venta', true, 'Casa', '2023-09-17', 7),
('Apartamento de Lujo en Murcia', 'Elegante apartamento con acabados de lujo en la encantadora ciudad de Murcia. Con 3 habitaciones, 2 baños y una superficie de 120.0 metros cuadrados, este apartamento ofrece comodidad y estilo. ¡Vive con lujo y confort en este exclusivo espacio!', 'Murcia', '30001', 3, 2, 120.0, 180000.0, 'Venta', true, 'Piso', '2023-09-18', 8),
('Piso con Terraza en Palma de Mallorca', 'Amplio piso con terraza soleada en la hermosa ciudad de Palma de Mallorca. Este piso cuenta con 2 habitaciones, 1 baño y una superficie de 90.0 metros cuadrados. Disfruta del sol y del aire fresco desde tu propia terraza. ¡No dejes pasar esta oportunidad de vivir con comodidad!', 'Palma de Mallorca', '07001', 2, 1, 90.0, 1400.0, 'Alquiler', true, 'Piso', '2023-09-19', 9),
('Estudio en Las Palmas', 'Estudio moderno cerca de la playa en Las Palmas de Gran Canaria. Con 1 habitación, 1 baño y una superficie de 40.0 metros cuadrados, este estudio es perfecto para aquellos que buscan comodidad y proximidad al mar. ¡Haz de este estudio tu pequeño paraíso!', 'Las Palmas de Gran Canaria', '35001', 1, 1, 40.0, 700.0, 'Alquiler', true, 'Piso', '2023-09-20', 10),
('Casa Adosada en Bilbao', 'Encantadora casa adosada en zona tranquila de Bilbao. Con 3 habitaciones, 2 baños y una superficie de 120.0 metros cuadrados, esta casa ofrece un ambiente acogedor y sereno. ¡Haz de esta casa tu hogar y disfruta de la tranquilidad de la vida adosada!', 'Bilbao', '48001', 3, 2, 120.0, 250000.0, 'Venta', true, 'Casa', '2023-09-21', 2),
('Oficina en Vitoria-Gasteiz', 'Espacio de oficina con todas las comodidades en la hermosa ciudad de Vitoria-Gasteiz. Esta oficina cuenta con 1 baño y una superficie de 60.0 metros cuadrados. Perfecta para aquellos que buscan un lugar de trabajo funcional y bien ubicado. ¡Haz de esta oficina tu nuevo centro de operaciones!', 'Vitoria-Gasteiz', '01001', 0, 1, 60.0, 900.0, 'Alquiler', true, 'Comercial', '2023-10-10', 8),
('Piso con Vistas en A Coruña', 'Piso luminoso con impresionantes vistas al mar en la encantadora ciudad de A Coruña. Con 2 habitaciones, 1 baño y una superficie de 75.0 metros cuadrados, este piso ofrece un refugio cómodo con una vista única. ¡Haz de este lugar tu hogar y disfruta de la belleza del mar!', 'A Coruña', '15001', 2, 1, 75.0, 1100.0, 'Alquiler', true, 'Piso', '2023-10-11', 9),
('Local Comercial en Granada', 'Amplio local comercial en ubicación estratégica en la ciudad de Granada. Este local cuenta con 1 baño y una superficie de 80.0 metros cuadrados. Perfecto para aquellos que buscan establecer su negocio en una zona comercial clave. ¡Haz de este local tu nuevo espacio comercial!', 'Granada', '18001', 0, 1, 80.0, 150000.0, 'Venta', true, 'Comercial', '2023-10-12', 10),
('Apartamento en Elche', 'Apartamento acogedor en zona residencial de Elche. Con 1 habitación, 1 baño y una superficie de 50.0 metros cuadrados, este apartamento ofrece comodidad y proximidad a las comodidades locales. ¡Haz de este lugar tu nuevo hogar y disfruta de la vida en Elche!', 'Elche', '03201', 1, 1, 50.0, 800.0, 'Alquiler', true, 'Piso', '2023-10-13', 2),
('Casa con Piscina en Oviedo', 'Espléndida casa con piscina y jardín en la encantadora ciudad de Oviedo. Con 4 habitaciones, 3 baños y una superficie de 180.0 metros cuadrados, esta casa ofrece lujo y comodidad. ¡Haz de esta casa tu refugio y disfruta de la vida al aire libre!', 'Oviedo', '33001', 4, 3, 180.0, 280000.0, 'Venta', true, 'Casa', '2023-10-14', 3),
('Garaje en Badalona', 'Espacio de garaje seguro y bien ubicado en la ciudad de Badalona. Este garaje ofrece 20.0 metros cuadrados de espacio para tu vehículo. ¡Asegura tu coche en este práctico y seguro garaje!', 'Badalona', '08911', 0, 0, 20.0, 100.0, 'Alquiler', true, 'Garaje', '2023-10-15', 4),
('Piso Reformado en Terrassa', 'Piso recién reformado con estilo moderno en la ciudad de Terrassa. Con 2 habitaciones, 2 baños y una superficie de 90.0 metros cuadrados, este piso ofrece un ambiente contemporáneo y cómodo. ¡Haz de este lugar tu hogar y disfruta de la modernidad!', 'Terrassa', '08221', 2, 2, 90.0, 130000.0, 'Venta', true, 'Piso', '2023-10-16', 5),
('Local Comercial en Cartagena', 'Amplio local comercial en el centro de Cartagena. Este local cuenta con 1 baño y una superficie de 75.0 metros cuadrados. Perfecto para aquellos que buscan un espacio comercial en una ubicación estratégica. ¡Haz de este local el nuevo hogar de tu negocio!', 'Cartagena', '30201', 0, 1, 75.0, 110000.0, 'Venta', true, 'Comercial', '2023-10-17', 6),
('Piso en Jerez de la Frontera', 'Piso luminoso y bien ubicado en la encantadora ciudad de Jerez de la Frontera. Con 3 habitaciones, 2 baños y una superficie de 110.0 metros cuadrados, este piso ofrece comodidad y conveniencia. ¡Haz de este lugar tu hogar y disfruta de la vida en Jerez!', 'Jerez de la Frontera', '11401', 3, 2, 110.0, 1700.0, 'Alquiler', true, 'Piso', '2023-10-18', 7),
('Loft Moderno en Alicante', 'Elegante loft con diseño contemporáneo en la hermosa ciudad de Alicante. Con 1 habitación, 1 baño y una superficie de 60.0 metros cuadrados, este loft ofrece un espacio moderno y funcional. ¡Haz de este lugar tu hogar y disfruta de un estilo de vida contemporáneo!', 'Alicante', '03001', 1, 1, 60.0, 950.0, 'Alquiler', true, 'Piso', '2023-10-19', 3),
('Apartamento en Córdoba', 'Acogedor apartamento en el corazón de la histórica ciudad de Córdoba. Con 2 habitaciones, 1 baño y una superficie de 70.0 metros cuadrados, este apartamento ofrece comodidad y proximidad a los lugares de interés locales. ¡Haz de este lugar tu nuevo hogar y disfruta de la historia de Córdoba!', 'Córdoba', '14001', 2, 1, 70.0, 100000.0, 'Venta', true, 'Piso', '2023-10-20', 4),
('Piso con Vistas en Valladolid', 'Piso luminoso con vistas panorámicas en la ciudad de Valladolid. Con 3 habitaciones, 2 baños y una superficie de 100.0 metros cuadrados, este piso ofrece un ambiente espacioso y lleno de luz. ¡Haz de este lugar tu hogar y disfruta de las vistas únicas!', 'Valladolid', '47001', 3, 2, 100.0, 1500.0, 'Alquiler', true, 'Piso', '2023-10-21', 5),
('Ático en Vigo', 'Amplio ático con terraza y vistas al mar en la hermosa ciudad de Vigo. Con 2 habitaciones, 2 baños y una superficie de 120.0 metros cuadrados, este ático ofrece un espacio exclusivo con vistas impresionantes. ¡Haz de este lugar tu refugio y disfruta de la vida al máximo!', 'Vigo', '36201', 2, 2, 120.0, 170000.0, 'Venta', true, 'Piso', '2023-10-22', 6),
('Local Comercial en Gijón', 'Local comercial en zona comercial de la ciudad de Gijón. Este local cuenta con 1 baño y una superficie de 80.0 metros cuadrados. Ideal para aquellos que buscan establecer su negocio en una ubicación comercial destacada. ¡Haz de este local tu nueva sede comercial!', 'Gijón', '33201', 0, 1, 80.0, 120000.0, 'Venta', true, 'Comercial', '2023-10-23', 7),
('Oficina en Hospitalet de Llobregat', 'Oficina moderna con excelente ubicación en Hospitalet de Llobregat. Esta oficina cuenta con 1 baño y una superficie de 65.0 metros cuadrados. Perfecta para aquellos que buscan un espacio de trabajo moderno y bien ubicado. ¡Haz de esta oficina tu nuevo centro de operaciones!', 'Hospitalet de Llobregat', '08901', 0, 1, 65.0, 950.0, 'Alquiler', true, 'Comercial', '2023-10-24', 8),
('Casa en Vitoria-Gasteiz', 'Casa tradicional con encanto en la hermosa ciudad de Vitoria-Gasteiz. Con 4 habitaciones, 3 baños y una superficie de 180.0 metros cuadrados, esta casa ofrece un hogar acogedor con toques tradicionales. ¡Haz de esta casa tu refugio y disfruta de la vida en Vitoria!', 'Vitoria-Gasteiz', '01001', 4, 3, 180.0, 250000.0, 'Venta', true, 'Casa', '2023-10-25', 9),
('Piso Reformado en A Coruña', 'Piso recién reformado en zona céntrica de A Coruña. Con 2 habitaciones, 1 baño y una superficie de 75.0 metros cuadrados, este piso ofrece un espacio moderno y luminoso. ¡Haz de este lugar tu hogar y disfruta de la comodidad de la vida urbana!', 'A Coruña', '15001', 2, 1, 75.0, 1100.0, 'Alquiler', true, 'Piso', '2023-10-26', 10),
('Apartamento en Granada', 'Acogedor apartamento en el pintoresco barrio histórico de Granada. Con 1 habitación, 1 baño y una superficie de 50.0 metros cuadrados, este apartamento ofrece comodidad y encanto. ¡Haz de este lugar tu hogar y descubre la belleza de Granada!', 'Granada', '18001', 1, 1, 50.0, 180000.0, 'Venta', true, 'Piso', '2023-10-27', 2),
('Garaje en Elche', 'Espacio de garaje seguro y bien iluminado en la ciudad de Elche. Este garaje ofrece 25.0 metros cuadrados de espacio para tu vehículo. ¡Asegura tu coche en este práctico y seguro garaje!', 'Elche', '03201', 0, 0, 25.0, 120.0, 'Alquiler', true, 'Garaje', '2023-10-28', 3);



INSERT INTO images (id, properties_id, img) VALUES
(1, 1, '/img1_prop1.jpg'), (2, 1, '/img2_prop1.jpg'), (3, 1, '/img3_prop1.jpg'), (4, 1, '/img4_prop1.jpg'), (5, 1, '/img5_prop1.jpg'),
(6, 2, '/img1_prop2.jpg'), (7, 2, '/img2_prop2.jpg'), (8, 2, '/img3_prop2.jpg'), (9, 2, '/img4_prop2.jpg'), (10, 2, '/img5_prop2.jpg'),
(11, 3, '/img1_prop3.jpg'), (12, 3, '/img2_prop3.jpg'), (13, 3, '/img3_prop3.jpg'), (14, 3, '/img4_prop3.jpg'), (15, 3, '/img5_prop3.jpg'),
(16, 4, '/img1_prop4.jpg'), (17, 4, '/img2_prop4.jpg'), (18, 4, '/img3_prop4.jpg'), (19, 4, '/img4_prop4.jpg'), (20, 4, '/img5_prop4.jpg'),
(21, 5, '/img1_prop5.jpg'), (22, 5, '/img2_prop5.jpg'), (23, 5, '/img3_prop5.jpg'), (24, 5, '/img4_prop5.jpg'), (25, 5, '/img5_prop5.jpg'),
(26, 6, '/img1_prop6.jpg'), (27, 6, '/img2_prop6.jpg'), (28, 6, '/img3_prop6.jpg'), (29, 6, '/img4_prop6.jpg'), (30, 6, '/img5_prop6.jpg'),
(31, 7, '/img1_prop7.jpg'), (32, 7, '/img2_prop7.jpg'), (33, 7, '/img3_prop7.jpg'), (34, 7, '/img4_prop7.jpg'), (35, 7, '/img5_prop7.jpg'),
(36, 8, '/img1_prop8.jpg'), (37, 8, '/img2_prop8.jpg'), (38, 8, '/img3_prop8.jpg'), (39, 8, '/img4_prop8.jpg'), (40, 8, '/img5_prop8.jpg'),
(41, 9, '/img1_prop9.jpg'), (42, 9, '/img2_prop9.jpg'), (43, 9, '/img3_prop9.jpg'), (44, 9, '/img4_prop9.jpg'), (45, 9, '/img5_prop9.jpg'),
(46, 10, '/img1_prop10.jpg'), (47, 10, '/img2_prop10.jpg'), (48, 10, '/img3_prop10.jpg'), (49, 10, '/img4_prop10.jpg'), (50, 10, '/img5_prop10.jpg'),
(51, 11, '/img1_prop11.jpg'), (52, 11, '/img2_prop11.jpg'), (53, 11, '/img3_prop11.jpg'), (54, 11, '/img4_prop11.jpg'), (55, 11, '/img5_prop11.jpg'),
(56, 12, '/img1_prop12.jpg'), (57, 12, '/img2_prop12.jpg'), (58, 12, '/img3_prop12.jpg'), (59, 12, '/img4_prop12.jpg'), (60, 12, '/img5_prop12.jpg'),
(61, 13, '/img1_prop13.jpg'), (62, 13, '/img2_prop13.jpg'), (63, 13, '/img3_prop13.jpg'), (64, 13, '/img4_prop13.jpg'), (65, 13, '/img5_prop13.jpg'),
(66, 14, '/img1_prop14.jpg'), (67, 14, '/img2_prop14.jpg'), (68, 14, '/img3_prop14.jpg'), (69, 14, '/img4_prop14.jpg'), (70, 14, '/img5_prop14.jpg'),
(71, 15, '/img1_prop15.jpg'), (72, 15, '/img2_prop15.jpg'), (73, 15, '/img3_prop15.jpg'), (74, 15, '/img4_prop15.jpg'), (75, 15, '/img5_prop15.jpg'),
(76, 16, '/img1_prop16.jpg'), (77, 16, '/img2_prop16.jpg'), (78, 16, '/img3_prop16.jpg'), (79, 16, '/img4_prop16.jpg'), (80, 16, '/img5_prop16.jpg'),
(81, 17, '/img1_prop17.jpg'), (82, 17, '/img2_prop17.jpg'), (83, 17, '/img3_prop17.jpg'), (84, 17, '/img4_prop17.jpg'), (85, 17, '/img5_prop17.jpg'),
(86, 18, '/img1_prop18.jpg'), (87, 18, '/img2_prop18.jpg'), (88, 18, '/img3_prop18.jpg'), (89, 18, '/img4_prop18.jpg'), (90, 18, '/img5_prop18.jpg'),
(91, 19, '/img1_prop19.jpg'), (92, 19, '/img2_prop19.jpg'), (93, 19, '/img3_prop19.jpg'), (94, 19, '/img4_prop19.jpg'), (95, 19, '/img5_prop19.jpg'),
(96, 20, '/img1_prop20.jpg'), (97, 20, '/img2_prop20.jpg'), (98, 20, '/img3_prop20.jpg'), (99, 20, '/img4_prop20.jpg'), (100, 20, '/img5_prop20.jpg'),
(101, 21, '/img1_prop21.jpg'), (102, 21, '/img2_prop21.jpg'), (103, 21, '/img3_prop21.jpg'), (104, 21, '/img4_prop21.jpg'), (105, 21, '/img5_prop21.jpg'),
(106, 22, '/img1_prop22.jpg'), (107, 22, '/img2_prop22.jpg'), (108, 22, '/img3_prop22.jpg'), (109, 22, '/img4_prop22.jpg'), (110, 22, '/img5_prop22.jpg'),
(111, 23, '/img1_prop23.jpg'), (112, 23, '/img2_prop23.jpg'), (113, 23, '/img3_prop23.jpg'), (114, 23, '/img4_prop23.jpg'), (115, 23, '/img5_prop23.jpg'),
(116, 24, '/img1_prop24.jpg'), (117, 24, '/img2_prop24.jpg'), (118, 24, '/img3_prop24.jpg'), (119, 24, '/img4_prop24.jpg'), (120, 24, '/img5_prop24.jpg'),
(121, 25, '/img1_prop25.jpg'), (122, 25, '/img2_prop25.jpg'), (123, 25, '/img3_prop25.jpg'), (124, 25, '/img4_prop25.jpg'), (125, 25, '/img5_prop25.jpg'),
(126, 26, '/img1_prop26.jpg'), (127, 26, '/img2_prop26.jpg'), (128, 26, '/img3_prop26.jpg'), (129, 26, '/img4_prop26.jpg'), (130, 26, '/img5_prop26.jpg'),
(131, 27, '/img1_prop27.jpg'), (132, 27, '/img2_prop27.jpg'), (133, 27, '/img3_prop27.jpg'), (134, 27, '/img4_prop27.jpg'), (135, 27, '/img5_prop27.jpg'),
(136, 28, '/img1_prop28.jpg'), (137, 28, '/img2_prop28.jpg'), (138, 28, '/img3_prop28.jpg'), (139, 28, '/img4_prop28.jpg'), (140, 28, '/img5_prop28.jpg'),
(141, 29, '/img1_prop29.jpg'), (142, 29, '/img2_prop29.jpg'), (143, 29, '/img3_prop29.jpg'), (144, 29, '/img4_prop29.jpg'), (145, 29, '/img5_prop29.jpg');

INSERT INTO cards (id, name, surname, number, expiremonth, expireyear, user_profile_id)
VALUES
(1, 'Juan', 'Pérez', '9876543210987654', '09', '24', 2),
(2, 'Ana', 'García', '5678123434567890', '11', '23', 3),
(3, 'Carlos', 'López', '4321876509876543', '05', '25', 4),
(4, 'Marta', 'Sánchez', '7890234567890123', '03', '24', 5),
(5, 'Pablo', 'Martín', '3456789012345678', '08', '23', 6),
(6, 'Laura', 'Gómez', '2109876543210987', '02', '25', 7),
(7, 'Sergio', 'Fernández', '6543210987654321', '07', '24', 8),
(8, 'Clara', 'Díaz', '7890345601236789', '04', '23', 9),
(9, 'Adrián', 'Ruiz', '2345678956781234', '10', '25', 10);