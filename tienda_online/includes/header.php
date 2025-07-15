<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Tienda Online</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head><body>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container">
<a class="navbar-brand" href="index.php">Tienda</a>
<div>
<a href="carrito.php" class="btn btn-outline-primary">Carrito</a>
<?php if (!empty($_SESSION['user_id'])): ?>
<a href="logout.php" class="btn btn-outline-danger">Salir</a>
<?php else: ?>
<a href="login.php" class="btn btn-outline-success">Entrar</a>
<a href="registro.php" class="btn btn-outline-info">Registro</a>
<?php endif; ?>
</div>
</div></nav>