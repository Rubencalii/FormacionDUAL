<?php
include 'includes/db.php'; 

$mensaje = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $descripcion = $_POST["descripcion"];
    $precio = $_POST["precio"];
    $stock = $_POST["stock"];
    $imagen = $_POST["imagen"];

    if ($nombre && $precio && $stock) {
        try {
            $stmt = $conn->prepare("INSERT INTO productos (nombre, descripcion, precio, stock, imagen) VALUES (?, ?, ?, ?, ?)");
            $stmt->execute([$nombre, $descripcion, $precio, $stock, $imagen]);
            $mensaje = "✅ Producto agregado correctamente.";
        } catch (PDOException $e) {
            $mensaje = "❌ Error al agregar el producto: " . $e->getMessage();
        }
    } else {
        $mensaje = "⚠️ Por favor completa los campos obligatorios.";
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Agregar Producto | EpokaShop</title>
    <link rel="stylesheet" href="css/css/main.css">
    <style>
        body {
            background-color: var(--clr-white);
            color: var(--clr-main);
            font-family: 'Rubik', sans-serif;
            padding: 2rem;
        }

        h1 {
            color: var(--clr-main);
            margin-bottom: 1rem;
        }

        form {
            background-color: var(--clr-gray);
            padding: 2rem;
            border-radius: 1rem;
            width: 100%;
            max-width: 600px;
        }

        label {
            display: block;
            margin-bottom: 1rem;
            font-weight: 500;
        }

        input[type="text"],
        input[type="number"],
        textarea {
            width: 100%;
            padding: 0.5rem;
            border: 1px solid var(--clr-main);
            border-radius: 0.5rem;
            font-size: 1rem;
        }

        textarea {
            resize: vertical;
            min-height: 80px;
        }

        button[type="submit"] {
            background-color: var(--clr-main);
            color: var(--clr-white);
            border: none;
            padding: 0.75rem 2rem;
            border-radius: 2rem;
            cursor: pointer;
            text-transform: uppercase;
            font-weight: bold;
            transition: 0.3s;
        }

        button[type="submit"]:hover {
            background-color: var(--clr-main-light);
            color: var(--clr-main);
        }

        .mensaje {
            margin-bottom: 1rem;
            padding: 1rem;
            border-radius: 0.5rem;
            background-color: #e0e0e0;
        }

        .mensaje.success {
            background-color: #d4edda;
            color: #155724;
        }

        .mensaje.error {
            background-color: #f8d7da;
            color: #721c24;
        }
    </style>
</head>
<body>

    <h1>Agregar Producto</h1>

    <?php if ($mensaje): ?>
        <div class="mensaje <?php echo strpos($mensaje, '✅') !== false ? 'success' : 'error'; ?>">
            <?php echo $mensaje; ?>
        </div>
    <?php endif; ?>

    <form action="agregar_producto.php" method="POST">
        <label>Nombre:
            <input type="text" name="nombre" required>
        </label>

        <label>Descripción:
            <textarea name="descripcion"></textarea>
        </label>

        <label>Precio:
            <input type="number" step="0.01" name="precio" required>
        </label>

        <label>Stock:
            <input type="number" name="stock" required>
        </label>

        <label>URL de Imagen:
            <input type="text" name="imagen">
        </label>

        <button type="submit">Agregar</button>
    </form>

</body>
</html>
