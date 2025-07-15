
<?php
include 'includes/db.php';

$mensaje = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $descripcion = $_POST["descripcion"];
    $precio = $_POST["precio"];
    $stock = $_POST["stock"];
    $imagen = $_POST["imagen"]; // Puede ser una URL

    if ($nombre && $precio && $stock) {
        $stmt = $conn->prepare("INSERT INTO productos (nombre, descripcion, precio, stock, imagen) VALUES (?, ?, ?, ?, ?)");
        $stmt->bind_param("ssdiss", $nombre, $descripcion, $precio, $stock, $imagen);
        if ($stmt->execute()) {
            $mensaje = "Producto agregado correctamente.";
        } else {
            $mensaje = "Error al agregar el producto.";
        }
        $stmt->close();
    } else {
        $mensaje = "Por favor completa los campos obligatorios.";
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Agregar Producto</title>
    <link rel="stylesheet" href="css/css/main.css">
</head>
<body>
    <h1>Agregar Producto</h1>
    <?php if ($mensaje): ?>
        <p><?php echo $mensaje; ?></p>
    <?php endif; ?>
    <form action="agregar_producto.php" method="POST">
        <label>Nombre: <input type="text" name="nombre" required></label><br>
        <label>Descripción: <textarea name="descripcion"></textarea></label><br>
        <label>Precio: <input type="number" step="0.01" name="precio" required></label><br>
        <label>Stock: <input type="number" name="stock" required></label><br>
        <label>URL de Imagen: <input type="text" name="imagen"></label><br>
        <button type="submit">Agregar</button>
    </form>
</body>
</html>
