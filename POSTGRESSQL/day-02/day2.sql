 Day 2 : PostgreSQL Beginner
 Topic: WHERE, LIKE, ORDER BY, LIMIT, UPDATE, DELETE

 1. Insert multiple doctors
INSERT INTO doctors (name, phone, email)
VALUES
('Dr. Sita', '9811111111', 'sita@gmail.com'),
('Dr. Ram', '9822222222', 'ram@gmail.com'),
('Dr. Hari', '9833333333', 'hari@gmail.com');

 2. WHERE clause
SELECT * FROM doctors
WHERE name = 'Dr. Ram';

 3. LIKE (pattern matching)
SELECT * FROM doctors
WHERE phone LIKE '98%';

 4. ORDER BY
SELECT * FROM doctors
ORDER BY name ASC;

 5. LIMIT
SELECT * FROM doctors
LIMIT 2;

 6. UPDATE data
UPDATE doctors
SET phone = '9999999999'
WHERE name = 'Dr. Hari';

 7. DELETE data
DELETE FROM doctors
WHERE name = 'Dr. Sita';

 8. Final check
SELECT * FROM doctors;
