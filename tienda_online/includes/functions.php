<?php
require_once __DIR__ . '/db.php';

/**
 * Compatibilidad:
 *  - getProductos($conn)  (estilo antiguo)
 *  - getProductos()       (estilo nuevo)
 *  - getProductoById($conn, $id)
 *  - getProductoById($id)
 */

function getProductos($conn_or_null = null) {
    global $conn;
    $stmt = $conn->query("SELECT * FROM productos");
    return $stmt->fetchAll();
}

function getProductoById($conn_or_id, $id = null) {
    global $conn;
    // Detectar la forma antigua: primer parámetro es $conn, segundo es $id
    if (is_object($conn_or_id) && $id !== null) {
        $id_param = $id;
    } else {
        $id_param = $conn_or_id;
    }
    $stmt = $conn->prepare("SELECT * FROM productos WHERE id = ?");
    $stmt->execute([$id_param]);
    return $stmt->fetch();
}

function registerUser($conn_or_email, $email_or_password, $maybe_password = null) {
    global $conn;
    // Soportar forma antigua registerUser($conn, $email, $password)
    if (func_num_args() === 3) {
        [$tmp, $email, $password] = [$conn_or_email, $email_or_password, $maybe_password];
    } else {
        [$email, $password] = [$conn_or_email, $email_or_password];
    }
    $hash = password_hash($password, PASSWORD_DEFAULT);
    $stmt = $conn->prepare("INSERT INTO usuarios (email, password) VALUES (?, ?)");
    return $stmt->execute([$email, $hash]);
}

function loginUser($conn_or_email, $email_or_password, $maybe_password = null) {
    global $conn;
    if (func_num_args() === 3) {
        [$tmp, $email, $password] = [$conn_or_email, $email_or_password, $maybe_password];
    } else {
        [$email, $password] = [$conn_or_email, $email_or_password];
    }
    $stmt = $conn->prepare("SELECT id, password FROM usuarios WHERE email = ?");
    $stmt->execute([$email]);
    if ($row = $stmt->fetch()) {
        if (password_verify($password, $row['password'])) {
            $_SESSION['user_id'] = $row['id'];
            return true;
        }
    }
    return false;
}

function guardarPedido($conn_or_user_id, $user_id_or_cart, $maybe_cart = null) {
    global $conn;
    // Formas:
    //  - guardarPedido($conn, $user_id, $carrito)  (antigua)
    //  - guardarPedido($user_id, $carrito)         (nueva)
    if (func_num_args() === 3) {
        [$tmp, $user_id, $carrito] = [$conn_or_user_id, $user_id_or_cart, $maybe_cart];
    } else {
        [$user_id, $carrito] = [$conn_or_user_id, $user_id_or_cart];
    }
    try {
        $conn->beginTransaction();
        $stmt = $conn->prepare("INSERT INTO pedidos (usuario_id, fecha) VALUES (?, NOW())");
        $stmt->execute([$user_id]);
        $pedido_id = $conn->lastInsertId();

        $detalle = $conn->prepare("INSERT INTO pedidos_detalle (pedido_id, producto_id, cantidad) VALUES (?,?,?)");
        foreach ($carrito as $producto_id => $cantidad) {
            $detalle->execute([$pedido_id, $producto_id, $cantidad]);
        }
        $conn->commit();
        return $pedido_id;
    } catch (Exception $e) {
        $conn->rollBack();
        throw $e;
    }
}

function crearPago($pedido_id, $monto, $estado = 'pending', $stripe_intent = null) {
    global $conn;
    $stmt = $conn->prepare("INSERT INTO pagos (pedido_id, stripe_payment_intent, monto, estado) VALUES (?,?,?,?)");
    return $stmt->execute([$pedido_id, $stripe_intent, $monto, $estado]);
}

/**
 * Luhn algorithm para validar nº de tarjeta (cliente sin pasarela real).
 */
function luhnCheck($number) {
    $number = preg_replace('/\D/', '', $number);
    $sum = 0;
    $alt = false;
    for ($i = strlen($number) - 1; $i >= 0; $i--) {
        $n = intval($number[$i]);
        if ($alt) {
            $n *= 2;
            if ($n > 9) $n -= 9;
        }
        $sum += $n;
        $alt = !$alt;
    }
    return ($sum % 10) === 0;
}
?>