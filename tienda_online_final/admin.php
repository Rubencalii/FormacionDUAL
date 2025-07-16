<?php
session_start();
require_once "conexion.php";

if (!isset($_SESSION["admin"])) {
    header("Location: login_admin.php");
    exit();
}

$sql = "SELECT * FROM productos";
$resultado = mysqli_query($conn, $sql);
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Panel de Administración</title>
    <style>
        body {
            font-family: 'Segoe UI', sans-serif;
            background-color: #F9FAFB;
            color: #111827;
            margin: 0;
            padding: 40px;
        }

        h1, h2 {
            color: #1E3A8A;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            background-color: white;
            box-shadow: 0 0 10px rgba(0,0,0,0.05);
            margin-bottom: 30px;
        }

        th {
            background-color: #1E3A8A;
            color: white;
            padding: 12px;
        }

        td {
            padding: 10px;
            border-bottom: 1px solid #e5e7eb;
        }

        img {
            max-width: 80px;
            height: auto;
        }

        form {
            margin-top: 20px;
            background-color: white;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0,0,0,0.05);
            border-radius: 6px;
        }

        label {
            font-weight: bold;
            display: block;
            margin-top: 10px;
        }

        input[type="text"],
        input[type="number"],
        textarea,
        input[type="file"] {
            width: 100%;
            padding: 8px;
            margin-top: 5px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        button {
            background-color: #F97316;
            color: white;
            border: none;
            padding: 10px 20px;
            margin-top: 15px;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
        }

        button:hover {
            background-color: #ea580c;
        }

        .logout-btn {
            margin-top: 20px;
            background-color: #3B82F6;
        }

        .logout-btn:hover {
            background-color: #2563eb;
        }
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
                <td><img src="<?= $img ?>" alt="Imagen"></td>
                <td><?= $producto['stock'] ?></td>
                <td>
                    <form method="POST" action="eliminar_producto.php" onsubmit="return confirm('¿Eliminar este producto?');">
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

    <a href="logout.php"><button class="logout-btn">Cerrar Sesión</button></a>
</body>
</html>
