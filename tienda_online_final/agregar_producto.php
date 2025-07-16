<?php
session_start();
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    http_response_code(403);
    echo "Acceso denegado.";
    exit;
}

require_once '../conexion.php';

$nombre = trim($_POST['nombre']);
$descripcion = trim($_POST['descripcion']);
$precio = floatval($_POST['precio']);
$stock = intval($_POST['stock']);
$imagen = null;

// Validaciones básicas
if (empty($nombre) || empty($descripcion) || $precio <= 0 || $stock < 0) {
    die("Datos inválidos.");
}

// Procesar imagen
if (isset($_FILES['imagen']) && $_FILES['imagen']['error'] === UPLOAD_ERR_OK) {
    $img_dir = '../img/';
    if (!is_dir($img_dir)) mkdir($img_dir, 0755, true);

    $tmp_name = $_FILES['imagen']['tmp_name'];
    $file_name = basename($_FILES['imagen']['name']);
    $target_path = $img_dir . $file_name;

    if (move_uploaded_file($tmp_name, $target_path)) {
        $imagen = $file_name;
    }
}

// Preparar query seguro
$stmt = $conn->prepare("INSERT INTO productos (nombre, descripcion, precio, imagen, stock) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("ssdsi", $nombre, $descripcion, $precio, $imagen, $stock);
$stmt->execute();
$stmt->close();

header("Location: admin.php");
exit;
?>
