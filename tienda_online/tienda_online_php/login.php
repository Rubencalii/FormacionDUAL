<?php include 'includes/header.php'; ?>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

<style>
  :root {
    --clr-main: #004ECC;   /* Azul */
    --clr-yellow: #FFD600; /* Amarillo */
    --clr-white: #FFFFFF;  /* Blanco */
  }

  body {
    background-color: var(--clr-white);
    font-family: 'Rubik', sans-serif;
  }

  .container {
    background: var(--clr-white);
  }

  .card {
    border-radius: 1rem;
    border: 2px solid var(--clr-main);
  }

  h3 {
    color: var(--clr-main);
    font-weight: 700;
  }

  .form-label {
    color: var(--clr-main);
    font-weight: 600;
  }

  .form-control {
    border: 2px solid var(--clr-main);
    border-radius: 0.5rem;
  }

  .form-control:focus {
    border-color: var(--clr-yellow);
    box-shadow: 0 0 5px var(--clr-yellow);
  }

  .btn-primary {
    background-color: var(--clr-main);
    border-color: var(--clr-main);
    font-weight: 700;
    transition: background-color 0.3s ease, border-color 0.3s ease;
  }

  .btn-primary:hover, 
  .btn-primary:focus {
    background-color: var(--clr-yellow);
    border-color: var(--clr-yellow);
    color: var(--clr-main);
  }

  a {
    color: var(--clr-main);
    text-decoration: none;
    font-weight: 600;
  }

  a:hover {
    color: var(--clr-yellow);
    text-decoration: underline;
  }

  small {
    color: var(--clr-main);
  }
</style>

<div class="container d-flex justify-content-center align-items-center vh-100">
  <div class="card shadow-lg p-4" style="max-width: 400px; width: 100%;">
    <h3 class="text-center mb-4"><i class="bi bi-box-arrow-in-right"></i> Iniciar Sesión</h3>
    <form action="procesar_login.php" method="post">
      <div class="mb-3">
        <label for="email" class="form-label">Correo electrónico</label>
        <input type="email" class="form-control" id="email" name="email" placeholder="tucorreo@email.com" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Contraseña</label>
        <input type="password" class="form-control" id="password" name="password" placeholder="********" required>
      </div>
      <button type="submit" class="btn btn-primary w-100"><i class="bi bi-door-open"></i> Entrar</button>
    </form>
    <div class="text-center mt-3">
      <small>¿No tienes cuenta? <a href="registro.php">Regístrate aquí</a></small>
    </div>
  </div>
</div>

<?php include 'includes/footer.php'; ?>

