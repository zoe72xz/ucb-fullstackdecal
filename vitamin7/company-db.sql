CREATE DATABASE company_db;
USE company_db;

CREATE TABLE employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  position VARCHAR(255) NOT NULL,
  salary DECIMAL(10,2) NOT NULL
);

INSERT INTO employees (name, position, salary)
VALUES
  ('Alice', 'Developer', 75000),
  ('Bob', 'Designer', 65000),
  ('Charlie', 'Manager', 85000);
  
  SELECT * FROM employees;
