<?php
session_start();
require_once 'includes/db.php';
require_once 'includes/functions.php';

if (!isset($_SESSION['user_id'])) {
    header('Location: login.php');
    exit;
}

guardarPedido($conn, $_SESSION['user_id'], $_SESSION['carrito']);
$_SESSION['carrito'] = [];
header('Location: index.php?pedido=ok');
?>