
# 🛒 Tienda Online Mejorada

**Versión:** con mejoras completas (Fases 1, 2 y 3)  
**Incluye:** Bootstrap, buscador, stock y carrito mejorados, panel admin, validaciones, Stripe + PayPal, gráficos y PWA.  

---

## 🚀 Instalación
1️⃣ Descomprime `tienda_online_final_mejorada.zip` en tu servidor web (XAMPP, MAMP, LAMP, etc.).  
2️⃣ Importa el archivo SQL de tu base de datos si lo tenías en el proyecto original.  
3️⃣ Asegúrate de tener PHP >=7.4 y acceso a MySQL.  
4️⃣ Configura tus credenciales de la base de datos en el archivo de configuración (`includes/db.php` o similar).  

---

## 🖥️ Funcionalidades principales

✅ **Fase 1**
- Diseño responsive y moderno con Bootstrap 5.
- Navbar con carrito y login.
- Formulario de búsqueda en la página principal.
- Stock visible en la ficha de producto y controlado al comprar.
- Carrito claro con tabla y totales.

✅ **Fase 2**
- Panel de administración (`/admin`) con login.
- Ver pedidos y marcar como pendiente/enviado.
- Estadísticas básicas: ventas totales, número de pedidos.
- Validaciones robustas en los formularios (cliente y servidor).
- Mensajes de éxito/error claros.

✅ **Fase 3**
- Pagos reales con **Stripe** y **PayPal** (`pago.php`).
- Gráficos de ventas con Chart.js en admin/estadisticas.php.
- Soporte PWA: instalable en móviles, funciona offline básico.

---

## 💳 Cómo probar los pagos

### Stripe
1️⃣ Regístrate en [Stripe](https://dashboard.stripe.com/) y genera las claves API (publicable y secreta).  
2️⃣ Colócalas en el archivo `includes/stripe_config.php`:
```php
define('STRIPE_SECRET_KEY', 'sk_test_...');
define('STRIPE_PUBLISHABLE_KEY', 'pk_test_...');
```
3️⃣ En la tienda, selecciona Stripe como método de pago y usa las tarjetas de prueba de Stripe:
- Número: `4242 4242 4242 4242`
- CVC: `123`
- Fecha: cualquier futura

### PayPal
1️⃣ Regístrate en [PayPal Developer](https://developer.paypal.com/) y crea una app en sandbox.  
2️⃣ Copia el `Client ID` y `Secret` y configúralos en `includes/paypal_config.php`.  
3️⃣ En la tienda, selecciona PayPal y paga con una cuenta de sandbox de prueba.

---

## 📊 Panel de Administración

Ruta: `/admin`  
Accede con las credenciales de admin configuradas.  
Podrás:
- Ver todos los pedidos y cambiar estado.
- Ver estadísticas numéricas y gráficas.
- Descargar reportes CSV.

---

## 📱 Progressive Web App (PWA)

Ya incluye:
- `manifest.json`
- `service-worker.js`

✅ Al abrir la tienda en un móvil compatible, aparecerá la opción **“Instalar”**.  
✅ Funciona offline para las páginas principales gracias al Service Worker básico.

---

## 🧪 Sugerencias

🔷 Cambia las claves API por las reales al pasar a producción.  
🔷 Añade HTTPS en producción para que Stripe, PayPal y la PWA funcionen correctamente.  
