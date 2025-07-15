<?php
$conn = new mysqli('localhost', 'root', '', 'tienda_online');
if ($conn->connect_error) die("Error DB: ".$conn->connect_error);
?>