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
?>

<div class="container mt-4">
    <h2 class="mb-4">🛒 Carrito de compras</h2>

    <?php if (!empty($_SESSION['carrito'])): ?>
        <div class="text-start mb-3">
            <a href="index.php" class="btn btn-secondary">
                <i class="bi bi-arrow-left"></i> Volver a la tienda
            </a>
        </div>

        <div class="table-responsive">
            <table class="table table-bordered table-striped align-middle text-center">
                <thead class="table-dark">
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Subtotal</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                <?php
                $total = 0;

                foreach ($_SESSION['carrito'] as $id => $cantidad):
                    $producto = getProductoById($conn, $id);
                    $subtotal = $producto['precio'] * $cantidad;
                    $total += $subtotal;
                ?>
                    <tr>
                        <td><?= htmlspecialchars($producto['nombre']) ?></td>
                        <td><?= number_format($producto['precio'], 2) ?> €</td>
                        <td><?= $cantidad ?></td>
                        <td><?= number_format($subtotal, 2) ?> €</td>
                        <td>
                            <a href="?remove=<?= $id ?>" class="btn btn-sm btn-danger">
                                <i class="bi bi-trash"></i> Eliminar
                            </a>
                        </td>
                    </tr>
                <?php endforeach; ?>
                </tbody>
                <tfoot>
                    <tr>
                        <th colspan="3" class="text-end">Total:</th>
                        <th><?= number_format($total, 2) ?> €</th>
                        <th></th>
                    </tr>
                </tfoot>
            </table>
        </div>

        <div class="text-end">
            <a href="pedido.php" class="btn btn-success">
                <i class="bi bi-check-circle"></i> Confirmar pedido
            </a>
        </div>

    <?php else: ?>
        <div class="alert alert-info">
            Tu carrito está vacío.
        </div>
        <a href="index.php" class="btn btn-primary">
            <i class="bi bi-arrow-left"></i> Volver a la tienda
        </a>
    <?php endif; ?>
</div>

<?php include 'includes/footer.php'; ?>
