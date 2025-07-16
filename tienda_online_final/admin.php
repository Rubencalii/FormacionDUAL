
<?php
session_start();
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    header("Location: admin_login.php");
    exit;
}

require_once 'includes/db.php';

// Obtener productos de la base de datos
$sql = "SELECT * FROM productos";
$resultado = mysqli_query($conn, $sql);
?>

<!DOCTYPE html>
<html>
<head>
    <title>Panel de Administración</title>
    <meta charset="UTF-8">
    <style>
        body { font-family: Arial; margin: 40px; }
        table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
        th, td { padding: 10px; border: 1px solid #ccc; text-align: left; }
        form { margin-top: 20px; }
        input, textarea { width: 100%; padding: 8px; margin: 4px 0; }
        button { padding: 10px 20px; background-color: #333; color: #fff; border: none; cursor: pointer; }
    </style>
</head>
<body>
    <h1>Panel de Administración</h1>

    <h2>Productos Existentes</h2>
    <table>
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Descripción</th>
            <th>Imagen</th>
            <th>Stock</th>
            <th>Acciones</th>
        </tr>
        <?php while($producto = mysqli_fetch_assoc($resultado)) :
    $img = !empty($producto['imagen']) ? 'img/' . $producto['imagen'] : 'img/placeholder.png'; ?>
            <tr>
                <td><?= $producto['id'] ?></td>
                <td><?= htmlspecialchars($producto['nombre']) ?></td>
                <td><?= $producto['precio'] ?>€</td>
                <td><?= htmlspecialchars($producto['descripcion']) ?></td>
                <td>
                    <form method="POST" action="eliminar_producto.php" onsubmit="return confirm('¿Estás seguro de eliminar este producto?');">
                        <input type="hidden" name="id" value="<?= $producto['id'] ?>">
                        <button type="submit">Eliminar</button>
                    </form>
                </td>
            </tr>
        <?php endwhile; ?>
    </table>

    <h2>Agregar Nuevo Producto</h2>
    <form method="POST" action="agregar_producto.php" enctype="multipart/form-data">
        <label>Nombre:</label>
        <input type="text" name="nombre" required>
        
        <label>Precio:</label>
        <input type="number" step="0.01" name="precio" required>
        
        <label>Descripción:</label>
        <textarea name="descripcion" required></textarea>
        
        <label>Stock:</label>
<input type="number" name="stock" min="0" required>

<label>Imagen del producto:</label>
<input type="file" name="imagen" accept="image/*">

<button type="submit">Agregar Producto</button>
    </form>

    <br><a href="logout.php"><button>Cerrar Sesión</button></a>
</body>
</html>
