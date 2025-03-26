<?php

require "register-user.php";

$nome = $_POST['name'] ?? null;
$sobrenome = $_POST['sobrenome'] ?? null;
$email = $_POST['email'] ?? null;
$anoNascimento = $_POST['dataNascimento'] ?? null;
$senha = $_POST['password'] ?? null;

if (!$nome || !$sobrenome || !$email || !$anoNascimento || !$senha) {

    // json_encode() - Converte Array/Objeto PHP para JSON
    echo json_encode(['sucess' => false, "message" => 'Preencha todos os campos']);
    exit;
};

$senhaHash = password_hash($senha, PASSWORD_BCRYPT);

try {

    $sql = "INSERT INTO formReact (nome, sobrenome, email, anoNascimento, senha) VALUES (:nome, :sobrenome, :email, :anoNascimento, :senha)";

    $stmt = $pdo->prepare($sql);

    $stmt->bindParam(':nome', $nome);
    $stmt->bindParam(':sobrenome', $sobrenome);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':anoNascimento', $anoNascimento);
    $stmt->bindParam(':senha', $senha);

    if ($stmt->execute()) {
        // Se der certo executa a mensagem de SUCESSO
        echo json_encode(['sucess' => true, 'message' => 'Usuário cadastrado com sucesso']);
    } else {
        // Se der errado executa ERRO
        echo json_encode(['sucess' => false, 'message' => 'Erro ao cadastrar usuário']);
    }
} catch (Exception $e) {

    echo json_encode(['sucess' => false, 'message' => 'Erro ao cadastrar usuário' . $e->getMessage()]);
}
