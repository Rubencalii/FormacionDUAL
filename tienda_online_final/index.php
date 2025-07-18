<?php
include 'includes/db.php';
$sql = "SELECT * FROM productos";
$resultado = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EpokaShop</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css">
    <link rel="stylesheet" href="css/css/main.css">
</head>
<body>

<div style="position: absolute; top: 10px; right: 10px;">
    <a href="admin_login.php">
        <button style="padding: 10px 20px; background-color: #333; color: white; border: none; cursor: pointer;">
            Admin
        </button>
    </a>
</div>


<div class="wrapper">
    <header class="header-mobile">
        <h1 class="logo">EpokaShop</h1>
        <button class="open-menu" id="open-menu">
            <i class="bi bi-list"></i>
        </button>
    </header>
    <aside>
        <button class="close-menu" id="close-menu">
            <i class="bi bi-x"></i>
        </button>
        <header>
            <h1 class="logo">EpokaShop</h1>
        </header>
        <nav>
            <ul class="menu">
                <li>
                    <button id="todos" class="boton-menu boton-categoria active">
                        <i class="bi bi-hand-index-thumb-fill"></i> Todos los productos
                    </button>
                </li>
                <li>
                    <button id="Cuerda" class="boton-menu boton-categoria">
                        <i class="bi bi-hand-index-thumb"></i> Cuerda
                    </button>
                </li>
                <li>
                    <button id="Viento" class="boton-menu boton-categoria">
                        <i class="bi bi-hand-index-thumb"></i> Viento
                    </button>
                </li>
                <li>
                    <button id="Percusion" class="boton-menu boton-categoria">
                        <i class="bi bi-hand-index-thumb"></i> Percusion
                    </button>
                </li>
                <li>
                    <a class="boton-menu boton-carrito" href="./carrito.php">
                        <i class="bi bi-cart-fill"></i> Carrito <span id="numerito" class="numerito">0</span>
                    </a>
                </li>
            </ul>
        </nav>
        <footer>
            <p class="texto-footer">© 2025 Orquesta Epoka</p>
        </footer>
    </aside>
    <main>
        <h2 class="titulo-principal" id="titulo-principal">Todos los productos</h2>
        <div id="contenedor-productos" class="contenedor-productos">
            <?php while ($producto = $resultado->fetch(PDO::FETCH_ASSOC)): ?>
                <div class="producto">
                    <img src="<?php echo $producto['imagen']; ?>" alt="<?php echo $producto['nombre']; ?>">
                    <div class="detalle-producto">
                        <h3><?php echo $producto['nombre']; ?></h3>
                        <p><?php echo $producto['descripcion']; ?></p>
                        <span>$<?php echo number_format($producto['precio'], 2); ?></span>
                        <button class="agregar" data-id="<?php echo $producto['id']; ?>" data-nombre="<?php echo $producto['nombre']; ?>" data-precio="<?php echo $producto['precio']; ?>">
                            Agregar al carrito
                        </button>
                    </div>
                </div>
            <?php endwhile; ?>
        </div>
    </main>
</div>

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/toastify-js"></script>
<script src="./js/js/main.js"></script>
<script src="./js/js/menu.js"></script>
<script src="./js/js/carrito.js"></script>

</body>
</html>
