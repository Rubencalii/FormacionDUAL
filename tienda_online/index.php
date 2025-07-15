<?php
session_start();
require_once 'includes/db.php';
require_once 'includes/functions.php';
include 'includes/header.php';

echo '<div class="container mt-4"><h2>Productos</h2><div class="row">';

$productos = getProductos($conn);
foreach ($productos as $p) {
    echo '<div class="col-md-4 mb-3">
            <div class="card">
                <img src="uploads/'.$p['imagen'].'" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">'.$p['nombre'].'</h5>
                    <p class="card-text">'.$p['descripcion'].'</p>
                    <p><strong>'.$p['precio'].' €</strong></p>
                    <a href="carrito.php?add='.$p['id'].'" class="btn btn-primary">Añadir al carrito</a>
                </div>
            </div>
          </div>';
}

echo '</div></div>';
include 'includes/footer.php';
?>