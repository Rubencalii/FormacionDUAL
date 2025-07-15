<?php
/**
 * Conexión a la base de datos mediante PDO.
 * Utiliza variables de entorno para credenciales si existen.
 * Mantiene compatibilidad con la variable $conn usada en el proyecto original.
 */
function getPDO() {
    static $pdo = null;
    if ($pdo === null) {
        $host = getenv('DB_HOST') ?: 'localhost';
        $db   = getenv('DB_NAME') ?: 'tienda_online';
        $user = getenv('DB_USER') ?: 'root';
        $pass = getenv('DB_PASS') ?: '';
        $charset = 'utf8mb4';

        $dsn = "mysql:host=$host;dbname=$db;charset=$charset";
        $options = [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ];
        try {
            $pdo = new PDO($dsn, $user, $pass, $options);
        } catch (PDOException $e) {
            die("❌ Error al conectar a la base de datos: " . $e->getMessage());
        }
    }
    return $pdo;
}

// Alias de compatibilidad: sigue existiendo $conn
$pdo  = getPDO();
$conn = $pdo;
?>