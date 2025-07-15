<?php
session_start();
if (!isset($_SESSION["admin"]) || $_SESSION["admin"] !== true) {
    header("Location: index.php");
    exit;
}

include '../includes/db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["id"])) {
    $id = $_POST["id"];
    try {
        $stmt = $conn->prepare("DELETE FROM productos WHERE id = ?");
        $stmt->execute([$id]);
        header("Location: ../index.php?eliminado=1");
        exit;
    } catch (PDOException $e) {
        echo "Error al eliminar: " . $e->getMessage();
    }
}
?>