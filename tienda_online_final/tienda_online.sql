-- Base de datos: tienda_online
DROP DATABASE IF EXISTS tienda_online;
CREATE DATABASE tienda_online;
USE tienda_online;

-- Tabla de productos
CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    imagen VARCHAR(255),
    stock INT DEFAULT 0
);

-- Tabla de administradores
CREATE TABLE admins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Insertar un administrador por defecto (usuario: admin, contraseña: admin123)
INSERT INTO admins (usuario, password)
VALUES (
  'admin',
  '$2y$10$UtYrrqxEQKTTAcZ8o0M4Neae6xsh9dRGSfXUErMRFxJmS0J9b7rN2'
);


