<?php
/**
 * Procesamiento de pago ficticio basado en validación Luhn.
 * Para una integración real, consulta la documentación de Stripe y reemplaza la lógica correspondiente.
 */
session_start();
require_once 'includes/db.php';
require_once 'includes/functions.php';
require_once 'includes/header.php';

// Asegurarse que el usuario esté autenticado
if (!isset($_SESSION['user_id'])) {
    header('Location: login.php');
    exit;
}

// Validar carrito y método de pago
if (!isset($_SESSION['carrito']) || empty($_SESSION['carrito']) || $_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: carrito.php');
    exit;
}

// Sanitizar entradas
$nombre_tarjeta   = trim($_POST['nombre_tarjeta'] ?? '');
$numero_tarjeta   = preg_replace('/\s+/', '', $_POST['numero_tarjeta'] ?? '');
$fecha_expiracion = trim($_POST['fecha_expiracion'] ?? '');
$cvv              = trim($_POST['cvv'] ?? '');

$errores = [];

// Validaciones mínimas
if (empty($nombre_tarjeta))   $errores[] = "El nombre de la tarjeta es obligatorio.";
if (empty($numero_tarjeta))   $errores[] = "El número de la tarjeta es obligatorio.";
if (empty($fecha_expiracion)) $errores[] = "La fecha de expiración es obligatoria.";
if (empty($cvv))              $errores[] = "El CVV es obligatorio.";
if (!luhnCheck($numero_tarjeta)) $errores[] = "Número de tarjeta no válido.";

if ($errores) {
    echo "<div class='container mt-5'><h3>Errores de pago</h3><ul>";
    foreach ($errores as $e) echo "<li>" . htmlspecialchars($e, ENT_QUOTES, 'UTF-8') . "</li>";
    echo "</ul><a href='pedido.php' class='btn btn-secondary'>Volver</a></div>";
    include 'includes/footer.php';
    exit;
}

// Calcular total
$total = 0;
foreach ($_SESSION['carrito'] as $id => $cantidad) {
    $producto = getProductoById($conn, $id);
    $total += $producto['precio'] * $cantidad;
}

try {
    // Guardar pedido y pago
    $pedido_id = guardarPedido($conn, $_SESSION['user_id'], $_SESSION['carrito']);
    crearPago($pedido_id, $total, 'succeeded', null);

    // Vaciar carrito
    $_SESSION['carrito'] = [];

    echo "<div class='container mt-5 text-center'>";
    echo "<h2 class='text-success'>¡Pago realizado con éxito!</h2>";
    echo "<p>Gracias por tu compra, tu número de pedido es <strong>#{$pedido_id}</strong>.</p>";
    echo "<a href='index.php' class='btn btn-primary mt-3'>Volver a la tienda</a>";
    echo "</div>";
} catch (Exception $e) {
    echo "<div class='container mt-5 text-center'>";
    echo "<h2 class='text-danger'>Error al procesar el pago</h2>";
    echo "<p>" . htmlspecialchars($e->getMessage(), ENT_QUOTES, 'UTF-8') . "</p>";
    echo "<a href='pedido.php' class='btn btn-secondary mt-3'>Intentar de nuevo</a>";
    echo "</div>";
}

include 'includes/footer.php';
?>