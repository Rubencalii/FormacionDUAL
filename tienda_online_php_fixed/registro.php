<?php
session_start();
require_once 'includes/db.php';
require_once 'includes/functions.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];
    if (registerUser($conn, $email, $password)) {
        header('Location: login.php');
        exit;
    } else {
        $error = "Error al registrar";
    }
}
include 'includes/header.php';
?>
<div class="container mt-4">
<h2>Registro</h2>
<?php if (!empty($error)) echo "<div class='alert alert-danger'>$error</div>"; ?>
<form method="POST">
<input type="email" name="email" placeholder="Email" class="form-control mb-2" required>
<input type="password" name="password" placeholder="Contraseña" class="form-control mb-2" required>
<button class="btn btn-primary">Registrarse</button>
</form></div>
<?php include 'includes/footer.php'; ?>