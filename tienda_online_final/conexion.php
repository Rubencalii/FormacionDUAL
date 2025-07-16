<?php
$host = "localhost";
$usuario = "root";
$contrasena = "";
$basededatos = "tienda_online";

// Conexión con mysqli
$conn = new mysqli($host, $usuario, $contrasena, $basededatos);

// Verifica la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>
