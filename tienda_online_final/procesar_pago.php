<?php
session_start();
require_once '../conexion.php';

if (!isset($_SESSION['carrito']) || empty($_SESSION['carrito'])) {
    echo "Tu carrito está vacío.";
    exit;
}

$carrito = $_SESSION['carrito'];
$error = false;

foreach ($carrito as $id => $cantidad) {
    $sql = "SELECT stock FROM productos WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $result = $stmt->get_result();
    $producto = $result->fetch_assoc();

    if (!$producto || $producto['stock'] < $cantidad) {
        echo "Stock insuficiente para uno o más productos.";
        $error = true;
        break;
    }
    $stmt->close();
}

if (!$error) {
    // Descontar stock
    foreach ($carrito as $id => $cantidad) {
        $sql = "UPDATE productos SET stock = stock - ? WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ii", $cantidad, $id);
        $stmt->execute();
        $stmt->close();
    }

    // Limpiar carrito
    unset($_SESSION['carrito']);

    echo "<h2>✅ ¡Gracias por tu compra!</h2>";
    echo "<p>Tu pedido ha sido procesado con éxito.</p>";
    echo "<p><a href='index.php'>Volver al inicio</a></p>";
} else {
    echo "<p><a href='carrito.php'>Volver al carrito</a></p>";
}
?>
