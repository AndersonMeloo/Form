<?php

header('Content-Type: application/json');


$host = 'localhost';

$db = 'formReact';

$user = 'root';

$pass = '';

try {

    $pdo = new PDO("mysql:host=$host;dbname=$db;", $user, $pass);

    #PDO::ATTR_ERRMODE: Define o modo de Erro de Conexão
    #PDO::ERRMODE_EXCEPTION: Faz que o PDO lance um ERRO quando houver ERRO de CONEXÃO
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (Exception $e) {

    echo json_encode(['sucess' => false, "message" => 'Erro de Conexão: ' . $e->getMessage()]);
    exit;
}
