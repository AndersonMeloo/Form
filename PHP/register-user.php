<?php

require "register-user.php";

$name = $_POST['name'] ?? null;
$sobrenome = $_POST['sobrenome'] ?? null;
$email = $_POST['email'] ?? null;
$date = $_POST['date'] ?? null;
$password = $_POST['password'] ?? null;

if(!$name || !$sobrenome || !$email || !$date || !$password) {

    // json_encode() - Converte Array/Objeto PHP para JSON
    echo json_encode(['sucess' => false, "message" => 'Preencha todos os campos']);
    exit;
}