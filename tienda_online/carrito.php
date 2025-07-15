<?php
session_start();
require_once 'includes/db.php';
require_once 'includes/functions.php';
include 'includes/header.php';

if (!isset($_SESSION['carrito'])) $_SESSION['carrito'] = [];

if (isset($_GET['add'])) {
    $id = (int)$_GET['add'];
    $_SESSION['carrito'][$id] = ($_SESSION['carrito'][$id] ?? 0) + 1;
}

if (isset($_GET['remove'])) {
    $id = (int)$_GET['remove'];
    unset($_SESSION['carrito'][$id]);
}

echo '<div class="container mt-4"><h2>Carrito</h2>';
$total = 0;

foreach ($_SESSION['carrito'] as $id => $cantidad) {
    $producto = getProductoById($conn, $id);
    $subtotal = $producto['precio'] * $cantidad;
    $total += $subtotal;
    echo "<p>{$producto['nombre']} x $cantidad = {$subtotal}€ <a href='?remove=$id' class='btn btn-danger btn-sm'>Eliminar</a></p>";
}
echo "<h4>Total: $total €</h4>";
echo '<a href="pedido.php" class="btn btn-success">Confirmar pedido</a>';
echo '</div>';

include 'includes/footer.php'; ?>