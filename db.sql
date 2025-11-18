-- Створення бази даних
CREATE DATABASE IF NOT EXISTS registration_db;
USE registration_db;

-- Таблиця користувачів
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Декілька тестових записів (необов'язково)
INSERT INTO users (first_name, last_name, email, password) VALUES
('Олександр', 'Іваненко', 'alex@example.com', '12345'),
('Марія', 'Коваленко', 'maria@example.com', 'qwerty');
