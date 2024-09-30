USE proyecto_estructuras;

INSERT INTO Usuario (Username, contrasenia, Imagen, Nombre, Apellido, Peso, Altura, Edad)
VALUES 
  ('Anfelesan', 'monkey', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCLZr3_SOoBxE5kIj-AzuPU0rhXYbOLcxLjA&s', 'Andres', 'Sanchez', 50, 1.60, 19),
  ('Juanjo', 'qwerty', 'https://i.pinimg.com/736x/be/7a/e0/be7ae06405b93b8284cfaeec037253e5.jpg', 'Juan', 'Mora', 70, 1.70, 18),
  ('admin', 'whatever', 'https://cdn-icons-png.flaticon.com/512/9703/9703596.png', 'NoName', 'NoLastName', 60, 1.60, 19),
  ('Anleonsa', 'con', 'https://icpc.global/regionals/abouticpc/foundationlogo.png', 'Name', 'Last name', 60.3, 1.83, 19);

INSERT INTO Ejercicio (Nombre_ejercicio, Dificultad, Categoria, Descripcion, Musculo, Imagen)
VALUES
-- -- Fuerza:Pierna ----
  ('Sentadilla', 7, 'Fuerza', 'Ejercicio de pierna que involucra bajar y subir flexionando las rodillas.', 'Cuádriceps, Glúteos', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbbFKk5RTCy2NRb9H-2ZRd7rE54EEMvPHhdg&s'),
  ('Zancadas', 6, 'Fuerza', 'Paso adelante flexionando ambas rodillas, cargando el peso sobre la pierna.', 'Cuádriceps, Glúteos', 'https://www.sportlife.es/uploads/s1/76/09/48/8/zancada-perfecta-perfil-correcto.jpeg'),
  ('Hip thrust', 7, 'Fuerza', 'Levantamiento de la cadera con una barra apoyada sobre las piernas, trabajando principalmente glúteos.', 'Glúteos, Isquiotibiales', 'https://cdn.shopify.com/s/files/1/1490/1130/files/glute_bridge_480x480.jpg?v=1694622200'),
  ('Prensa', 6, 'Fuerza', 'Ejercicio en máquina donde se empuja un peso con las piernas desde una posición sentada.', 'Cuádriceps, Glúteos', 'https://sdmed.cl/wp-content/uploads/2021/11/2-27-600x600.jpg'),
  ('Peso muerto sumo', 7, 'Fuerza', 'Variante del peso muerto con las piernas abiertas en postura sumo, enfatizando glúteos.', 'Glúteos, Espalda baja', 'https://static.strengthlevel.com/images/exercises/sumo-deadlift/sumo-deadlift-800.jpg'),
  ('Peso muerto', 9, 'Fuerza', 'Levantar una barra desde el suelo con la espalda recta, usando principalmente las piernas.', 'Espalda baja, Glúteos', 'https://cdn.shopify.com/s/files/1/0578/7189/2689/files/BLOG_4_eb3e86b4-fb47-4c4c-9e3b-fb5ca92d4da4_480x480.jpg?v=1690240678'),

-- -- Fuerza:Push ----
  ('Press de banca', 6, 'Fuerza', 'Levantamiento de barra desde una posición acostada para trabajar el pecho.', 'Pectoral', 'https://www.fisioterapiaconmueve.com/wp-content/uploads/2018/04/1.jpg'),
  ('Press inclinado con barra', 7, 'Fuerza', 'Levantamiento de barra en un banco inclinado, para trabajar la parte superior del pecho.', 'Pectorales superiores', 'https://ejerciciosencasa.es/wp-content/uploads/2013/12/incline-dumbbell-press.jpg'),
  ('Fondos', 8, 'Fuerza', 'Levantamiento del cuerpo en paralelas, con énfasis en pecho y tríceps.', 'Pectorales, Tríceps', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUtOUeRpYpl1cs07UOBs1ky9baRwlO4f-tRA&s'),
  ('Flexiones de pecho', 5, 'Fuerza', 'Levantamiento del cuerpo desde el suelo apoyado solo en manos y pies.', 'Pectorales, Tríceps', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK1HC665jMHc8WrjV_Va-5V6TsWuCbsaWu0w&s'),
  ('Press militar', 7, 'Fuerza', 'Levantamiento de mancuernas sobre la cabeza desde una posición sentada o de pie.', 'Deltoides', 'https://t1.uc.ltmcdn.com/es/posts/0/0/7/como_hacer_press_militar_con_mancuernas_51700_600_square.jpg'),
  ('Aperturas con mancuernas', 5, 'Fuerza', 'Apertura y cierre de los brazos con mancuernas desde una posición acostada, enfocando en el pecho.', 'Pectorales', 'https://s3assets.skimble.com/assets/1863652/skimble-workout-trainer-exercise-dumbbell-fly-on-bench-6_iphone.jpg'),

  -- -- Fuerza:Pull ----
  ('Remo en polea baja ', 6, 'Fuerza', 'Ejercicio en máquina donde se tira de un cable desde una posición sentada.', 'Dorsales, Romboides', 'https://s3assets.skimble.com/assets/2366464/image_iphone.jpg'),
  ('Remo con barra', 8, 'Fuerza', 'Levantar una barra hacia el abdomen desde una posición inclinada hacia adelante.', 'Dorsales, Trapecios', 'https://www.yanrefitness.com/wp-content/uploads/2023/10/7-1-1024x768.jpg'),
  ('Curl de biceps con mancuerna', 3, 'Fuerza', 'Flexión de codo para levantar una mancuerna, trabajando el bíceps.', 'Bíceps', 'https://planesdeentrenamiento.elultimotriatleta.com/wp-content/uploads/2019/04/107biceps_optimized.jpg'),
  ('Curl Araña con barra', 6, 'Fuerza', 'Ejercicio que se realiza con una inclinación hacia adelante, apoyando los brazos y levantando la barra, enfatizando la contracción del bíceps.', 'Biceps', 'https://static.strengthlevel.com/images/exercises/spider-curl/spider-curl-800.jpg'),
  ('Curl Zottman', 8, 'Fuerza', 'Ejercicio de bíceps donde se levanta una mancuerna con agarre supino y se baja con agarre prono, trabajando también los antebrazos.', 'Biceps, Antebrazos', 'https://static.strengthlevel.com/images/exercises/zottman-curl/zottman-curl-800.jpg'),
  ('Dominadas', 8, 'Fuerza', 'Levantarse colgado de una barra usando la fuerza de la espalda', 'Dorsales, Bíceps', 'https://media.gq.com.mx/photos/619fd8327a3578ea6e576d0b/1:1/w_2000,h_2000,c_limit/GettyImages-1336070415.jpg'),
-- -- Resistencia ----
  ('Paseo del granjero', 6, 'Resistencia', 'Caminar cargando pesas pesadas en ambas manos.', 'Espalda, Piernas', 'https://media.gq.com.mx/photos/616db586f3d2ed61e46cafda/1:1/w_2000,h_2000,c_limit/GettyImages-1016623792.jpg'),
  ('Plancha', 5, 'Resistencia', 'Mantener el cuerpo en línea recta apoyado sobre los antebrazos y pies.', 'Abdominales', 'https://static1.mujerhoy.com/www/multimedia/202309/28/media/cortadas/planchas-brazos-estirados-pexels1-k40G-U210279989594e1D-1248x1248@MujerHoy.jpg'),
  ('Sentadilla isométrica',6 , 'Resistencia', '	Mantener una posición de sentadilla sin moverse, con las rodillas flexionadas a 90°.', 'Cuádriceps, Glúteos', 'https://hips.hearstapps.com/hmg-prod/images/digging-deep-with-the-help-of-a-friend-royalty-free-image-1589808201.jpg?crop=0.6673xw:1xh;center,top&resize=640:*'),
  ('Puente de glúteos', 4, 'Resistencia', 'Levantar la pelvis manteniendo los hombros apoyados en el suelo, fortaleciendo los glúteos y espalda baja.', 'Glúteos, Espalda baja', 'https://static1.mujerhoy.com/www/multimedia/202203/02/media/cortadas/puente-gluteos-beneficios-kqcH--624x624@MujerHoy.jpg'),
  ('Superman', 4, 'Resistencia', 'Acostado boca abajo, elevar simultáneamente los brazos y las piernas.', 'Espalda baja, Glúteos', 'https://images.ctfassets.net/hjcv6wdwxsdz/79sS2tpNEIFtGYuBfCNxYi/8367923f934c6f2369f50b3f42c57be8/superman-exercise-hold.png?w=1200'),
  ('Fondos en silla', 5, 'Resistencia', '	Apoyando las manos en una silla, bajar y subir el cuerpo flexionando los codos, trabajando los tríceps.', 'Tríceps, Deltoides', 'https://hips.hearstapps.com/hmg-prod/images/captura-de-pantalla-2020-05-28-a-las-12-50-10-1590663057.png'),

-- -- Cardio ----
  ('Burpees', 7, 'Cardio', 'Combinación de sentadilla, flexión y salto, realizado de manera rápida.', 'Todo el cuerpo', 'https://holidaygym.es/wp-content/uploads/2020/04/burpees-948x1024.jpg'),
  ('Correr', 4, 'Cardio', 'Ejercicio cardiovascular básico que consiste en trotar o correr a velocidad constante.', 'Piernas', 'https://media.gq.com.mx/photos/61607523fb5b39d60109f837/1:1/w_1996,h_1996,c_limit/GettyImages-675020531-correr-para-sentirte-bien.jpg'),
  ('Saltar la cuerda', 6, 'Cardio', 'Saltar una cuerda girada con las manos a alta velocidad.', 'Piernas, Hombros', 'https://media.gq.com.mx/photos/5fa452677c1df958a570de2e/1:1/w_2000,h_2000,c_limit/GettyImages-664660935.jpg'),
  ('Mountain Climbers', 6, 'Cardio', 'Desde una posición de plancha, llevar las rodillas alternadamente hacia el pecho rápidamente.', 'Core, Piernas', 'https://swolverine.com/cdn/shop/articles/Mountain_Climbers_benefits_600x600_crop_center.jpg?v=1641084059'),
  ('Jumping Jacks', 5, 'Cardio', 'Saltos en los que se abren las piernas y se elevan los brazos simultáneamente.', 'Piernas, Brazos', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCaeJcuJaxK9iJAYxeGJy_r1sEfk7iac0wcA&s'),
  ('Ciclismo', 7, 'Cardio', 'Pedalear una bicicleta a ritmo constante, ideal para mejorar el acondicionamiento cardiovascular.', 'Piernas', 'https://a.storyblok.com/f/112937/568x464/c7971716ed/top-cycling-terms-to-watch-the-tour-de-france_568x464.jpg/m/620x0/filters:quality(70)/');

INSERT INTO Rutina (Nombre_rutina, Nivel, Tiempo_descanzo_serie, Tiempo_descanzo_ejercicio)
VALUES
  ('Pull', 'intermedio', 100, 80),
  ('Push', 'intermedio', 100, 80),
  ('Pierna', 'intermedio', 100, 80),
  ('Cardio', 'intermedio', 100, 80),
  ('Enfocado a Biceps', 'principiante', 100, 80),
  ('Enfocado a Triceps', 'principiante',100, 80),
  ('Enfocado a Espalda', 'principiante',100, 80),
  ('Enfocado a Pecho', 'principiante',100, 80);

INSERT INTO Rutina_ejercicio (Id_rutina, Id_ejercicio, Posicion, Cantidad_series, Tipo_ejecucion, Cantidad_ejercicios)
VALUES
  (1, 14, 0, 4, 'R', 4),
  (1, 15, 1, 4, 'R', 4),
  (1, 16, 2, 4, 'R', 4),
  (1, 17, 3, 4, 'R', 4),
  (2, 7, 0, 4, 'R', 4),
  (2, 8, 1, 4, 'R', 4),
  (2, 9, 2, 4, 'R', 4),
  (2, 10, 3, 4, 'R', 4),
  (3, 1, 0, 4, 'R', 4),
  (3, 2, 1, 4, 'R', 4),
  (3, 3, 2, 4, 'R', 4),
  (3, 4, 3, 4, 'R', 4),
  (4, 15, 0, 6, 'R', 3),
  (4, 16, 1, 6, 'R', 3),
  (4, 17, 2, 4, 'R', 3),
  (5, 9, 0, 8, 'R', 2),
  (5, 10, 1, 8, 'R', 2),
  (6, 13, 0, 6, 'R', 3),
  (6, 14, 1, 6, 'R', 3),
  (6, 18, 2, 4, 'R', 3),
  (7, 7, 0, 6, 'R', 3),
  (7, 8, 1, 6, 'R', 3),
  (7, 12, 2, 4, 'R', 3);
  
-- INSERT INTO Ejercicio (Nombre_ejercicio, Dificultad, Categoria, Descripcion, Musculo, Imagen) VALUES -- -- Fuerza:Pierna ----   ('Sentadilla', 7, 'Fuerza', 'Ejercicio de pierna que involucra bajar y subir flexionando las rodillas.', 'Cuádriceps, Glúteos', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),   ('Zancadas', 6, 'Fuerza', 'Paso adelante flexionando ambas rodillas, cargando el peso sobre la pierna.', 'Cuádriceps, Glúteos', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),   ('Hip thrust', 7, 'Fuerza', 'Levantamiento de la cadera con una barra apoyada sobre las piernas, trabajando principalmente glúteos.', 'Glúteos, Isquiotibiales', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),   ('Prensa', 6, 'Fuerza', 'Ejercicio en máquina donde se empuja un peso con las piernas desde una posición sentada.', 'Cuádriceps, Glúteos', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),   ('Peso muerto sumo', 7, 'Fuerza', 'Variante del peso muerto con las piernas abiertas en postura sumo, enfatizando glúteos.', 'Glúteos, Espalda baja', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),   ('Peso muerto', 9, 'Fuerza', 'Levantar una barra desde el suelo con la espalda recta, usando principalmente las piernas.', 'Espalda baja, Glúteos', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),  -- -- Fuerza:Push ----   ('Press de banca', 6, 'Fuerza', 'Levantamiento de barra desde una posición acostada para trabajar el pecho.', 'Pectoral', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),   ('Press inclinado con barra', 7, 'Fuerza', 'Levantamiento de barra en un banco inclinado, para trabajar la parte superior del pecho.', 'Pectorales superiores', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),   ('Fondos', 8, 'Fuerza', 'Levantamiento del cuerpo en paralelas, con énfasis en pecho y tríceps.', 'Pectorales, Tríceps', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),   ('Flexiones de pecho', 5, 'Fuerza', 'Levantamiento del cuerpo desde el suelo apoyado solo en manos y pies.', 'Pectorales, Tríceps', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),   ('Press militar', 7, 'Fuerza', 'Levantamiento de mancuernas sobre la cabeza desde una posición sentada o de pie.', 'Deltoides', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),   ('Dominadas', 8, 'Fuerza', 'Levantarse colgado de una barra usando la fuerza de la espalda', 'Dorsales, Bíceps', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),   ('Aperturas con mancuernas', 5, 'Fuerza', 'Apertura y cierre de los brazos con mancuernas desde una posición acostada, enfocando en el pecho.', 'Pectorales', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),    -- -- Fuerza:Pull ----   ('Remo en polea baja ', 6, 'Fuerza', 'Ejercicio en máquina donde se tira de un cable desde una posición sentada.', 'Dorsales, Romboides', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),   ('Remo con barra', 8, 'Fuerza', 'Levantar una barra hacia el abdomen desde una posición inclinada hacia adelante.', 'Dorsales, Trapecios', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-1578561219.jpg'),   ('Curl de biceps con mancuerna', 3, 'Fuerza', 'Flexión de codo para levantar una mancuerna, trabajando el bíceps.', 'Bíceps', 'https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-entrenamiento-pesa-rusa-15785612...
