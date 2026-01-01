1. Database creation

CREATE DATABASE hospital_db;

2. Table creation

CREATE TABLE doctors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    phone VARCHAR(15),
    email VARCHAR(50)
);

3. Insert sample data

INSERT INTO doctors (name, phone, email)
VALUES 
('Dr. Rahul', '9800000000', 'rahul@gmail.com');

  4. Select data
SELECT * FROM doctors;