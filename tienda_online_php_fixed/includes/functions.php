<?php
function getProductos($conn) {
    return $conn->query("SELECT * FROM productos")->fetch_all(MYSQLI_ASSOC);
}
function getProductoById($conn, $id) {
    return $conn->query("SELECT * FROM productos WHERE id=$id")->fetch_assoc();
}
function registerUser($conn, $email, $password) {
    $hash = password_hash($password, PASSWORD_DEFAULT);
    return $conn->query("INSERT INTO usuarios (email, password) VALUES ('$email','$hash')");
}
function loginUser($conn, $email, $password) {
    $res = $conn->query("SELECT * FROM usuarios WHERE email='$email'");
    if ($row = $res->fetch_assoc()) {
        if (password_verify($password, $row['password'])) {
            $_SESSION['user_id'] = $row['id'];
            return true;
        }
    }
    return false;
}
function guardarPedido($conn, $user_id, $carrito) {
    $conn->query("INSERT INTO pedidos (usuario_id, fecha) VALUES ($user_id, NOW())");
    $pedido_id = $conn->insert_id;
    foreach ($carrito as $id => $cantidad) {
        $conn->query("INSERT INTO pedidos_detalle (pedido_id, producto_id, cantidad) VALUES ($pedido_id, $id, $cantidad)");
    }
}
?>