
🛍️ TIENDA ONLINE PHP - INSTRUCCIONES DE INSTALACIÓN LOCAL (XAMPP)
==================================================================

REQUISITOS:
-----------
✅ XAMPP instalado (PHP + MySQL)
✅ Navegador web (Chrome, Firefox, etc.)

PASOS DE INSTALACIÓN:
---------------------

1. 📁 Copia la carpeta del proyecto en:
   C:\xampp\htdocs\tienda_online_php

2. 🗃️ Importar base de datos:
   - Abre http://localhost/phpmyadmin
   - Crea una base de datos llamada: tienda_online
   - Importa el archivo: tienda_online.sql (incluido en el proyecto)

3. ⚙️ Configura la conexión a la base de datos si es necesario:
   - Edita `conexion.php` si tu usuario no es "root" o tiene contraseña
   - Por defecto XAMPP usa:
     Usuario: root
     Contraseña: (vacío)

4. 🔐 Crear un administrador (si no existe):
   - Genera un hash en PHP con:
     <?php echo password_hash('tu_clave_segura', PASSWORD_DEFAULT); ?>
   - Inserta el resultado en la base de datos:
     INSERT INTO admins (usuario, password) VALUES ('admin', 'AQUI_EL_HASH');

5. 🖥️ Acceder desde el navegador:
   - Cliente: http://localhost/tienda_online_php/index.php
   - Admin: http://localhost/tienda_online_php/login_admin.php

6. 🧼 Verifica:
   - Carpeta `img/` tiene permisos de escritura (para subir imágenes)
   - Si algo falla, revisa los errores en XAMPP o consola

¡Listo! Tu tienda está lista para usarse en local con XAMPP. 🎉
