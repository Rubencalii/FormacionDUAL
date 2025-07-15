<?php
session_start();
require_once 'includes/db.php';
require_once 'includes/functions.php';
include 'includes/header.php';

if (!isset($_SESSION['carrito']) || empty($_SESSION['carrito'])) {
    header('Location: carrito.php');
    exit;
}

// Calcular total y obtener detalles
$total = 0;
$detalles = [];
foreach ($_SESSION['carrito'] as $id => $cantidad) {
    $producto = getProductoById($conn, $id);
    $subtotal = $producto['precio'] * $cantidad;
    $total += $subtotal;
    $detalles[] = [
        'nombre'   => $producto['nombre'],
        'precio'   => $producto['precio'],
        'cantidad' => $cantidad,
        'subtotal' => $subtotal
    ];
}
?>
<div class="container py-5">
    <h2 class="mb-4">Confirmación de pedido</h2>
    <table class="table">
        <thead>
            <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th class="text-end">Precio unidad (€)</th>
                <th class="text-end">Subtotal (€)</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($detalles as $item): ?>
            <tr>
                <td><?= htmlspecialchars($item['nombre']) ?></td>
                <td><?= $item['cantidad'] ?></td>
                <td class="text-end"><?= number_format($item['precio'], 2) ?></td>
                <td class="text-end"><?= number_format($item['subtotal'], 2) ?></td>
            </tr>
            <?php endforeach; ?>
        </tbody>
        <tfoot>
            <tr>
                <th colspan="3" class="text-end">Total</th>
                <th class="text-end"><?= number_format($total, 2) ?> €</th>
            </tr>
        </tfoot>
    </table>

    <h3 class="mt-5">Datos de pago</h3>
    <form action="procesar_pago.php" method="POST" class="row g-3">
        <div class="col-md-6">
            <label for="nombre_tarjeta" class="form-label">Nombre en la tarjeta</label>
            <input type="text" class="form-control" id="nombre_tarjeta" name="nombre_tarjeta" required>
        </div>
        <div class="col-md-6">
            <label for="numero_tarjeta" class="form-label">Número de tarjeta</label>
            <input type="text" class="form-control" id="numero_tarjeta" name="numero_tarjeta" placeholder="XXXX XXXX XXXX XXXX" required>
        </div>
        <div class="col-md-4">
            <label for="fecha_expiracion" class="form-label">Fecha expiración (MM/AA)</label>
            <input type="text" class="form-control" id="fecha_expiracion" name="fecha_expiracion" placeholder="MM/AA" required>
        </div>
        <div class="col-md-2">
            <label for="cvv" class="form-label">CVV</label>
            <input type="text" class="form-control" id="cvv" name="cvv" required>
        </div>
        <div class="col-12 d-flex justify-content-between mt-4">
            <a href="carrito.php" class="btn btn-secondary">
                <i class="bi bi-arrow-left"></i> Volver al carrito
            </a>
            <button type="submit" class="btn btn-primary">
                <i class="bi bi-credit-card"></i> Pagar <?= number_format($total, 2) ?> €
            </button>
        </div>
    </form>
</div>
<?php include 'includes/footer.php'; ?>