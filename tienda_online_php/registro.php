<?php include 'includes/header.php'; ?>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

<div class="container d-flex justify-content-center align-items-center vh-100">
    <div class="card shadow-lg p-4" style="max-width: 500px; width: 100%;">
        <h3 class="text-center mb-4"><i class="bi bi-person-plus"></i> Crear Cuenta</h3>
        <form action="procesar_registro.php" method="post">
            <div class="mb-3">
                <label for="nombre" class="form-label">Nombre completo</label>
                <input type="text" class="form-control" id="nombre" name="nombre" placeholder="Tu nombre" required>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Correo electrónico</label>
                <input type="email" class="form-control" id="email" name="email" placeholder="tucorreo@email.com" required>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Contraseña</label>
                <input type="password" class="form-control" id="password" name="password" placeholder="********" required>
            </div>
            <div class="mb-3">
                <label for="confirmar" class="form-label">Confirmar contraseña</label>
                <input type="password" class="form-control" id="confirmar" name="confirmar" placeholder="********" required>
            </div>
            <button type="submit" class="btn btn-success w-100"><i class="bi bi-person-check"></i> Registrarme</button>
        </form>
        <div class="text-center mt-3">
            <small>¿Ya tienes cuenta? <a href="login.php">Inicia sesión</a></small>
        </div>
    </div>
</div>

<?php include 'includes/footer.php'; ?>
